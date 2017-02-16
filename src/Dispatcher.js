export default class {

    constructor () {
        this.events = {};
    }

    on (events, callback) {
        events = [].concat(events);

        events.forEach(event => {
            this.events[event] = (this.events[event] || []).concat(callback);
        });
    }

    off (event) {
        delete this.events[event];
    }

    fire (event, ...params) {
        if(!this.events[event]) return false;

        this.events[event].forEach( callback => callback(...params) );
    }

    all () {
        return this.events;
    }
}
