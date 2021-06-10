// 구현에 필요한 코어
export default class Component {
	$target;
	$state;
	constructor($target) {
		this.$target = $target;
		this.setup();
		this.render();
	}
	setup() { };
	template() { return ''; }
	// render가 실행될 때마다 이벤트가 새로 등록됨.
	render() {
		this.$target.innerHTML = this.template();
		this.setEvent();
	}
	setEvent() { }
	setState(newState) {
		this.$state = { ...this.$state, ...newState };
		this.render();
	}
}