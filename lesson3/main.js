// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
//
// let arr2 = ['okten', 'web', 'school', 'js', 'html'];
// console.log(arr2);
//
// let arr3 = ['hello', 'name', 1, 2, true];
// console.log(arr3);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr [0];
// arr [1];
// arr [2];
// arr [3];
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i = 0; i < 10; i++) {
//     document.write(`<div>item</div>`);
//
// }

//

// let i = 0;
// while (i <20) {
//     document.write(`<h1>item</h1>`);
//     i++;
// }

// let i = 0;
// while (i <20) {
//     document.write(`<h1>${i}item</h1>`);
//     i++ ;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i < number.length; i++){
//     console.log(number[i])
// }

// let string = ['cat', 'dog', 'bird', 'squrel', 'elephant', 'tiger', 'bear', 'wolf', 'lion', 'monkey'];
// for (i = 0; i < string.length; i++) {
//     console.log(string [i]);
// }


// let arr = [1, 2, 3, 4, 'cat', 'dog', 'tiger', 'monkey', true, false];
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr [i] === 'boolean') {
//         console.log(arr [i]);
//     }
// }

// let arr = [1, 2, 3, 4, 'cat', 'dog', 'tiger', 'monkey', true, false];
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr [i] === 'number') {
//         console.log(arr [i]);
//     }
// }

// let arr = [1, 2, 3, 4, 'cat', 'dog', 'tiger', 'monkey', true, false];
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr [i] === 'string') {
//         console.log(arr [i]);
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//


// let array = [];
// array [0] = 'cat';
// array [1] = 'dog';
// array [2] = 'monkey';
// array [3] = 'tiger';
// array [4] = true;
// array [5] = false;
// array [6] = 2;
// array [7] = 90;
// array [8] = 8;
// array [9] = 17;
//
// for (i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


// for (i = 0; i < 10; i++) {
//     console.log('текущий номер шага : '+ i +' ');
// }


// for (i = 0; i<100; i++) {
//     console.log('текущий номер шага : '+ i +' ')
// }


// for (i = 0; i < 100; i+= 2) {
//     console.log('текущий номер шага : '+ i +' ')
// }


// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('текущий номер шага : ' + i + ' ');
//         document.write('текущий номер шага : '+ i +'' );
//     }
// }

// for (i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('текущий номер шага : '+ i +' ');
//         document.write('текущий номер шага : '+ i +' ');
//     }
// }


// --створити масив з:
//     - з 5 числових значень
// - та вивести його в консоль
let array = [1, 2, 3, 4, 5];
    console.log(array);
// - з 5 стічкових значень
let array1 = ['girl', 'boy', 'man', 'woman', 'cat'];
console.log(array1);
// - з 5 значень стрічкового, числового та булевого типу
let array2 = ['man', 'woman', 1, 2, 3, true, false];
console.log(array2);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array3 = ['girl', 'boy', 'man', 'woman', 'cat'];
for (let i = 0; i < array3.length; i++) {
    // console.log(array3[i], i);
    console.log(`Элемент массива ${array3[i]} с индексом ${i}`);
}
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i <= 10; i++) {
    document.write('<div>Day</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i <= 10; i++) {
    document.write(`<div>Day ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1>Hello world</h1>`);
    i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let y = 0;
while (y < 20) {
    document.write(`<h1>Hello world ${y}</h1>`);
    y++
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of array6) {
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array7 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 's', 'm'];
for (const string of array7) {
    console.log(string);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of array8) {
    console.log(num);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array9 = [1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false];
for (i = 0; i < array9.length; i++) {
    if (typeof array9 [i] === 'boolean') {
        console.log(array9 [i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array10 = [1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false];
for (i = 0; i < array10.length; i++) {
    if (typeof array10 [i] === 'number') {
        console.log(array10 [i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array11 = [1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false];
for (i = 0; i < array11.length; i++) {
    if (typeof array11 [i] === 'string') {
        console.log(array11[i]);
    }
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr12 = [];
arr12 [0] = 'cat';
arr12 [1] = 'dog';
arr12 [2] = 1;
arr12 [3] = 2;
arr12 [4] = 3;
arr12 [5] = true;
arr12 [6] = false;
arr12 [7] = 'man';
arr12 [8] = 'woman';
arr12 [9] = 12;
for (i = 0; i < arr12.length; i++) {
    console.log(arr12[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 10; i++) {
    console.log('Поточний номер кроку: '+ i +' ');

}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (x = 0; x < 100; x++) {
    console.log('Поточний номер кроку: '+ i +' ');
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i+=2) {
    console.log('Поточний номер кроку: '+ i +' ');
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('Поточний номер кроку: '+ i + ' ');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i = 0; i < 100; i++) {
    if (i % 2 !==0) {
        console.log('Поточний номер кроку: '+ i + ' ');
    }
}