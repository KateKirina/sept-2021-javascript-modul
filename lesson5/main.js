// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
//     let areaRectange = (a, b) => {
//         return a * b;
//     }
//
//     console.log(areaRectange(20, 30));
// document.write(`<div>Площадь прямоугольника:</div>` + ' ' + areaRectange(20, 30));

// - створити функцію яка обчислює та повертає площу кола

// let areaCircle = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
//
// console.log(areaCircle(20));
// document.write(`<div>Площадь круга:</div>` + ' ' + areaCircle(20));


// - створити функцію яка обчислює та повертає площу циліндру

// let areaCylinder = (h, r) => {
//     return 2 * 3.14 * r * h;
// }
//
// console.log(areaCylinder(25, 25));
// document.write(`<div>Площадь цилиндра:</div>` + ' ' + areaCylinder(25, 25));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = ['hello', 'bye', 'cat', 'dog', 'bird'];
// let arrElem = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i]);
//
//     }
// }
// arrElem(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) => {
//     document.write(`<p>${text}</p>`);
//     for (let i = 0; i <= 5; i++) {
//         document.write(`<p>${text}</p>`);
//     }
// }
// paragraph(`some text`);
// // не можу розібратись чому війшло сім параграфів????

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let funcUl = (arg1) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg1}</li>`);
//     document.write(`<li>${arg1}</li>`);
//     document.write(`<li>${arg1}</li>`);
//     document.write(`</ul>`);
// }
// funcUl('Name of list');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let funcUl = (arg1, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${arg1}</li>`);
//     }
//             document.write(`</ul>`);
// }
// funcUl('Name of list', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [2, 4, 7, true, false, 'okten', 'hello'];
// let funcArr = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// funcArr(array);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [{id: 1, name: 'vasya', age: 21}, {id: 2, name: 'petya', age: 34}, {id: 3, name: 'olya', age: 45}];
// let funcArray = (arr) => {
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.id}.${arrElement.name}.${arrElement.age}</div>`);
//     }
// }
// funcArray(array);


// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let reactangleArea = (a, b) => a * b;
console.log(reactangleArea(10, 20));

// - створити функцію яка обчислює та повертає площу кола
let areaCircle = (r) => 3.14 * r ** 2;
console.log(areaCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру
let cyliderArea = (r, h) => 2 * 3.14 * r * h;
console.log(cyliderArea(10, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = ['d','f','g','h','j', 1, 2, 3, 4, ];
let arrFunk = (arr) => {
    for (i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
arrFunk(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => {
     for (i = 0; i < 6; i++) {
        document.write(`<p>${text}</p>`);
    }
}
paragraph('Hi Kate!');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulFunc = (arg) => {
    document.write(`<ul>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`<li>${arg}</li>`);
    document.write(`</ul>`);
}
ulFunc('Hi Sasha!');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let olFunc = (arg1, number) => {
    document.write(`<ol>`);
    for (i = 0; i < number; i++) {
        document.write(`<li>${arg1}</li>`)
    }
}
olFunc('Hi Sasha!', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = ['f', 'g', 'h', 'j', 'u', 'q', 11, 22, 33, 44, 55, true, false];
let arrayFunc = (array) => {
    document.write(`<ul>`);
    for (i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
}
arrayFunc(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObj = [{id: 1, name: 'vasya', age: 21}, {id: 2, name: 'petya', age: 34}, {id: 3, name: 'olya', age: 45}];
let arrObjFunc = (arrObj) => {
    for (const arrObjElement of arrObj) {
        document.write(`<div>${arrObjElement.id}.${arrObjElement.name}.${arrObjElement.age}</div>`);
    }
}
arrObjFunc(arrObj);

