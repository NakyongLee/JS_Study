// 구현에 필요한 코어
export default class Component {
	$target;
	$props; // 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위함
	$state;
	constructor($target, $props) {
		this.$target = $target;
		this.$props = $props;
		this.setup();
		this.setEvent();
		this.render();
	}
	setup() { };
	mounted() { }; // 이미 render한 이후에 추가적인 기능을 수행하기 위함
	template() { return ''; }
	// render가 실행될 때마다 이벤트가 새로 등록됨.
	render() {
		this.$target.innerHTML = this.template();
		this.mounted(); // render 후에 mounted가 실행됨.
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