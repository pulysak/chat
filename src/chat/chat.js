MESSAGES = [
	{author: 'Pavel', text: 'hi there'},
	{author: 'Pit', text: 'hello!'},
];

class Chat {
	constructor({el, data}) {
		this.el = el;
		this.data = data || { messages: MESSAGES };
	}

	render() {
		this.el.innerHTML = `
			<div class="chat">
				${this._getMessagesHtml()}
			</div>	
		`;
	}

	_getMessagesHtml() {
		return this.data.messages.map(
			(message) => `<div clss="chat__message">${message.author}---${message.text}</div>`
		).join('');
	}
}