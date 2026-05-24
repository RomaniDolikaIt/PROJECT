//todo 1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам.
// Затем присвой этот метод другой переменной и вызовите её.
// Объясни своими словами, что произошло;
/*
// 1. Создаем объект с данными и методом
const car = {
    brand: 'Tesla',
    showBrand() {
        console.log(`Марка машины: ${this.brand}`);
    }
};

// 2. Проверяем, как работает метод изначально
car.showBrand(); // Выведет: "Марка машины: Tesla"

// 3. Вытаскиваем метод и записываем в другую переменную
const JustAFunction = car.showBrand;

// 4. Вызываем эту переменную
JustAFunction(); // Выведет: "Марка машины: undefined" (или ошибку в строгом режиме)
/*
Что произошло (объяснение своими словами):
Произошло то, что в JavaScript называют «потерей контекста».
Когда мы написали const JustAFunction = car.showBrand, мы не скопировали метод вместе с объектом.
Мы просто взяли чистую «инструкцию» (код функции) из объекта car и положили её в новую коробку под названием
JustAFunction. Объект car в этой новой коробке никак не упоминается.
*/

//todo 2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined.
// Как сделать так, чтобы в методе delayedGreet тоже выводилось имя
// (без использования call, apply или bind)?
// const student = {
// Пример:
/*
const student = {
  name: 'Alice',

  greet: function() {

    console.log(`Hello, ${this.name}!`);

  },

  delayedGreet: function() {
    setTimeout(this.greet, 1000);
  }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined
 */
/*
const student = {

    name: 'Alice',



    greet: function() {

        console.log(`Hello, ${this.name}!`);

    },



    delayedGreet: function() {

        setTimeout(this.greet, 1000);

    }

};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined


В первом варианте:
Тут работает наше любимое правило точки. Функция greet вызывается прямо через объект student.
Движок JS видит, кто стоит слева от точки, и делает this внутри функции равным объекту student.
Всё четко: this.name превращается в student.name ('Alice').
 */
/*
Смотри, что происходит изнутри. Ты вызываешь метод delayedGreet().
Внутри него срабатывает встроенная в браузер функция setTimeout.
Что ты передаешь внутрь setTimeout? Ты передаешь туда ссылку на функцию this.greet.
 Ты как бы говоришь браузеру: «На тебе вот этот кусок кода (greet),
 отнеси его к себе в хранилище и запусти ровно через 1 секунду».
Браузер забирает функцию greet, проходит секунда, и он её вызывает.
Браузер понятия не имеет ни о каком объекте student. Функция greet вызывается без точки слева,
просто круглыми скобками. А по правилу «голого» вызова, её this становится равен глобальному объекту
window (или undefined в строгом режиме). У window нет свойства name, поэтому мы и видим Hello, undefined!.
 */
//Как это починить БЕЗ call, apply и bind?
// Нам нужно сделать так, чтобы через секунду функция greet была вызвана именно
// через точку (student.greet()). Для этого есть стрелочный метод.
/*
const student1 = {
    name: 'Alice',

    greet: function() {
        console.log(`Hello, ${this.name}!`);
    },

    delayedGreet: function() {
        // Стрелка запоминает, что вокруг неё this — это student
        setTimeout(() => {
            this.greet(); // Вызов через ТOЧКУ! Правило точки сработает на ура
        }, 1000);
    }
};

student1.delayedGreet(); // Через 1 секунду: Hello, Alice!

//todo 3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;

//у нас есть универсальная функция для подсчета бюджета, которая сама по себе не
// принадлежит ни одному человеку.
// Мы будем передавать в неё два аргумента: сколько денег потрачено на еду и сколько на развлечения.

// Универсальная функция подсчета остатка
function calculateBalance(foodCost, funCost) {
    const totalSpent = foodCost + funCost;
    const remaining = this.salary - totalSpent;
    console.log(`Привет, ${this.name}! Твой остаток: ${remaining} руб.`);
}

// Наши персонажи с разной зарплатой
const alex = { name: 'Алексей', salary: 100000 };
const elena = { name: 'Елена', salary: 150000 };

//Вызываем через call()
calculateBalance.call(alex, 15000, 8000);
// Выведет: "Привет, Алексей! Твой остаток: 77000 руб."

//Вызываем через apply()
calculateBalance.apply(elena, [20000, 15000]);
// Выведет: "Привет, Елена! Твой остаток: 115000 руб."

//Настраиваем через bind()
// Мы не хотим считать бюджет Елены прямо сейчас. Мы хотим создать специальную именную
// функцию «Бюджет Елены» и запустить её позже. bind() возвращает нам эту новую функцию.

// Создаем "заряженную" функцию для Елены
const elenaBudget = calculateBalance.bind(elena);

// ... прошло много строчек кода ...

// Вызываем её когда нужно, просто передавая аргументы
elenaBudget(25000, 30000);
// Выведет: "Привет, Елена! Твой остаток: 95000 руб."
*/
//todo 4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()?
// Объясни, почему так произошло. Как это можно изменить?
/*
function sayHello() {

    console.log('Hello, ' + this.name)
}

const admin = {

    name: 'Bob'

};

const user = {

    name: 'John'

};

const sayHelloToAdmin = sayHello.bind(admin)

sayHelloToAdmin()

const sayHelloToUser = sayHelloToAdmin.bind(user)

sayHelloToUser()
 */

//Что будет в консоли?

//sayHelloToAdmin(); // Выведет: "Hello, Bob"
//sayHelloToUser();  // Выведет: "Hello, Bob" (снова Bob!)
//Почему так произошло?
// Главное железное правило, которое нужно запомнить: Функцию, созданную с помощью bind(),
// нельзя перепривязать заново другим контекстом.

//Как это можно изменить?
// ВАРИАНТ 1 Привязывать к оригиналу (Правильный способ)
// Нужно вызывать bind у самой исходной функции sayHello, а не у её копий.
// Исходная функция чиста, у неё контекст еще не зафиксирован.

function sayHello() {

    console.log('Hello, ' + this.name)
}

const admin = {

    name: 'Bob'

};

const user = {

    name: 'John'

};

const sayHelloToAdmin = sayHello.bind(admin)

sayHelloToAdmin()

const sayHelloToUser = sayHello.bind(user)

sayHelloToUser()

//ВАРИАНТ 2 Использовать call или apply вместо жесткой привязки

sayHello.call(admin); // "Hello, Bob"
sayHello.call(user);  // "Hello, John"