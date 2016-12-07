# Simple Breakpoints

_A simple breakpoints plugin based off of four simple breakpoint sizes (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`)_

## Installation and usage

    $ npm install simple-breakpoints

```javascript
    import SimpleBreakpoints from 'simple-breakpoints'

    // default breakpoint sizes: { mobile: 480, tablet: 640, small_desktop: 1024, large_desktop: 1180 }
    var breakpoints = new Breakpoints();

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

### Defining your own breakpoints

```javascript
    import SimpleBreakpoints from 'simple-breakpoints'

    var breakpoints = new Breakpoints({
        mobile        : 320,
        tablet        : 640,
        small_desktop : 900,
        large_desktop : 1200
    });

```

##API

Function | Params | Description
------ | -------- | -----------
getViewportSize |  | returns the viewport size _this is fired on `window.resize` and is stored in `breakpoints.viewport_`
currentBreakpoint | | returns current breakpoint size (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`)
isBetween | smallBreakpoint, largeBreakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is between tow breakpoints
isLessThan | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is less than the width of the breakpoint
isGreaterThan | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is greater than the width of the breakpoint
isLessThanEqualTo | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is less than or equal the width of the breakpoint
isGreaterThanEqualTo | breakpoint (`'mobile', 'tablet', 'small_desktop', 'large_desktop'`) | Check if viewport is greater than or equal the width of the breakpoint
isMobile | | Check if the viewport is within the `mobile` breakpoint
isTablet | | Check if the viewport is within the `tablet` breakpoint
isSmallDesktop | | Check if the viewport is within the `small_desktop` breakpoint
isLargeDesktop | | Check if the viewport is within the `large_desktop` breakpoint

### Using with libraries like [Vue.js](https://vuejs.org/)

```javascript
    import SimpleBreakpoints from 'simple-breakpoints'

    new Vue({
        el: '#app'

        data () {
            return {
                breakpoints: new Breakpoints()
            }
        }

    };
```

```html
    <div id="app">
        <div v-if="breakpoints.isMobile()">Mobile</div>
        <div v-if="breakpoints.isTablet()">Tablet</div>
        <div v-if="breakpoints.isSmallDesktop()">Small Desktop</div>
        <div v-if="breakpoints.isLargeDesktop()">Large Desktop</div>

        <!-- simple scalable div -->
        <div class="some-div-with-window-height" :style="{ height: breakpoints.viewport.height + 'px' }">
            A div that grows with the window
        </div>
    </div>
```
