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
