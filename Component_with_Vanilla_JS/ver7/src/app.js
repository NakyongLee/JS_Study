//ES Module의 entry file
import Items from "./components/Items.js";

class App {
	constructor() {
		const $app = document.querySelector('#app');
		// Items 컴포넌트 사용
		new Items($app);
	}
}

new App();