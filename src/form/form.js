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

    formIsValid(form) {
        this.formErrors = {};
        const text = form.querySelector('textarea').value;

        if (!text) {
            this.formErrors['message-text'] = ['Value is required!'];
        }
        return Object.keys(this.formErrors).length === 0;
    }

    renderErrors() {
        function insertAfter(elem, refElem) {
            return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
        }

        for ( const field in this.formErrors ) {
            this.formErrors[field].forEach(
                (errorMessage) => {
                    const errorDiv = document.createElement('div');
                    errorDiv.innerHTML = errorMessage;
                    insertAfter(errorDiv, this.el.querySelector(`.${field}`));
                }
            );
        }
    }


    _onSubmit(event) {
        event.preventDefault();
        if (!this.formIsValid(event.target)) {
            this.renderErrors();
            return;
        }
        this.onSubmit({ 'text': event.target.querySelector('textarea').value, 'author': 'test' });
    }
}
