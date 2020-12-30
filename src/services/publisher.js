export class Publisher {

	subscribers = {};

	subscribe = (eventType, listener) => {
		this.checkEventType(eventType).push(listener);
	}

	unsubscribe = (eventType, listener) => {
		if(this.subscribers[eventType]){
			this.subscribers[eventType].filter(func => func !== listener);
		}
	}

	notify = (eventType, data) => {
		if(this.subscribers[eventType]) {
			this.subscribers[eventType].forEach(func => func(data));
		}
	}

	checkEventType = (eventType) => {
		if(!this.subscribers[eventType]){
			this.subscribers[eventType] = [];
		}
		return this.subscribers[eventType];
	}

	get methods() {
		return {
			subscribe: this.subscribe,
			unsubscribe: this.unsubscribe,
			notify: this.notify,
		}
	}

}
