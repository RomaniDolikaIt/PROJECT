// todo 1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом.
//  Если да - функция возвращает true, если нет - false;

function isPalindrome(str) {
    // 1. Приводим всё к нижнему регистру (чтобы 'А' и 'а' были равны)
    const cleanStr = str.toLowerCase();

    // 2. Разворачиваем строку:
    // split('') — в массив, reverse() — разворот, join('') — обратно в строку
    const reversedStr = cleanStr.split('').reverse().join('');

    // 3. Сравниваем оригинал и перевертыш
    return cleanStr === reversedStr;
}

console.log(isPalindrome('Шалаш')); // true
console.log(isPalindrome('Логистика')); // false

//todo 2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней
// и возвращает его;

function findShortestWord(sentence) {
    // 1. Разбиваем строку на массив слов (по пробелу)
    const words = sentence.split(' ');

    // 2. Используем reduce, чтобы найти "победителя"
    return words.reduce((shortest, current) => {
        // Если текущее слово короче того, что мы уже нашли — оно становится новым лидером
        return current.length < shortest.length ? current : shortest;
    });
}

console.log(findShortestWord('Я изучаю программирование на JavaScript')); // "Я"
console.log(findShortestWord('Груз прибыл в порт')); // "в"

//todo 3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер.
// Пример: createPhoneNumber(123456789) → 8 (123) 456-789;

function createPhoneNumber(numbers) {
    // 1. Превращаем входные данные в строку и разбиваем на массив цифр
    // Если на входе число 123456789, получаем ['1', '2', '3'...]
    const digits = String(numbers).split('');

    // 2. Создаем шаблон, где вместо цифр стоят буквы 'x'
    let mask = "8 (xxx) xxx-xxx";

    // 3. Проходимся по каждой цифре и заменяем первую попавшуюся 'x' на эту цифру
    digits.forEach(digit => {
        mask = mask.replace('x', digit);
    });

    return mask;
}

console.log(createPhoneNumber(123456789)); // "8 (123) 456-789"

//todo 4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

function findMinMax(arr) {
    // Мы "рассыпаем" массив на отдельные числа внутри скобок
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return { min, max }; // Возвращаем объект с обоими значениями
}

const numbers = [10, 2, 55, -5, 100];
console.log(findMinMax(numbers)); // { min: -5, max: 100 }

//todo 5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый,
// отсортированный в порядке возрастания, массив.
// Попробуй реализовать алгоритм сортировки самостоятельно.

function bubbleSort(arr) {
    // Создаем копию, чтобы не менять оригинальный массив (хорошая практика!)
    let result = [...arr];

    for (let i = 0; i < result.length; i++) {
        // Внутренний цикл: сравниваем пары
        // result.length - 1 - i нужно, чтобы не проверять уже "осевшие" в конце числа
        for (let j = 0; j < result.length - 1 - i; j++) {

            if (result[j] > result[j + 1]) {
                // Меняем местами, используя деструктуризацию (красивый JS способ!)
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }

        }
    }

    return result;
}

const unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsorted)); // [11, 12, 22, 25, 34, 64, 90]