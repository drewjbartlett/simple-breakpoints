# Simple Breakpoints

## Installation and usage

    $ npm install vue-flickity

```javascript
    import SimpleBreakpoints from 'simple-breakpoints'

    var breakpoints = new Breakpoints();

    if(breakpoints.isMobile()) {
        // do something for mobile
    }
```

### Using with libraries like Vue.js[https://vuejs.org]

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
