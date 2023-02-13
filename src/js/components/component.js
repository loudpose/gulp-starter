export default class Component {
	constructor() {
		this.element = document.body;
		this.create();
	}

	create() {
		console.log(this);
	}
}