# Mobile first design
- Phase 1: Desktop first
- Phase 2: Mobile first

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
- Give each row the property `overflow:auto;`

```css
.row {
  display: block;
  clear: both;
  margin-bottom: 40px;
  overflow:auto;  /* This is to prevent the margin collapsing */
}
```

### Facebook swatch

http://colorswatches.info/facebook-blue/
