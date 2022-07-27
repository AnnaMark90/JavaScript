// 1 ex.
// let i = 1;

// for (let i = 0; i >= 50; i++) {
//     console.log(i);
// }

//let i = 0;

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

//i = 35;

// for (let i = 35; i >= 8; i--) {
//      console.log(i);
// }

console.log('=============');

// 2 ex.

// let i = 11;
// do {
//     document.write(' '+i+' <br>');
//     i++;
// } while (i <= 89);

// // 3 ex.

// console.log('=============');

// let b = 100;
//     sumB = 0;

// for (let i = 0; i <= b; i++) {
//     sumB += i;
// }

// console.log(sumB);

// 4 ex.

// console.log('=============');


// let a = 5; 
// let sum = 0;

// for (let i = 1; i <= a; i++) {
//     console.log(i);
//     sum += i;
// }

// console.log(sum); 

// 5 ex.

console.log('=============');


// i = 8;

// for (let i = 8; i <=56; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// while (i <= 56) {
//     if (i %2 == 0) {
//         i++;
//         console.log(i);
//     }
// }


// 6 ex.

// console.log('=============');

// let i = 0;

// for (let i = 2; i <= 10 ; i++) {  
//         multi = 2*i;
//         console.log('2 * '+i+' = '+multi+'');
// } 

// console.log('...');

// for (let i = 3; i <= 10 ; i++) {
//     multi = 3*i;
//     console.log('3 * '+i+' = '+multi+'');
// }

// // 7 ex.

console.log('=============');

let n = 1000,
    iteration_num = 0;

while (n >=50) {
    n/=2;
    iteration_num++;
}
console.log('Результат = '+n+'');
console.log('Кол-во итераций = '+ iteration_num+'');

// 9 ex.

console.log('=============');

let strNum = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    minNum = Infinity ,
    maxNum= -Infinity ;

for (let i = 0;  i < strNum.length ; i++) {
    if (+strNum[i] != '') {
        maxNum = maxNum > +strNum[i];
        minNum = minNum < +strNum[i];
    }
}
console.log(+minNum);
console.log(+maxNum);

// 8 ex.

console.log('=============');

let num = prompt('Введите число');
    sum = 0;
    numCount = 0;
    srArf = 0;

while (num == '' || num == 0 ) {
    num = +prompt('Введите ещё число');
}

console.log('Сумма чисел = '+sum+'');
console.log('Среднее арфметическое = '+srArf+'');

// 10 ex.

console.log('=============');

let n = '57487937387548329748';

for (let i = n; i <= n.length; i++) {
        console.log(i);
        sumN += i;
    }

console.log('Введено число - ''');
console.log('Цифр в числе: ''');
console.log('Сумма = '+sumN+'');
console.log('Обратный порядок:');