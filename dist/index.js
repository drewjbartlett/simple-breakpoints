'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var _this = this;

        var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { mobile: 480, tablet: 640, small_desktop: 1024, large_desktop: 1180 };

        _classCallCheck(this, _class);

        this.breakpoints = breakpoints;
        this.getViewportSize();

        this.viewport = this.getViewportSize();
        this.lastBreakpoint = this.currentBreakpoint();

        window.addEventListener('resize', function () {
            _this.viewport = _this.getViewportSize();

            var currentBreakpoint = _this.currentBreakpoint(),
                direction = void 0;

            if (currentBreakpoint !== _this.lastBreakpoint) {
                _Dispatcher2.default.fire('breakpointChange', _this.lastBreakpoint, currentBreakpoint);

                if (_this.breakpoints[_this.lastBreakpoint] > _this.breakpoints[currentBreakpoint]) {
                    direction = 'Down';
                } else {
                    direction = 'Up';
                }

                _Dispatcher2.default.fire('breakpointChange' + direction, _this.lastBreakpoint, currentBreakpoint);

                _this.lastBreakpoint = currentBreakpoint;
            }
        });
    }

    _createClass(_class, [{
        key: 'on',
        value: function on(event, callback) {
            _Dispatcher2.default.on(event, callback);
        }
    }, {
        key: 'off',
        value: function off(event) {
            _Dispatcher2.default.off(event);
        }
    }, {
        key: 'getViewportSize',
        value: function getViewportSize() {
            var win = window,
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
    }, {
        key: 'currentBreakpoint',
        value: function currentBreakpoint() {
            if (this.isMobile()) {
                return 'mobile';
            }

            if (this.isTablet()) {
                return 'tablet';
            }

            if (this.isSmallDesktop()) {
                return 'small_desktop';
            }

            if (this.isLargeDesktop()) {
                return 'large_desktop';
            }
        }
    }, {
        key: 'isBetween',
        value: function isBetween(smallBreakpoint, largeBreakpoint) {
            return this.viewport.width >= this.breakpoints[smallBreakpoint] && this.viewport.width <= this.breakpoints[largeBreakpoint];
        }
    }, {
        key: 'isLessThan',
        value: function isLessThan(breakpoint) {
            return this.viewport.width < this.breakpoints[breakpoint];
        }
    }, {
        key: 'isGreaterThan',
        value: function isGreaterThan(breakpoint) {
            return this.viewport.width > this.breakpoints[breakpoint];
        }
    }, {
        key: 'isLessThanEqualTo',
        value: function isLessThanEqualTo(breakpoint) {
            return this.viewport.width <= this.breakpoints[breakpoint];
        }
    }, {
        key: 'isGreaterThanEqualTo',
        value: function isGreaterThanEqualTo(breakpoint) {
            return this.viewport.width >= this.breakpoints[breakpoint];
        }
    }, {
        key: 'isMobile',
        value: function isMobile() {
            return this.isLessThanEqualTo('mobile');
        }
    }, {
        key: 'isTablet',
        value: function isTablet() {
            return this.isBetween('mobile', 'small_desktop');
        }
    }, {
        key: 'isSmallDesktop',
        value: function isSmallDesktop() {
            return this.isBetween('small_desktop', 'large_desktop');
        }
    }, {
        key: 'isLargeDesktop',
        value: function isLargeDesktop() {
            return this.viewport.width >= this.breakpoints.large_desktop;
        }
    }]);

    return _class;
}();

exports.default = _class;
;