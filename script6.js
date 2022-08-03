// 1 ex.

let str1 =  'aaa@bbb@ccc';
console.log(str1.replace(/@/g, '!'));

// 2 ex.

console.log('---');

let date = '2025-12-31';

let dateRes = date.replace(/-/g, '/');

console.log(dateRes.replace(/(2025) (12) (31)/, '$3 $2 $1'));

// 3 ex.

console.log('---');

let str3 = 'Я учу javascript!';

console.log(str3.substring(2,5));
console.log(str3.substr(6));
console.log(str3.slice(2,6));

// 4 ex.

console.log('---');

let arr4 = [4, 2, 5, 19, 13, 0, 10],
    sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
    arr4[i] = arr4[i] ^ 3;
    sum4 += arr4[i];
}

console.log(Math.sqrt(sum4));

// 5 ex.

console.log('---');

function f5(a, b, c) {
    c = b - a;
    console.log(Math.abs(c));
}

f5(6, 1)

// 6 ex.

console.log('---');

// function getNull() {
//     for (let i = 0; i <= 9; i++) {
//         return i = '0' + i
//     }
// }

let getNull = i => (i >= 9 ? '' : '0') + i;

let dateTime = new Date();

let time = dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds();

let date2 = getNull(dateTime.getDate()) + '.' + getNull(dateTime.getMonth() + 1) + '.' + getNull(dateTime.getFullYear());

let dateTimeRes = time + ' ' + date2;

console.log(dateTimeRes);

// 7 ex.

console.log('---');

let str7 = 'aa aba abba abbba abca abea';

console.log(str7.match(/ab*a/gi));

// 8 ex.

console.log('---');

let phone = '+375-(29)-349-96-78';

function checkPhone(phone) {
    let regexp = /^{+375|80}-({44|29})-\d{3}-\d{2}-\d{2}$/;
    regexp.test(phone);
    if (checkPhone === false) {
        console.log('Неверный номер');
    } else {
        console.log('Верный номер');
    }
}
checkPhone(phone);

// 9 ex.

console.log('---');

function checkEmail(email) {
    let point = email.lastIndexOf('.');
    if (point === email.length - 1 || point === -1 || point === 0) return false;
    let dog = email.lastIndexOf('@');
    if (dog !== email.indexOf('@')) return false;
    if (dog === email.length - 1 || dog === -1 || dog === 0 || dog < 3) return false;
    let defis = email.lastIndexOf('-');
    if (defis === email.length - 1 || defis === 0) return false;
    let n = email.lastIndexOf('_');
    if (n === email.length - 1 || n === 0) return false;

    let symbols = `абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!"#$%&'()*+,/:;<=>?[\\]^{|}~ `
    let nameSymbols = '!"#$%&\'()*+,/:;<=>?@[\\]^`{|}~';
    let nums = '1234567890.';

    for (let i = 0; i < email.length - 1; i++){
        if(symbols.includes(email[i])) return false;
    }

    let name = email.slice(0, dog);

    if(nums.includes(name[0])) return false;
        for (let i = 0; i < name.length; i++){
            if (nameSymbols.includes(name[i])) return false;
        }

    let dom = email.slice(point);
    let domName = email.slice(dog, point);

    if(dom.length < 2 || dom.length > 11) return false;
    if(domName.length < 2 || domName.length > 11) return false;
    
    return true;
}

checkEmail('info@email.ru');
