export class Form {
    constructor({ el, clb }) {
        this.el = el;

        this.el.addEventListener("submit", (event) => this._onSubmit(event));
        this.onSubmit = clb;
    }

    render() {
        this.el.innerHTML = `
            <form>
                <textarea></textarea>
                <input type="submit" value="Send">
            </form>
        `;
    }

    _onSubmit(event) {
        event.preventDefault();
        // console.log(event);
        this.onSubmit({ "text": event.target.querySelector('textarea').value, "author": "test" });
    }
}
