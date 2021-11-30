// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  function areaRectangle (a, b) {
//     let result = a * b;
//     return result;
// }
//
// console.log(areaRectangle(25, 30));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle (r) {
//     let radius = r ** 2;
//     let result = 3.14 * radius;
//     return result;
// }
// console.log(areaCircle(20));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(h, r) {
//     let result = 2 * 3.14 * r * h;
//     return result;
// }
// console.log(areaCylinder(25, 25));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = ['hello', 'bye', 'cat', 'dog', 'bird'];
//
// function arrElem(arr) {
//     for (i = 0; i < arr.length; i++) {
//         console.log(arr [i]);
//     }
// }
//
// arrElem(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     return `<p>${text}</p>`
// }
//
// const arg = 'hello okten! how are you?'
// const result = paragraph(arg);
//
// console.log(paragraph('hello okten! how are you?'));
// console.log(result);
// document.write(result);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulList (arg1) {
//     document.write('<ul>')
//     document.write('<li>${arg1}</li>')
//     document.write('<li>${arg1}</li>')
//     document.write('<li>${arg1}</li>')
//     document.write('</ul>')
// }
// ulList('Name of list');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulList (number, text) {
//     document.write('<ul>')
//         for (let i = 0; i < number; i++) {
//             document.write('<li>${text}</li>');
//         }
//     document.write('</ul>');
// }
//
// ulList(3, 'hi');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [2, 4, 7, true, false, 'okten', ';hello'];
// function arrFunc (arr) {
//     document.write('<ul>')
//         for (let i = 0; i < arr.length; i++) {
//             document.write('<li>${arr[i]}</li>');
//         }
//
//     document.write('</ul>')
// }
//
// arrFunc(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [{id: 1, name: 'vasya', age: 21}, {id: 2, name: 'petya', age: 34}, {id: 3, name: 'olya', age: 45}];
// function objArray (arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}.${arrElement.name}.${arrElement.age}</div>`);
//     }
// }
// objArray(array);


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle (a, b) {
    let result = a * b;
    return result;
}
console.log (areaRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle (r) {
//     let result = 3.14 * (r ** 2);
//     return result;
// }
// console.log(areaCircle(10));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder (h, r) {
    let result = 2 * 3.14 * r * h;
    return result;
}
console.log(areaCylinder(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4, 5 ,6 , 7];
function arrFunc () {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrFunc(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph (text) {
    return `<p>${text}</p>`
}
console.log(paragraph('Hi Kate!'));
document.write(paragraph('Hi Kate!'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi (text) {
    document.write('<ul>');
         document.write(`<li>${text}</li>`);
         document.write(`<li>${text}</li>`);
         document.write(`<li>${text}</li>`);
    document.write('</ul>');
 }
 ulLi('Some text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulLi2 (number, text) {
    document.write('<ul>')
    for (i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
ulLi2(3, 'Hi Sasha!');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let yyy = [1, 2, 3, true, false, 'cat', 'dog'];
function yyyElements (arryyy) {
    document.write('<ul>')
    for (i = 0; i < arryyy.length; i++){
        document.write(`<li>${yyy[i]}</li>`)
    }
    document.write('</ul>');
}
yyyElements(yyy);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [{id: 1, name: 'vasya', age: 21}, {id: 2, name: 'petya', age: 34}, {id: 3, name: 'olya', age: 45}];
function arrayOfObjects (arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}.${arrElement.name}.${arrElement.age}</div>`);
    }
}
arrayOfObjects(array);