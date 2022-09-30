import header from "./header.js";
import init from "./header.js";
import footer from "./footer.js";
import main from "./main.js";

class App{
    constructor(selector) {
        this.root = document.querySelector(selector);
        this.elem = document.createElement('div');
        this.elem.innerHTML = `
        <h2>Header</h2>
        <h2>Main</h2>
        <h2>Footer</h2>
        `;
    };

    render(...elem) {
        elem.forEach( el => this.root.append(el));
    };

    init() {
        this.render(header, main, footer);
    };
};

export default App;