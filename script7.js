let contacts = {
    get:function () {
        contacts.name = prompt('Введите ваше ФИО');
        contacts.age = prompt('Введите ваш возраст');
        contacts.examAge();
        contacts.phone = prompt('Введите ваш номер телефона(+375-##-###-##-##)');
        contacts.examPhone();
        contacts.email = prompt('Введите вашу эл. почту');
    },
    examAge:function () {
        if (contacts.age < 18) {
            alert('Доступ запрещен');
        } else {
            alert('Доступ разрешен');
        }
    },
    examPhone:function () {
        regExp = /^\+?\d+\-\d{2}\-\d{3}-\d{2}-\d{2}/g;
        resPhone = regExp.test(contacts.phone);
        if (resPhone === false) {
            alert('Неверный формат записи');
        }
    },
    show:function () {
        console.log(`ФИО - ${contacts.name}`);
        console.log(`Возраст - ${contacts.age}`);
        console.log(`Номер телефона - ${contacts.phone}`);
        console.log(`Эл. почта - ${contacts.email}`);
    },
};
