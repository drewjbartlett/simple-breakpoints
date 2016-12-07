export default class {
    constructor(breakpoints = { mobile: 480, tablet: 640, small_desktop: 1024, large_desktop: 1180 }) {
        this.breakpoints = breakpoints;
        this.getViewportSize();
        this.viewport = this.getViewportSize();

        window.addEventListener('resize', () =>{
            this.viewport = this.getViewportSize();
        });
    }

    getViewportSize() {
		let e = window,
			a = 'inner';

		if (!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}

        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
	}

    currentBreakpoint() {
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

    isBetween(smallBreakpoint, largeBreakpoint) {
        return this.viewport.width >= this.breakpoints[smallBreakpoint] && this.viewport.width <= this.breakpoints[largeBreakpoint];
    }

    isLessThan(breakpoint) {
        return this.viewport.width < this.breakpoints[breakpoint];
    }

    isGreaterThan(breakpoint) {
        return this.viewport.width > this.breakpoints[breakpoint];
    }

    isLessThanEqualTo(breakpoint) {
        return this.viewport.width <= this.breakpoints[breakpoint];
    }

    isGreaterThanEqualTo(breakpoint) {
        return this.viewport.width >= this.breakpoints[breakpoint];
    }

    isMobile() {
        return this.isLessThanEqualTo('mobile');
    }

    isTablet() {
        return this.isBetween('mobile', 'small_desktop');
    }

    isSmallDesktop() {
        return this.isBetween('small_desktop', 'large_desktop');
    }

    isLargeDesktop() {
        return this.viewport.width >= this.breakpoints.large_desktop;
    }

};
