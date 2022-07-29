// 1 ex.

let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

// 2 ex.

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// if ( arr2[i] > -10 && arr2[i] < -3) {
//     console.log(arr2[i]);
// }

for (let i = 0; i < arr2.length; i++) {
    if ( arr2[i] > -10 && arr2[i] < -3) {
        console.log(arr2[i]);
    }
}

// 3 ex.


let arr3 = [],
    result = 0;

for (let i = 23; i <= 57; i++) {
    arr3.push(i);
    for (let i = 0; i < arr3.length; i++) {
        result += arr3[i];
    }
}

console.log(arr3);
console.log('Сумма = '+result+'');

// 4 ex.

let strArr = ['10', '20', '30', '50', '235', '3000'];

// 5 ex.

let arrWeek = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

// for (let i = 0; i < 5; i++) {
//     document.write(arrWeek[i]);
//     if (i > 5) {
//     document.write('<b>' + arrWeek[i] + '</b>');
//     }
// }

// 6 ex.

let arr6 = [3, 5, 4, 7 ,8, 1];

arr6.push(4567);

console.log('Последний элемент - '+arr6[arr6.length - 1]+' ');

// 7 ex.

// let arr7 = [],
//     counter7 = 0,
//     num = true;

// while (num) {
//     let a = prompt('Введите число');
//     if (a === '') {
//     break;
//     a = +a;
    
//     }
//     if (isNaN(a)) {
//         alert('Введено не число');
//         continue;
//     }
// }

// 8 ex.

let arr8 = [12, false, 'Текст', 4, 2, -5, 0],
    i = 6;

while (i < arr8.length) {
    i++;
    arr8.reverse();
}

console.log(arr8);

//9 ex.

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
    counter = 0,
    i = 0;

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] === undefined) {
        counter++;
    }
}

console.log(counter);

//10 ex

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    firstNull = arr10.indexOf(0),
    secondNull = arr10.lastIndexOf(0), 
    sum = 0;

for (let i = 0; i < arr9.length; i++) {
    if (firstNull[i] == '0' || secondNull[i] == '0') {
        sum = +firstNull[i] + +secondNull[i];
    }
}

console.log(' Сумма нулей в массиве = '+sum+'');