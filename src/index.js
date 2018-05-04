import Dispatcher from './Dispatcher';

export default class {
    constructor(breakpoints = { small_mobile: 320, mobile: 480, tablet: 640, small_desktop: 1024, large_desktop: 1180 }) {
        this.breakpoints    = breakpoints;
        this.getViewportSize();

        this.viewport       = this.getViewportSize();
        this.lastBreakpoint = this.currentBreakpoint();

        window.addEventListener('resize', () => {
            this.viewport = this.getViewportSize();

            let currentBreakpoint = this.currentBreakpoint(),
                direction;

            if(currentBreakpoint !== this.lastBreakpoint) {
                Dispatcher.fire('breakpointChange', this.lastBreakpoint, currentBreakpoint);

                if(this.breakpoints[this.lastBreakpoint] > this.breakpoints[currentBreakpoint]) {
                    direction = 'Down';
                } else {
                    direction = 'Up';
                }

                Dispatcher.fire(`breakpointChange${direction}`, this.lastBreakpoint, currentBreakpoint);

                this.lastBreakpoint = currentBreakpoint;
            }

        });
    }

    on (event, callback) {
        Dispatcher.on(event, callback);
    }

    off (event) {
        Dispatcher.off(event);
    }

    getViewportSize () {
		let win = window,
			obj = 'inner';

		if (!('innerWidth' in window)) {
			obj = 'client';
			win = document.documentElement || document.body;
		}

        return {
            width: win[obj + 'Width'],
            height: win[obj + 'Height']
        };
	}

    currentBreakpoint () {
        if(this.isSmallMobile()) {
            return 'small_mobile';
        }

        if(this.isMobile()) {
            return 'mobile';
        }

        if(this.isTablet()) {
            return 'tablet';
        }

        if(this.isSmallDesktop()) {
            return 'small_desktop';
        }

        if(this.isLargeDesktop()) {
            return 'large_desktop';
        }
    }

    isBetween (smallBreakpoint, largeBreakpoint) {
        return this.viewport.width >= this.breakpoints[smallBreakpoint] && this.viewport.width <= this.breakpoints[largeBreakpoint];
    }

    isLessThan (breakpoint) {
        return this.viewport.width < this.breakpoints[breakpoint];
    }

    isGreaterThan (breakpoint) {
        return this.viewport.width > this.breakpoints[breakpoint];
    }

    isLessThanEqualTo (breakpoint) {
        return this.viewport.width <= this.breakpoints[breakpoint];
    }

    isGreaterThanEqualTo (breakpoint) {
        return this.viewport.width >= this.breakpoints[breakpoint];
    }

    isSmallMobile () {
        return this.isLessThanEqualTo('small_mobile');
    }

    isMordernMobile () {
        return this.isBetween('small_mobile', 'mobile');
    }

    isMobile () {
        return this.isLessThanEqualTo('mobile');
    }

    isTablet () {
        return this.isBetween('mobile', 'small_desktop');
    }

    isSmallDesktop () {
        return this.isBetween('small_desktop', 'large_desktop');
    }

    isLargeDesktop () {
        return this.viewport.width >= this.breakpoints.large_desktop;
    }

};
