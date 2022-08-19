

let Contacts = function () {

    this.get = function () {
        this.name = prompt('Введите ваше ФИО');
        this.age = prompt('Введите ваш возраст');
        this.examAge();
        this.phone = prompt('Введите ваш номер телефона(+375-##-###-##-##)');
        this.examPhone();
        this.email = prompt('Введите вашу эл. почту');
    };

    this.examAge = function () {
        if (this.age < 18) {
            alert('Доступ запрещен');
        } else {
            alert('Доступ разрешен');
        };
    };

    this.examPhone = function () {
        regExp = /^\+?\d+\-\d{2}\-\d{3}-\d{2}-\d{2}/g;
        resPhone = regExp.test(this.phone);
        if (resPhone === false) {
            alert('Неверный формат записи');
        };
    };

    this.showInfo = function () {
        console.log(`ФИО - ${this.name}`);
        console.log(`Возраст - ${this.age}`);
        console.log(`Номер телефона - ${this.phone}`);
        console.log(`Эл. почта - ${this.email}`);
    };

};

let ContactBook = function () {

    Contacts.apply(this);

    let parentShowInfo = this.showInfo;

    this.showInfo = function () {
        parentShowInfo.call(this);

        let style = document.createElement('style');
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@600&family=Open+Sans:wght@400;600;700&display=swap');
            h1{
                font-family: 'Arvo';
                font-style: normal;
                font-weight: 400;
                font-size: 36px;
                line-height: 48px;
                color: #212121;
                text-align:center;
                padding-top:3%;
            };
        `;
        document.head.appendChild(style);

        let h1 = document.createElement('h1');
        h1.innerHTML = `
        ФИО - ${this.name} ,<br>
        Возраст - ${this.age} ,<br>
        Номер телефона - ${this.phone} ,<br>
        Эл. почта - ${this.email} .
        `;
        document.body.appendChild(h1);
    };
};

let contacts = new ContactBook();

// contacts.get();
// console.log(contacts.showInfo());

//Дополнительное задание

let WorkDOM = function () {

    this.create = function(tagName) {
        element = tagName;
        document.createElement('element');
        document.body.appendChild(element);
    };

    this.attr = function(element, name, [value]) {
        
    }
    
};

let workDOM = new WorkDOM();
