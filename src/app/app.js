import { Chat } from './../chat/chat.js';
import { Form } from './../form/form.js';


export class App {
    constructor({ el }) {
        this.el = el;

        this.chat = new Chat({
            el: document.createElement('div'),
        });
        this.form = new Form({
            el: document.createElement('div'),
            clb: (message) => this._onFormSubmit(message),
        });
        this.el.append(this.chat.el, this.form.el);

        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _onFormSubmit(message) {
        this.chat.addMessage(message);
        this.render();
    }
}
