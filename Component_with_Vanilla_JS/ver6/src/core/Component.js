// 구현에 필요한 코어
export default class Component {
	$target;
	$state;
	constructor($target) {
		this.$target = $target;
		this.setup();
		this.setEvent();
		this.render();
	}
	setup() { };
	template() { return ''; }
	// render가 실행될 때마다 이벤트가 새로 등록됨.
	render() {
		this.$target.innerHTML = this.template();
		// this.setEvent();
	}
	setEvent() { }
	setState(newState) {
		this.$state = { ...this.$state, ...newState };
		this.render();
	}

	//이벤트 버블링을 통한 등록을 메소드로 만들기
	addEvent(eventType, selector, callback) { // 발생 이벤트 타입, 해당 element, 실행할 callback함수
		const children = [...this.$target.querySelectorAll(selector)];
		// 해당 타겟 혹은 하위 요소
		const isTarget = (target) => children.includes(target) || target.closest(selector);
		this.$target.addEventListener(eventType, event => {
			if (!isTarget(event.target)) return false; // 해당 요소가 아니면 return
			callback(event); // 맞으면 callback함수 실행
		})
	}
}