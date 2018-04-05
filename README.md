# Simple Breakpoints

[![npm](https://img.shields.io/npm/v/simple-breakpoints.svg)](https://www.npmjs.com/package/simple-breakpoints)
[![npm](https://img.shields.io/npm/dt/simple-breakpoints.svg)](https://www.npmjs.com/package/simple-breakpoints)

_A simple breakpoints plugin based off of four simple breakpoint sizes (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) with support to listen for breakpoint change events_

## Installation and usage

    $ npm install simple-breakpoints --save

```javascript
    import SimpleBreakpoints from 'simple-breakpoints'

    // default breakpoint sizes: { mobile: 480, tablet: 640, small_desktop: 1024, large_desktop: 1180 }
    var breakpoints = new SimpleBreakpoints();

    if(breakpoints.isMobile()) {
        // do something for mobile
    }

    if(breakpoints.isSmallDesktop()) {
        // do something for small desktop
    }

    if(breakpoints.isBetween('small_desktop', 'large_desktop')) {
        // do something between small and large desktop
    }

```

### Listening to events

```javascript
    // on all breakpoint changes
    breakpoints.on('breakpointChange', (from, to) => {
        console.log(`change from ${from} to ${to}`);
        // change from small_desktop to large_desktop
        // change from tablet to mobile
    });

    // on breakpoint changes from small to large
    breakpoints.on('breakpointChangeUp', (from, to) => {
        console.log(`change Up from ${from} to ${to}`);
        // change from small_desktop to large_desktop
    });

    // on breakpoint changes from large to small
    breakpoints.on('breakpointChangeDown', (from, to) => {
        console.log(`change Down from ${from} to ${to}`);
        // change from large_desktop to small_desktop
    });

    // remove all events from `breakpointChangeDown`
    breakpoints.off('breakpointChangeDown');

    // fire an event only once
    breakpoints.once('breakpointChange', (from, to) => {
        console.log(`firing an event ${from} to ${to} only once`);
        // change from large_desktop to small_desktop
    });

```

### Defining your own breakpoints

```javascript
    import SimpleBreakpoints from 'simple-breakpoints'

    var breakpoints = new SimpleBreakpoints({
        mobile        : 320,
        tablet        : 640,
        small_desktop : 900,
        large_desktop : 1200
    });

```

### API

Function | Params | Description
------ | -------- | -----------
getViewportSize |  | returns the viewport size as object `{ width: 1024, height: 768 }` _this is fired on `window.resize` and is stored in `breakpoints.viewport`_
currentBreakpoint | | returns current breakpoint size (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`)
isBetween | smallBreakpoint, largeBreakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is between two breakpoints
isLessThan | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is less than the width of the breakpoint
isGreaterThan | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is greater than the width of the breakpoint
isLessThanEqualTo | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is less than or equal the width of the breakpoint
isGreaterThanEqualTo | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is greater than or equal the width of the breakpoint
isMobile | | Check if the viewport is within the `mobile` breakpoint
isTablet | | Check if the viewport is within the `tablet` breakpoint
isSmallDesktop | | Check if the viewport is within the `small_desktop` breakpoint
isLargeDesktop | | Check if the viewport is within the `large_desktop` breakpoint
on (event, callback) | (`'breakpointChange' | 'breakpointChangeUp' | 'breakpointChangeDown'`, `callback(from, to)`) | watch for changes on breakpoints with and fire a callback
once (event, callback) | (`'breakpointChange' | 'breakpointChangeUp' | 'breakpointChangeDown'`, `callback(from, to)`) | watch for changes on breakpoints with and fire a callback only *once*
off (event) | (`'breakpointChange' | 'breakpointChangeUp' |  'breakpointChangeDown'`)| Remove event listener for breakpoint change

### For using with [Vue.js](https://vuejs.org/), see [vue-simple-breakpoints](https://github.com/drewjbartlett/vue-simple-breakpoints)
