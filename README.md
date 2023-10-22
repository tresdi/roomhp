# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their control buttons

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://tresdi.github.io/roomhp/](https://tresdi.github.io/roomhp/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Bootstrap Framework v4.6.2
- NPM

### VSCode Extension Recommendation
```json
{
    "recommendations": [
        "glenn2223.live-sass",
        "ritwickdey.liveserver"
    ]
}
```

### What I learned

- I used the HTML5 semantic markup the best as I can (used to struggle in choosing the right element).
```html
<header>
  <nav></nav>
</header>
<main>
  ...
  <article>
  ...
</main>
<footer>
```
- I choosed this challenge in order to familiarize with BS native components, referring to the tutorial examples, eventually.<br/>
I occasionally learned how to use Bootstrap JS plugin, like activating BS carousel elements using Carousel JS Plugin or listening to custom events like &laquo; *show.bs.collapse* &raquo; or &laquo; *slide.bs.carousel* &raquo;.
```html
<div class="carousel slide" id="heroFigureCarousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      ...
```
```js
heroFigureCarousel.carousel({
    ride: 'carousel',
    pause: false,
    interval: 5000,
}, 'cycle')
```
- I also combined SCSS with BS themes customizing for practical purpose: inheritance, variables, functions, modules, ...
```scss
// inheritance
.shop-btn {
    @extend .btn;
    ...
}
// variables
$dark_gray: hsl(0, 0%, 63%);

// functions 
@function pxToRem($basePx: 12px, $value) {
    @return (($value / $basePx) * 1rem);
}

// modules
@import "navbar";
@import "hero";
```
- Discovered z-index debugging browser extension: for MS Edge, it integrates a `3D View` mode to debugg CSS z-index from within the devtools


### Continued development

- On upcoming projects, I will pay more attention on how to effectively use HTML5 markup and how to efficiently structure HTML pages.
- Do challenges involving other Bootstrap components
- Learn how to use animate.css library

### Useful resources

- [Bootstrap 4 Documentation](http://getbootstrap.com/docs/4.6)
- [Sass Language](https://sass-lang.com)
- [W3School HTML5 Semantics]()

## Author

- Github - [https://github.com/tresdi](https://github.com/tresdi)
- Frontend Mentor - [@tresdi](https://www.frontendmentor.io/profile/tresdi)
- Twitter - [@RomeoRandria](https://www.twitter.com/RomeoRandria)
