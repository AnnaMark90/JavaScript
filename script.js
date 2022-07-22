let firstName = prompt('Введите ваше имя');
    age = prompt('Введите ваш возраст');
    city= prompt('Введите ваш город проживания');
    phone= prompt('Введите ваш номер');
    email= prompt('Введите вашу электронную почту');
    company = prompt('Введите ваше место работы');
    ageYear = 2022 - age;
console.log('Меня зовут ' + firstName +'. Мне '+ age +' лет. Я проживаю в городе '+ city +' и работаю в компании '+company+'. Мои контактные данные: '+phone+', '+email+'.');
console.log(''+firstName+' родился в '+ageYear+' году');

let k ='1',
    m='2',
    q ='3',
    d='4',
    e ='5',
    f='6',
    str = 'k m q d e f' ;
if ((k+m+q)==(d+e+f)) {
    console.log('Да');
} else {
    console.log('Нет');
}

let p = prompt('p');
    if (p > 0) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

let a = 10,
    b = 2;
console.log(a + b, a - b,a * b, a / b);
    if ((a + b) > 1) {
        console.log((a + b) * (a + b));
    } else {
        console.log('Сумма меньше нуля');
    }

    if (a > 2 && a < 11 || b >= 6 && b <14 ) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }



let n = prompt('Число от 0-59');
    switch (true) {
        case (n <= 15) :
            console.log('Первая четверть часа');
            break;

        case (n <= 30) :
            console.log('Вторая четверть часа');
            break;

        case (n <= 45) :
            console.log('Третья четверть часа');
            break;

        case (n <= 59) :
            console.log('Четвертая четверть часа');
            break;

        default:
            console.log('Неизвестно');
            break;
    }

let day = prompt('Введите число 1-31');
    if (day < 11) {
        document.write('1-я Декада');
    } else if (day < 21) {
        document.write('2-я Декада');
    } else {
        document.write('3-я Декада');
    }

let dayOf = prompt('Введите количество дней');
    dayOfYear = 365,
    dayOfMonth = 31,
    dayOfWeek = 7,
    dayOfHour = 24,
    dayOfMinute = 1440,
    dayOfSecond = 86400;
