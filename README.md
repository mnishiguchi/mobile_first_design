# Mobile first design
Layout with responsive grids of 3 columns and 5 columnsand responsive navigation bar.

- Phase 1: Desktop first
- Phase 2: Mobile first

==

## Thanks
- http://rachidmrad.com/ for teaching me CSS tricks
- http://imgur.com/gallery/fmiK6MM for a nice image of a beehive
- https://en.wikipedia.org/wiki/Bee for bee info
- https://angularjs.org/ for an awesome frond-end framework
- http://colorswatches.info/facebook-blue/ for a nice color swatch
- [Default Sizes for Twitter Bootstrap’s Media Queries](https://scotch.io/quick-tips/default-sizes-for-twitter-bootstraps-media-queries)
- [CSS Animations for ng-hide/ng-show](http://ng.malsup.com/#!/css-animations-for-ng-hide_ng-show)

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
  overflow: hidden;    /* This is to prevent the margin collapsing */
}
```

==

## Dealing with overflowing text

### Using Angular
- Suitable for multiple lines
- https://docs.angularjs.org/api/ng/filter/limitTo

```html
{{ longString | limitTo: 20 }}<span ng-if="longString.length > 20">&hellip;</span>
```

### Using CSS text-overflow property
- Suitable for a single line that has max width.

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

==

## Clearfix
- When elements are floating, the DOM consider that they do not have height.
- Good idea to apply the clearfix technique after the end of the last floating element. 

```css
.clearfix {
  clear: both;
}
```

==

## Font pairs

- http://briangardner.com/google-font-combinations/
- http://femmebot.github.io/google-type/
- http://fontpair.co/

==

## Facebook swatch

- http://colorswatches.info/facebook-blue/
- http://www.color-hex.com/color/3b5998

==

## Navigation menu with ng-animate

### 1. Load the ng-animate module
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.2/angular-animate.min.js"></script>
```

### 2. Inject the ng-animate module into the app module
```js
  angular
    .module( "app", [
      "ngRoute",
      "ngAnimate"
    ]);
```

### 3. Define a CSS class for animation
```css
.ng-hide-add, .ng-hide-remove {
    /* ensure visibility during the transition */
    display: block !important; /* yes, important */
}
.cssSlideUp {
    transition: .5s linear all;
    height: 250px;
}
.cssSlideUp.ng-hide {
    height: 0;
}
/*
.cssFade {
    transition: 0.5s linear all;
    opacity: 1;
}
.cssFade.ng-hide {
    opacity: 0;
}
*/

```

### 4. Find the navigation element and add the animation class at run-time.
```js
// ...
    function AppNavbarController( $route, $location, $window, $scope ) {

      var breakpoint = 480;

      var navElem;        // The angular element of the navigation menu.

      var vm  = this;

      vm.pages = [];      // path:  The "#" paths, e.g., "#/about".
                          // title: The same as the page title.
      vm.activeTab;       // The name of the active tab.
      vm.isMobile;        // The current display type.
      vm.isVisibleMenu;   // The visibility of hamburger button.


      // Expose the public methods.
      vm.toggleMenu = toggleMenu;


      /**
       * Toggles the nav menu with animation effect.
       */
      function toggleMenu() {

        // If not done already, find the nav element and add the animation class.
        if ( ! navElem ) {

          navElem = angular.element( document.querySelector( '#app-navbar--nav' ) );
          navElem.addClass( "cssSlideUp" );

        }

        // Toggle the visibility.
        vm.isVisibleMenu = ! vm.isVisibleMenu;

      };

      // ...

    } // end AppNavbarController
// ...
```
