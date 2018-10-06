# realworld_jquery_jeditable

A JQuery-jeditable charcounter with everything you need. For real!
<a href="https://www.hippotec.com"><img src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t31.0-8/23415474_1885862811454462_8002399387929507367_o.jpg?_nc_cat=103&amp;oh=2af166f3b43b7567bcd90d44995ba7ff&amp;oe=5C164C85" alt="Hippotec" height="210"></a>

We were not happy with any of the [existing charcounters](https://jeditable.elabftw.net/) for JQuqery's textarea. They were not built with real-world requirements in mind.

So we created a real-world charcounter that:
 - Can count forwards and backwards.
 - Can limit char count (or not, you choose).
 - Supports any HTML tag container.
 - Adds to the textarea the capability of submit on Enter.
 - Display custom char count text (in your own language, even Hebrew)


### Usage
```javascript
$("#myTextArea4").charCounter();
```

```javascript
$("#myTextArea3").charCounter(20, {
	container: "<em></em>",
	formatUp: "%1 characters typed",
	pulse: false,
	delay: 100
});
```

```javascript
$("#myTextArea3").charCounter(20, {
	format: "%1 אותיות נותרו",
	countUp: false
});
```

Or even inside your JQuery datatable:
```javascript
"aoColumns": [
            null,//null for read-only columns
            {
                type: 'charcounter',
                charcounter: {
                    characters: 60000
                }
            },//Empty object is used for the default editable settings
            null,//null for read-only columns
            null,//null for read-only columns
            null,//null for read-only columns
        ]
```




### Customization

| Property     	| Explanation                                                                 	| Default                     	|
|--------------	|-----------------------------------------------------------------------------	|-----------------------------	|
| characters   	| The max amount of characters (0 for unlimited)                              	| 100                         	|
| countUp      	| Wether the counter counts forwards (up) or backwards (down from characters) 	| true                        	|
| container    	| HTML container for the char counter                                         	| `'<p></p>'`                 	|
| format       	| The text to display when counting backwards                                 	| '(%1 characters remaining)' 	|
| formatUp     	| The text to display when counting forwards                                  	| '(%1 characters)'           	|
| pulse        	| Wether to "pulse" when char limit reached (try it!)                         	| true                        	|
| delay        	| Delay (in ms) prior to updating char counter text                           	| 0                           	|
| enterSubmits 	| Enables textarea submit on pressing the Enter key                           	| true                        	|
| classname    	| HTML class name                                                             	| 'charcounter'               	|                   	|

## Based on
Tom Deater's character_counter: [http://www.tomdeater.com/jquery/character_counter/](http://www.tomdeater.com/jquery/character_counter/) <br/>Copyright 2007 Tom Deater ([http://www.tomdeater.com](http://www.tomdeater.com))

Mika Tuupola, Nicolas CARPi's jquery-jeditable: [https://github.com/NicolasCARPi/jquery_jeditable](https://github.com/NicolasCARPi/jquery_jeditable)<br/>© 2006 Mika Tuupola, Nicolas CARPi

## License
[MIT](https://www.tldrlegal.com/l/mit), Copyright 2018 Nitzan Weidenfeld, Hippotec LTD