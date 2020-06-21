class ProgressBar {

	constructor(options = {}) {
		this.options = Object.assign({
			el: document.querySelector('.progress-bar'),
			beforeChangeCB: null,
			afterChangeCB: null
		}, options);
		this.barEl = this.options.el.querySelector('.bar');
		this.percentage = 0;

		this.setPercentage(this.options.el.getAttribute('data-progress-bar-percentage'));
	}

	_parsePercentage(percentage) {
		let p = parseFloat(percentage);

		if(p < 0) {
			p = 0;
		} else if(p > 100) {
			p = 100;
		}

		return p;
	}

	_animate() {
		const translate = (100 - this.percentage) * -1;
		this.barEl.style.transform = `translateX(${translate}%)`;
	}

	setPercentage(percentage) {
		percentage = this._parsePercentage(percentage);

		if(typeof this.options.beforeChangeCB === 'function') {
			this.options.beforeChangeCB(this.percentage, percentage, this.options.el);
		}

		this.percentage = percentage;
		this.options.el.setAttribute('data-progress-bar-percentage', this.percentage);

		this._animate();

		
		if(typeof this.options.afterChangeCB === 'function') {
			this.options.afterChangeCB(this.percentage, this.options.el);
		}
	}

}

export default ProgressBar;