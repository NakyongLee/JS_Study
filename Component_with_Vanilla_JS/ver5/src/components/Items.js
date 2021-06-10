// 컴포넌트 역할
import Component from "../core/Component.js";

export default class Items extends Component {
	setup() {
		this.$state = { items: ['item1', 'item2'] };
	}
	template() {
		const { items } = this.$state;
		return `
      <ul>
        ${items.map((item, key) =>
			`<li>${item}
					<button class="deleteBtn" data-index="${key}">삭제</button>
				</li>`).join('')}
      </ul>
      <button class="addBtn">추가</button>
    `
	}

	//이벤트를 각각의 하위 요소가 아니라 component의 target자체에 등록함
	//컴포넌트 생성 시점에 이벤트를 등록해두면 추가로 등록할 필요 없음
	setEvent() {

		this.$target.addEventListener('click', ({ target }) => {
			const items = [...this.$state.items];
			if (target.classList.contains('addBtn')) {
				this.setState({ items: [...items, `item${items.length + 1}`] });
			}

			if (target.classList.contains('deleteBtn')) {
				items.splice(target.dataset.index, 1);
				this.setState({ items });
			}
		})

	}
}