# simple-rater
A simple jquery based rating technique like playstore rating which is highly customizable and very simple to add in any web-based project

## Adding it to your html

Simply create a div, assign a class or id and to convert that div to simple-rater call the `rating` method.
```javascript

    <div id="rater"></div>

     <script type="text/javascript">
         $('#rater').rating();
     </script>
```

## Even customization is so simple !!

```javascript

    $('#rater').rating({
       size:30,               //this option defines the size of the star
       primaryColor:"#999",   //this color code defines the primary color of stars
       hoverColor:"#fdb300",  //this color code defines the hover state of stars   
       count:10               //defines the number of stars you want in a rater
    })
```

## Controlling the rater

```javascript

    $('#rater').rating('disable')    //disable the rater. decrease the opacity on disable
    
    $('#rater').rating('refresh')    //reset the value of rater and rate count set to 0
```

## Get value from rater

```javascript

   $('#rater').rating('val');

```
