# Number Input

A tiny jQuery plugin to display input numbers in style.

![Sample](/img/screenshot.png?raw=true "Default style")

## Basic usage


Include the style, jQuery and the plugin.

```javascript
<link rel="stylesheet" type="text/css" href="css/number-input.css">  
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>  
<script src="js/number-input.jquery.js" type="text/javascript"></script>
```

Initialize, 

```javascript
$('.number-input').numberInput();
```

To get the value, 

```javascript
console.log( $('.number-input').attr('data-val') )
```


