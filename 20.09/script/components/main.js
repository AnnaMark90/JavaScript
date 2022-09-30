class Main{
    constructor() {
        this.main = document.createElement('main');
        this.main.classList.add('main_component');
        this.routing = this.routing.bind(this);//новая ф-ция с привязанным контекстом
        this.initComponent();
    };

    routing() {
        let hash = location.hash.slice(1);
        if(!hash) hash = 'home';

        if (hash.indexOf('/') !== -1){
            this.main.innerHTML = ``;
            let index = hash.indexOf('/');
            let id = hash.slice(index + 1);
            import ('./productCard.js')
                .then(module => {
                    this.main.innerHTML = ``;
                    this.main.append(new module.default(id).init());
                });
        }else{
            import(`./${hash}.js`)
            .then(module => {
                this.main.innerHTML = ``;
                console.log(module.default);
                this.main.append(module.default);
            });
        }
    };

    initComponent() {
        window.addEventListener('hashchange', () => { 
            //main.prototype.routing.call(this); 
            this.routing();
        });

        window.addEventListener('load', () => {
            const a = document.querySelectorAll('a[href="\"]');
            a.forEach(a => {
                a.addEventListener('click', e => {
                    e.preventDefault();
                    location.hash = '';
                });
            });

            this.routing();
        });
    };

    init() {
        return this.main;
    };
};

export default new Main().init();