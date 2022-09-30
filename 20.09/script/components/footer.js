class Footer{
    constructor() {
        this.elem = document.createElement('footer');
        this.elem.classList.add('footer_component');
        // this.elem.innerHTML = `
        // <h2>footer</h2>
        // `;
    };

    init() {
        return this.elem;
    };
};

export default new Footer().init();