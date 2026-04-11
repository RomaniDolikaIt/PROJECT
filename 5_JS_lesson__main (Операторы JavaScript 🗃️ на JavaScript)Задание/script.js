//Todo 1. Напиши код, который решает примеры с картинки выше. Результаты округлить;
const result2 = 2 * 2 +2;
console.log(result2);

// Углы в градусах
const angle1 = 54;
const angle2 = 16;

// Перевод в радианы
const rad1 = angle1 * (Math.PI / 180);
const rad2 = angle2 * (Math.PI / 180);

// Вычисление выражения (sin(54) * cos(16))^2
const result1 = Math.pow(Math.sin(rad1) * Math.cos(rad2), 2);

// Округление результата до 4 знаков после запятой
console.log("Результат:", result1.toFixed(4));



// 1. Вычисляем числитель первой дроби
const sqrtPart = Math.sqrt(13.2 * 71.90);
const numerator = 16 * sqrtPart;

// 2. Вычисляем знаменатель первой дроби (2.4 / 7^4)
const denominator = 2.4 / Math.pow(7, 4);

// 3. Вычисляем второе слагаемое в скобках (3^sqrt(49))
const secondTerm = Math.pow(3, Math.sqrt(49));

// 4. Итоговое выражение
const result = (numerator / denominator + secondTerm) * Math.pow(2, 7);

// Вывод результата с округлением
console.log("Точный результат:", result);
console.log("Округленный до целого:", Math.round(result));

//Todo 2. Есть несколько числовых переменных (задай их самостоятельно). С помощью арифметических
// операторов и операторов
// сравнения определи, четное это число или нет;
// Задаем переменные
const number1 = 42;
const number2 = 17;

// Функция для проверки
function checkEven(num) {
    // Используем оператор остатка % и оператор строгого сравнения ===
    if (num % 2 === 0) {
        return `${num} — это четное число`;
    } else {
        return `${num} — это нечетное число`;
    }
}

// Вывод результатов
console.log(checkEven(number1)); // 42 % 2 даст 0
console.log(checkEven(number2)); // 17 % 2 даст 1

/*
3. Напиши программу, которая проверяет, если переменная name пуста или не задана,
то в консоль должно выводиться сообщение "Hello, Guest!". Если переменная name содержит
значение, то программа должна вывести сообщение "Hello, [name]!", где [name] — это значение переменной.
 */

// Попробуй поменять значение: напиши "Роман" или оставь пустые кавычки ""
let name = "Роман";

if (name) {
    // Если в переменной name что-то есть (она не пустая)
    console.log("Hello, " + name + "!");
} else {
    // Если name пустая (""), null или undefined
    console.log("Hello, Guest!");
}

let name1 = ""; // Переменная пуста

// Если name есть, выведется оно. ИЛИ (||) выведется "Guest"
console.log("Hello, " + (name1 || "Guest") + "!");