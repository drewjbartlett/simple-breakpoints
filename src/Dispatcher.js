class Dispatcher {
    constructor () {
        this.events = {};
        this.onceEvents = {};
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

    once (events, callback) {
        this.on(events, callback);
        this.onceEvents.push(events);
    }

    fire (event, ...params) {
        if(!this.events[event]) return false;

        this.events[event].forEach( callback => callback(...params) );

        if(this.onceEvents[event]) {
            this.off(event);
        }
    }

    all () {
        return this.events;
    }
}

export default new Dispatcher();
