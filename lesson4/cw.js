// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numMin(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        console.log(n1);
    } else if (n2 < n1 && n2 < n3) {
        console.log(n2);
    }else {
        console.log(n3);
    }
}
numMin(10, 5, 30);



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function numMax(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    }else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    }else {
        console.log(n3);
    }
}
numMax(10, 5, 30);



// - створити функцію яка повертає найбільше число з масиву
// let array = [2, 4, 7, 9, 10, 27];
// function arrMax(arr) {
//     let max = arr[0];
//     for (const element of arr) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
//
// document.write(`<h2>Найбільше число з масиву: ${arrMax(array)}</h2>`);




// - створити функцію яка повертає найменьше число з масиву

// let array = [2, 4, 6, 9, 19, 28];
// function arrMin(arr) {
//     let min = arr[0];
//     for (const element of arr) {
//         if (element < min) {
//             min = element
//         }
//     }
//     return min;
// }
// document.write(`<h2>Найменше число з масиву: ${arrMin(array)}</h2>`);





// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumArr = [1, 2, 10];
// function sumArray(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum = arrayElement + sum
//     }
//     return sum;
// }
// document.write(sumArray(sumArr));




// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageArr = [1, 2, 10];
function averageSum (average) {
    let sum = 0;
    for (const averageElement of average) {
        sum = averageElement + sum
    }
    return sum / average.length;
}
document.write(averageSum(averageArr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let array = [2, 4, 6, 9, 19, 28];
function arrMin(arr) {
    let min = arr[0];
    let max = arr[0];
    for (const element of arr) {
        if (element < min) {
            min = element
        }
        if (element > max) {
            max = element
        }
    }
    document.write(`<h2>Найбільше число з масиву: ${max}</h2>`);
    return min;
}
document.write(`<h2>Найменше число з масиву: ${arrMin(array)}</h2>`);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


function randomElem() {
    let randomNum = [];
    for (let i = 0; i < Math.random() * 100; i++) {
        randomNum.push(Math.random() * 100);
    }
    return randomNum;
}
console.log(randomElem());







// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomElem (limit) {
    let randomNum = [];
    for (i = 0; i < Math.random() * 10; i++) {
        randomNum.push(Math.random() * limit);
    }
    return randomNum;
}
console.log(randomElem());



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


function arrReverse(arrRev) {
    let newArr = [];
    for (let i = arrRev.length - 1; i = 0; i--) {
        newArr.push(arrRev[i])
    }
    return newArr;
}
let arr = [1, 2, 3];
console.log(arrReverse(arr));