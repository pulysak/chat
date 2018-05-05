export class Form {
	constructor({el}) {
		this.el = el;
	}

	render() {
		this.el.innerHTML = `
			<form>
				<textarea></textarea>
				<input type="submit" value="Send">
			</form>
		`;
	}
}

