// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrayOfUsers = [
    new User(13, 'Kate', 'Kirin', 'etye@gmail.com', 380952515352),
    new User(4, 'Sasha', 'Pupkin', 'fgyf@ukr.net', 380675144356),
    new User(67, 'Olya', 'Vasechkina', 'tyiti@mail.ru', 380673412345),
    new User(43, 'Kolya', 'Vasechkin', 'tghjggjkgkgj@mail.ru', 380673414545),
    new User(2, 'Serj', 'Matreshkin', 'qweqeqrq@ukr.net', 380684356898),
    new User(6, 'Natasha', 'Pupkina', 'hjkhkhlhlk@gmail.com', 380675144356),
    new User(67, 'Alesya', 'Vasechkina', 'tyiti@mail.ru', 380673412345),
    new User(43, 'Vanya', 'Vasechkin', 'tghjggjkgkgj@mail.ru', 380673414545),
    new User(10, 'Semen', 'Matreshkin', 'qweqeqrq@ukr.net', 380684356898),
    new User(2, 'Dasha', 'Pupkina', 'hjkhkhlhlk@gmail.com', 380675144356),
];
console.log(arrayOfUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = arrayOfUsers.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }});
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
arrayOfUsers.sort((a, b) => a.id - b.id);
console.log(arrayOfUsers);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let arrayOfClient = [
    new Client(13, 'Kate', 'Kirin', 'etye@gmail.com', 380952515352, ['apple', 'tea', 'coffe']),
    new Client(4, 'Sasha', 'Pupkin', 'fgyf@ukr.net', 380675144356, ['pineapple', 'tomato', 'onion', 'soup', 'banana']),
    new Client(67, 'Olya', 'Vasechkina', 'tyiti@mail.ru', 380673412345, ['paper', 'sigarets']),
    new Client(43, 'Kolya', 'Vasechkin', 'tghjggjkgkgj@mail.ru', 380673414545, ['juice', 'water', 'limonad', 'coffee,tea']),
    new Client(2, 'Serj', 'Matreshkin', 'qweqeqrq@ukr.net', 380684356898, ['paper', 'sigarets','limonad', 'coffee,tea']),
    new Client(6, 'Natasha', 'Pupkina', 'hjkhkhlhlk@gmail.com', 380675144356, ['apple', 'tea', 'coffe', 'juice', 'water']),
    new Client(67, 'Alesya', 'Vasechkina', 'tyiti@mail.ru', 380673412345, ['onion', 'soup', 'banana']),
    new Client(43, 'Vanya', 'Vasechkin', 'tghjggjkgkgj@mail.ru', 380673414545, ['paper', 'sigarets','limonad', 'coffee,tea', 'onion', 'soup']),
    new Client(10, 'Semen', 'Matreshkin', 'qweqeqrq@ukr.net', 380684356898, ['fish', 'meat', 'water', 'coffee']),
    new Client(2, 'Dasha', 'Pupkina', 'hjkhkhlhlk@gmail.com', 380675144356, ['onion', 'soup', 'banana','sigarets','limonad']),
]
console.log(arrayOfClient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrayOfClient.sort((a, b) => a.order.length - b.order.length);
console.log(arrayOfClient);