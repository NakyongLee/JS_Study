// 컴포넌트 역할
import Component from "../core/Component.js";

// 여러 기능 추가
// 하나의 파일에서 담당하는 기능이 많아서 코드를 관리하기 힘들어진다.
// 컴포넌트는 재활용의 목적성이 크다.
// 컴포넌트가 최대한 작은 단위의 일을 하도록 나누어야 한다.
export default class Items extends Component {

	// 필터링 조건에 따라 items 반환
	get filteredItems() {
		const { isFilter, items } = this.$state;
		return items.filter(({ active }) => (isFilter === 1 && active) ||
			(isFilter === 2 && !active) ||
			isFilter === 0
		);
	}

	setup() {
		this.$state = {
			isFilter: 0,
			items: [
				{
					seq: 1,
					contents: 'item1',
					active: false,
				},
				{
					seq: 2,
					contents: 'item2',
					active: true,
				}
			]
		};
	}
	template() {
		const { items } = this.$state;
		return `
			<header>
				<input type="text" class="appender" placeholder="아이템 내용 입력" />
			</header>
			<main>
				<ul>
					${this.filteredItems.map(({ contents, active, seq }) =>
			`<li data-seq="${seq}">${contents}
						<button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
							${active ? '활성' : '비활성'}
						</button>
						<button class="deleteBtn">삭제</button>
					</li>`)
				.join('')}
				</ul>
			</main>
			<footer>
      	<button class="filterBtn" data-is-filter="0">전체 보기</button>
      	<button class="filterBtn" data-is-filter="1">활성 보기</button>
      	<button class="filterBtn" data-is-filter="2">비활성 보기</button>
			</footer>
    `
	}

	setEvent() {

		//항목 추가 이벤트
		this.addEvent('keyup', '.appender', ({ key, target }) => {
			if (key !== 'Enter') return;
			const { items } = this.$state;
			const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
			const contents = target.value;
			const active = false;
			this.setState({
				items: [
					...items,
					{ seq, contents, active }
				]
			});
		})

		//항목 삭제
		this.addEvent('click', '.deleteBtn', ({ target }) => {
			const items = [...this.$state.items];
			const seq = Number(target.closest('[data-seq]').dataset.seq);
			items.splice(items.findIndex(v => v.seq === seq), 1);
			this.setState({ items });
		})

		//활성 비활성
		this.addEvent('click', '.toggleBtn', ({ target }) => {
			const items = [...this.$state.items];
			const seq = Number(target.closest('[data-seq]').dataset.seq);
			const index = items.findIndex(v => v.seq === seq);
			items[index].active = !items[index].active;
			this.setState({ items });
		})

		//필터링 조건
		this.addEvent('click', '.filterBtn', ({ target }) => {
			console.log(target.dataset.isFilter)
			this.setState({ isFilter: Number(target.dataset.isFilter) });
		})
	}
}