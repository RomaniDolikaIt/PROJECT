/*
function sum(a, b) {
    console.log(a, b)

    return a + b
}

console.log(sum(1, 2))

//стрелочная функция

const sum2 = (a, b) => {
    return a * b
}

console.log(sum2(2, 3))

const sum3 = a => a**3
console.log(sum3(5))

/*
 todo Контекст this:
Стрелочные функции не имеют собственного контекста this.
Они захватывают this из внешнего лексического окружения.
Рассмотрим пример, где это может быть полезно:
В этом примере this внутри setTimeout указывает на глобальный объект
(window в браузере, который не имеет свойства name, поэтому мы видим в консоли undefined),
а не на объект user,
потому что обычные функции имеют свой собственный контекст this.
 */
/*
const user = {
    name: 'Alice',
    greet: function() {
        console.log(this); // user объект
        setTimeout(function() {
            console.log(this)
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};

const greet = user.greet

//this === window
greet()
*/
/*
Теперь изменим setTimeout на стрелочную функцию:
Здесь стрелочная функция использует this из внешнего контекста, т.е. из функции greet,
где this указывает на объект user.
Таким образом, мы получаем доступ к правильному this.
*/
/*
const user1 = {
    name: 'Alice',
    greet: function() {
        console.log(this); // user объект
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};

//user1.greet()// "Hello, my name is Alice"

const greet =user1.greet

greet()
*/
/*
Шпаргалка: Как быстро понять, чему равен this?
Когда видишь this внутри функции, задай себе вопросы в таком порядке:

Функция создана через () => {}?

Да → this точно такой же, как в строчке кода над этой функцией.

Функция вызвана с new?

Да → this это новый созданный объект.

Функция вызвана через bind, call или apply?

Да → this это то, что передали в аргументы.

Функция вызвана «через точку» (obj.method())?

Да → this это то, что слева от точки (obj).

Ничего из вышеперечисленного?

Да → this равен window или undefined (strict mode).
 */

/*
//todo 2. Отсутствие объекта arguments:
// Стрелочные функции не имеют собственного объекта arguments.
// Что такое arguments?
// Arguments — это массивоподобный объект, содержащий все аргументы,
// переданные функции. В обычных функциях arguments позволяет получать доступ ко всем аргументам функции,
// даже если они не объявлены в параметрах.

function sum() {
    console.log(arguments)
}

sum(1, 2, 3, 4, 5)
*/
//todo Примеры использования стрелочных функций

//1. В методах массивов:
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);

console.log(squares); // [1, 4, 9, 16, 25]

//2. В обработчиках событий:
document.getElementById('btn').addEventListener('click', () => {
    console.log('Button clicked!');
});



