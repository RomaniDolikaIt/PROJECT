//todo 1. Найдите с помощью break points ошибку в коде этой функции и исправьте ее:

    function hasEvenNumber(arr) {

        let foundEven = false;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] % 2 === 0) {

                foundEven = true;

            } else if (arr[i] % 2 !== 0) {

                foundEven = false;

            }

        }

        return foundEven;

    }

console.log(hasEvenNumber([1, 3, 4, 5])); // Ожидается: true

//ИСПРАВЛЕННЫЙ КОД
function hasEvenNumber(arr) {
    // Проверяем, существует ли массив и не пуст ли он (безопасность)
    if (!arr || arr.length === 0) {
        return false; [cite: 5, 6]
    }

    for (let i = 0; i < arr.length; i++) {
        // Если нашли четное число — сразу выходим с победой
        if (arr[i] % 2 === 0) {
            return true; [cite: 20, 21]
        }
    }

    // Если цикл закончился и мы ничего не вернули, значит четных чисел нет
    return false; [cite: 17]
}

console.log(hasEvenNumber([1, 3, 4, 5])); // Результат: true

//todo 2. Найдите с помощью debugger ошибку в коде этой функции и исправьте ее:

/**
 * Функция для вычисления среднего арифметического
 * Исправлена ошибка "Off-by-one" (выход за границы массива)
 */
function calculateAverage(numbers) {
    // Защитное условие (Guard Clause): проверка на пустой массив или его отсутствие
    if (!numbers || numbers.length === 0) {
        return 0; //
    }

    let sum = 0;

    // Исправленное условие: i < numbers.length вместо i <= numbers.length
    // Это предотвращает обращение к несуществующему индексу и получение NaN
    for (let i = 0; i < numbers.length; i++) { // [cite: 102, 103]
        sum += numbers[i];
    }

    return sum / numbers.length;
}

// Проверка работы
console.log(calculateAverage([2, 4, 6])); // Ожидаемый результат: 4

//todo 3. Найдите с помощью console.log ошибку в коде этой функции и исправьте ее:

function findLargestNumber(arr) {

    let largest = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {

            largest = arr[i];

        }

    }

    return largest;

}

console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10

//ИСПРАВЛЕННАЯ ВЕСИЯ

function findLargestNumber(arr) {

    let largest = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {

            largest = arr[i];

        }

    }

    return largest;

}

console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10

