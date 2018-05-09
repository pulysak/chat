export class Form {
    constructor({ el, clb }) {
        this.el = el;
        this.formErrors = {};
        this.el.addEventListener('submit', (event) => this._onSubmit(event));
        this.onSubmit = clb;
    }

    render() {
        this.el.innerHTML = `
            <form>
                <textarea class='message-text'></textarea>
                <input type='submit' value='Send'>
            </form>
        `;
    }

    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit({ 'text': event.target.querySelector('textarea').value, 'author': 'test' });
    }
}
