/**
 *
 * @file Charcounter project: attaches a character counter to each textarea element in the jQuery object
 * @copyright 2007 Tom Deater (http://www.tomdeater.com)
 * @licence MIT
 * @example <caption>Charcounter example:</caption>
 * $("#myTextArea").charCounter(max, settings);
 *
 * With some hacks by Nitzan Weidenfeld, Hippotec LTD 2018
 */
(function ($) {
    $.fn.charCounter = function (max, settings) {
        max = max || 140;
        settings = $.extend({
            container: '<p></p>',
            classname: 'charcounter',
            format: '(%1 characters remaining)',
            formatUp: '(%1 characters)',
            pulse: true,
            countUp: true,
            delay: 0,
            enterSubmits: true
        }, settings);

        var p, timeout;

        function pulse(el, again) {
            if (p) {
                window.clearTimeout(p);
                p = null;
            }
            el.animate({ opacity: 0.1 }, 100, function () {
                $(this).animate({ opacity: 1.0 }, 100);
            });
            if (again) {
                p = window.setTimeout(function () { pulse(el); }, 200);
            }
        }

        function updateContainer(max, container, el) {
            if (settings.countUp) {
                container.html(settings.formatUp.replace(/%1/, el.val().length));
            } else {
                container.html(settings.format.replace(/%1/, (max - el.val().length)));
            }
        }

        function count(el, container) {
            el = $(el);
            if (max > 0 && el.val().length > max) {
                el.val(el.val().substring(0, max));
                if (settings.pulse && !p) {
                    pulse(container, true);
                }
            }
            if (settings.delay > 0) {
                if (timeout) {
                    window.clearTimeout(timeout);
                }
                timeout = window.setTimeout(function () {
                    updateContainer(max, container, el);
                }, settings.delay);
            } else {
                updateContainer(max, container, el);
            }
        }

        return this.each(function () {
            var container = (!settings.container.match(/^<.+>$/)) ? $(settings.container) : $(settings.container)
            .insertAfter(this)
            .addClass(settings.classname);

            $(this)
            .bind('keydown', function () {
                // Nitzan: adding this event handling is important because textarea does not submit by default when pressing Enter
                if (settings.enterSubmits && event.keyCode === 13 && !event.shiftKey && !event.ctrlKey) {
                    event.preventDefault();
                    $(this.form).submit()
                    return false;
                } else {
                    count(this, container);
                }
            })
            .bind('keypress', function () { count(this, container); })
            .bind('keyup', function () { count(this, container); })
            .bind('focus', function () { count(this, container); })
            .bind('mouseover', function () { count(this, container); })
            .bind('mouseout', function () { count(this, container); })
            .bind('paste', function () {
                var me = this;
                setTimeout(function () { count(me, container); }, 10);
            });
            if (this.addEventListener) {
                this.addEventListener('input', function () { count(this, container); }, false);
            }
            count(this, container);
        });
    };

})(jQuery);