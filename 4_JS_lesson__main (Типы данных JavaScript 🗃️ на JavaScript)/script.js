/* todo ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
let age = 23 //number

age = 'Alex'//string

const name = 'Alex'//string

const isGoodVideo = true;//boolean
const isBadVideo = false;//boolean

let someVariable; //underfined

let someVariable = null; //null пустая переменная, намеренное отсутствие значения
console.log(someVariable);


// STRING одинарные кавычки или двойные, обратные (используются везде)
const name = 'Roma'
const surname = 'Dolaberidze'

const fullName = `Мое имя: ${name}, Моя фамилия: ${surname}`
console.log(fullName);

// Number - числа

const int = 25 // целые числа

const float = 7.89 // числа с плавающей точкой

//Typeof- данный оператор позволяет узнать какого типа эта переменная

const someValue = 1234

//console.log(typeof someValue)

if (typeof someValue === 'number') {
    console.log('Это число')
}

console.log(typeof 'null')//object исторический баг в Java Script, который сохранился для обратной совместимости


//todo СЛОЖНЫЕ ТИПЫ ДАННЫХ

// 1 МАССИВЫ - некий список (например блокнот это массив , а листы в нем это список

//const fruits = ["яблоко", "банан", "вишня"];
//console.log(fruits[4]);// можно обратится к переменным [...]

//const someArray = [1424, "банан", [44, ''], {}];
//console.log(someArray);

// 2 ОБЪЕКТЫ - структуры данных хранящихся в виде пар ключа , до двоеточия ключ {...} фигурные скобки значат объект

const fruits = [{
        name: 'яблоко',
        color: 'red',
        size: '12см',
        hasWorms: 'нет'
    },
    {
        name: 'банан',
        color: 'желтый',
        size: '19см',
        hasWorms: 'нет'
    },
    {
        name: 'груша',
        color: 'зеленая',
        size: '15см',
        hasWorms: 'нет'
    }
];
console.log(fruits);

// также объекты могут существовать отдельно например:

const book = ['480', 'Твердый', 'Война и Мир', '1980']

const book2 = {
    pages: 460,
    binding: 'Твердый',
    name: 'Война и Мир',
    age: '1980'
}

console.log(book2.age);// к объектам можно обращаться через точку

//ФУНКЦИИ -

const showBalance = function (bankAccount) {
    if (bankAccount.balance > 0) {
        console.log(bankAccount.balance)
    } else {
        console.log('Ты бедный')
    }
}

const bankAccount1 = {
    id:12134535345,
    balance: 100
}

const bankAccount2 = {
    id:12134535345,
    balance: 50
}

const bankAccount3 = {
    id:12134535345,
    balance: 0
}

showBalance(bankAccount1)
showBalance(bankAccount2)
showBalance(bankAccount3)
*/

/*
//CCЫЛОЧНЫЕ ТИПЫ ДАННЫХ

let number = 12312

let number2 = number
console.log('number1', number)
console.log('number2', number2)

number2 = 11121212121
console.log('number1', number)
console.log('number2', number2)
*/

const someObject = {
    name: 'Alex'
}

const someObject2 = someObject // не объект{} а какая то ссылка

console.log('someObject', someObject)
console.log('someObject', someObject2)

someObject2.name = 'Bob'

console.log('someObject', someObject)
console.log('someObject', someObject2)