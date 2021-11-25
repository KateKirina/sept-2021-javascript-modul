// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numberMin = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        document.write(num1);
        console.log(num1)
    }else if (num2 < num1 && num2 < num3) {
        document.write(num2);
        console.log(num2);
    }else {
        document.write(num3);
        console.log(num3)
    }
}
numberMin(10, 5, 30);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numberMax = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        document.write(n1);
        console.log(n1);
    }else if (n2 > n1 && n2 > n3) {
        document.write(n2);
        console.log(n2);
    }else {
        document.write(n3);
        console.log(n3);
    }
}
numberMax(10, 5, 30);



// - створити функцію яка повертає найбільше число з масиву

let array = [2, 4, 7, 9, 10, 27];
let arrMax = (arr) => {
    let max = arr[0];
    for (let element of arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

document.write(`<h2>Найбільше число з масиву: ${arrMax(array)}</h2>`);


// - створити функцію яка повертає найменьше число з масиву

let nextArray = [2, 4, 7, 9, 10, 27];
let arrMin = (arr1) => {
    let min = arr1[0];
    for (let element of arr1) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}
document.write(`<h2>Найменше число з масиву: ${arrMin(nextArray)}</h2>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].