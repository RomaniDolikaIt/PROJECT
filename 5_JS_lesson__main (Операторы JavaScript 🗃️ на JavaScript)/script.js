//ToDo ОПЕРАТОРЫ
//ToDo Арифметические операторы (оператор +,- и т д ; операнды цифры и буквы)
const number1 = 10;
const number2 = 20;

const result = number1 + number2;
console.log(result);

let x = 67;
x ++;
console.log(x);

let y = 67;
y --;
console.log(y);

//ToDo Приоритет арифметических операторов
let result1 = 10 + 5 * 2;
console.log(result1);

result2 = (10 + 5) * 2;
console.log(result2);

//ToDo Операторы присваивания

let a = 10;
a += 5;
console.log(a);

//ToDo Оператор склеивания строк, оператор преобразования типов
//
// Склеивание строк (+): оператор + также используется для объединения (конкатенации) строк.
// Преобразование типов: JavaScript автоматически преобразует типы данных, если это необходимо.

const greeting = 'Привет, ' + 'мир!';
console.log(greeting);

const result3 = '5' + 5;
console.log(result3);

//ToDo Сложение строк и чисел
//
// Когда оператор + используется с числом и строкой, число преобразуется в строку.

const a1 = 5;
const b1 = "10";

const result5 = a1 + b1;
console.log(result5);

//ToDo Операторы сравнения
//
// Операторы сравнения используются для сравнения значений. Они возвращают true или false.
//
// Равно (==): сравнивает значения без учета типа (есть если мы сравним строку '5' и число 5, то получим true, так как JS приведет оба значения к одному типу и сравнит их).
// Строго равно (===): сравнивает значения с учетом типа (есть если мы сравним строку '5' и число 5, то получим false, так как при строгом сравнение нельзя сравнивать разные типы).
// Не равно (!=): сравнивает значения без учета типа.
// Строго не равно (!==): сравнивает значения с учетом типа.
// Больше (> )
// Меньше (<)
// Больше или равно (>=)
// Меньше или равно (<=)

console.log(5 == '5');
console.log(5 === '5');
console.log(5 != '5');
console.log(5 !== '5');

//ToDo Логические операторы
/*
В JavaScript логические операторы используются для работы с булевыми
значениями и выражениями, возвращающими true или false.
 Основные логические операторы включают:
&& (логическое "И")
|| (логическое "ИЛИ")
! (логическое "НЕ")
?? (логический оператор "nullish coalescing")
 */
/*
1. Оператор "И" (&&)
Он возвращает первое falsy значение или последний операнд, если все операнды truthy.
Это может быть полезно для проверки значений, как например строк, чисел или объектов.

falsy значения — это значения, которые при приведении к булевому типу (boolean)
преобразуются в false. В отличие от truthy значений, которые приводятся к true,
falsy значения считаются "плохими" или "неверными" в контексте условных операторов,
таких как if, while и логических операторов (&&, ||, и т.д.).

Список falsy значений:

    false — Булевый тип, всегда ложный.
0 — Число ноль.
-0 — Отрицательное ноль.
0n — Большое ноль (BigInt).
"" (пустая строка) — Строка без символов.
    null — Специальное значение, указывающее на отсутствие значения.
    undefined — Значение переменной, которой не присвоено значение.
    NaN — Не число (Not a Number).
Все остальные значения считаются truthy — они приводятся к true.
*/
console.log(5 && 10);       // 10 — оба значения truthy, возвращается второй операнд
console.log(null && 'test');  // null — первое значение falsy
console.log('apple' && 'orange'); // 'orange' — оба значения truthy, возвращается второй операнд
console.log(0 && 'test');    // 0 — первое значение falsy
console.log('' && 'test');   // '' — первое значение falsy

const username = '';
const defaultName = 'Guest';
console.log(username && defaultName);  // '' — так как username пустая строка (falsy)

const profile = { name: 'John' };
console.log(profile && profile.name);  // 'John' — profile существует и имеет свойство name

/*
2. Оператор "ИЛИ" (||)

Оператор || возвращает первое truthy значение, или последнее значение, если все операнды falsy.
 */
console.log(0 || 42);             // выведется 42, так как 0 - это falsy-значение
console.log('' || 'Hello');       // выведется 'Hello', так как первая строка пустая - falsy
console.log(undefined || null);   // выведется null - так как оба значения falsy, возвращается последнее
console.log('apple' || 'orange'); // выведется 'apple', так как это первое truthy значение

const age = 0;
const defaultAge = 18;
console.log(age || defaultAge);  // 18 — так как 0 это falsy

const user = { name: 'Alice' };
console.log(user.name || 'Guest');  // 'Alice' - первое truthy

/*
3. Оператор "НЕ" (!)

Оператор ! инвертирует значения (превращает true в false и наоборот),
и он может быть полезен для проверки falsy значений, таких как null,
undefined, пустая строка, число 0, false (то есть мы берем falsy значения,
инвертируем их в boolean, они становятся false, добавляем оператор !
и они превращаются в true - проверка удалась!)
 */
console.log(!0);           // true — 0 это falsy значение
console.log(!'');          // true — пустая строка это falsy
console.log(!null);        // true — null это falsy
console.log(!undefined);   // true — undefined это falsy
console.log(!'Hello');     // false — непустая строка это truthy

const user1 = { name: '' };
console.log(!user1.name);  // true — так как значение пустое

const settings = { theme: null };
console.log(!settings.theme);  // true — значение null

/*
4. Оператор "nullish coalescing" (??)
Оператор ?? проверяет левый операнд только на null или undefined,
игнорируя другие falsy значения, такие как 0, пустая строка или false.
 */

let name = null;
console.log(name ?? 'Guest');  // 'Guest', так как name === null

name = '';
console.log(name ?? 'Guest');  // вернется '', так как пустая строка не равна null или undefined (не falsy значение)

let age4 = 0;
console.log(age4 ?? 18);  // вернется 0, так как age != null и != undefined

const preferences = { theme: undefined, language: 'en' };
console.log(preferences.theme ?? 'dark');  // 'dark' — theme === undefined
console.log(preferences.language ?? 'en');  // 'en' — language не равен null или undefined

//Кратко:
// если значение переменной равняется null или undefined, возвращается значение справа от оператора ??.
// если значение переменной не является null или undefined, возвращается само значение переменной.



