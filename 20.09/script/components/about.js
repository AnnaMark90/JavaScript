class About{
    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('about');
        this.elem.innerHTML = `<h2>About</h2>`;
    };

    init() {
        return this.elem;
    };
};

export default new About().init();