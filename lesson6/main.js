// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (i = 0; i < arrStr.length; i++) {
//     console.log(arrStr[i].length);
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let i = 0; i < arrStr.length; i++) {
//     arrStr[i] = arrStr[i].toUpperCase();
// }
// console.log(arrStr);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arrStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (let i = 0; i < arrStr.length; i++) {
//     arrStr[i] = arrStr[i].toLocaleLowerCase();
// }
// console.log(arrStr);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

// let str = ' dirty string   ';
// console.log(str.length);
// let trim = str.trim();
// console.log(trim.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

//     let stringToarray = (str) => {
//     return str.split(' ');
//     }
//         let str = 'Каждый охотник желает знать';
//         let arr = stringToarray(str);
//
// document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать'];
// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, lenght) => {
//     return str.substring(0, lenght);
// };
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters(str, 7));
// document.write(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     let joinToApperCase = str.split(' ').join('-').toUpperCase();
//     return joinToApperCase;
// }
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let toUpperCase = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(toUpperCase('каждый охотник желает знать'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// console.log(capitalize('каждый охотник желает знать'));


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let helloWorld = 'hello world';
console.log(helloWorld.length);
let loremIpsum = 'lorem ipsum';
console.log(loremIpsum.length);
let javascriptIsCool = 'javascript is cool';
console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hW = 'hello world';
console.log(hW.toUpperCase());
let lI = 'lorem ipsum';
console.log(lI.toUpperCase());
let jS = 'javascript is cool';
console.log(jS.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hW1 = 'HELLO WORLD';
console.log(hW1.toLowerCase());
let lI1 = 'LOREM IPSUM';
console.log(lI1.toLowerCase());
let jS1 = 'JAVASCRIPT IS COOL';
console.log(jS1.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';
console.log(str1.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);
// console.log(arr);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, length) => {
//     return str.substring(0, length);
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    let joinToApperCase = str.split(' ').join('-').toUpperCase();
    return joinToApperCase;
}
let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.