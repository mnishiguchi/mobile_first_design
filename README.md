# Mobile first design
- Phase 1: Desktop first
- Phase 2: Mobile first

==

## Thanks
- http://imgur.com/gallery/fmiK6MM for a nice image of a beehive

==

## [The viewport meta tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```


==

## Giving columns margins
1. Place all the column items inside a row
2. Each column has both left and right margins
3. Since first and last children need not a outside margin, negate the unnecessay margins by applying negative margin to  of the first and last children

```css
/* This removes unnecessary margin of first and last columns */
.three-columns {
  margin: 0 -1%;
}

/* 31.33 + 1 + 1 ==> 33.33% */
.three-columns figure {
  width: 31.33%;
  float: left;
  margin: 10px 1% 10px 1%;

  background: salmon;
}
```

==

## [Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- Top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the margins combined into it, a behavior known as margin collapsing.

### Solution
- Give each row the `overflow` property

```css
.row {
  display: block;
  clear: both;
  margin-bottom: 40px;
  overflow: hidden;  /* This is to prevent the margin collapsing */
}
```

### Facebook swatch

- http://colorswatches.info/facebook-blue/
- http://www.color-hex.com/color/3b5998


==

## Dealing with overflowing text

### Using Angular
- Suitable for multiple lines

```
{{ longString | limitTo: 20 }} {{ longString.length < 20 ? '' : '...' }}
```


### Using CSS text-overflow property
- Suitable for a single line

```
figure h4 {
  overflow: hidden;
  text-overflow: ellipsis;
}
```

==

## [Default Sizes for Twitter Bootstrap’s Media Queries](https://scotch.io/quick-tips/default-sizes-for-twitter-bootstraps-media-queries)

```css
    /*==========  Mobile First Method  ==========*/

    /* Custom, iPhone Retina */ 
    @media only screen and (min-width : 320px) {
        
    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {

    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {

    }



    /*==========  Non-Mobile First Method  ==========*/

    /* Large Devices, Wide Screens */
    @media only screen and (max-width : 1200px) {

    }

    /* Medium Devices, Desktops */
    @media only screen and (max-width : 992px) {

    }

    /* Small Devices, Tablets */
    @media only screen and (max-width : 768px) {

    }

    /* Extra Small Devices, Phones */ 
    @media only screen and (max-width : 480px) {

    }

    /* Custom, iPhone Retina */ 
    @media only screen and (max-width : 320px) {
        
    }
```

==

## Detecting current screen size

```css
console.info( $window.innerWidth );
console.info( $window.innerHeight );
```
