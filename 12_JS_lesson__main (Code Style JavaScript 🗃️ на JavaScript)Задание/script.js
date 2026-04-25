// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
function multiply(a, b) {
    return a * b;
}

const person = { name: 'Alice', age: 30 };

if (person.age > 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
function multiplyNumbers(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    return result;
}

const product = multiplyNumbers(5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
const items = ['apple', 'banana', 'orange'];

const prices = {
    apple: 1,
    banana: 2,
    orange: 3
};

const total = prices.apple + prices.banana + prices.orange;

function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price, 0);
}

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".
function validateForm(formData) {
    // 1. Проверяем наличие объекта формы
    if (!formData) {
        return 'Ошибка: Данные формы не предоставлены';
    }

    // 2. Проверка имени (обязательное поле)
    if (!formData.name || formData.name.trim() === '') {
        return 'Ошибка: Имя должно быть заполнено';
    }

    // 3. Проверка email (наличие символа @)
    if (!formData.email || !formData.email.includes('@')) {
        return 'Ошибка: Некорректный адрес электронной почты';
    }

    // 4. Проверка пароля (минимум 6 символов)
    if (!formData.password || formData.password.length < 6) {
        return 'Ошибка: Пароль должен содержать минимум 6 символов';
    }

    // Если все проверки пройдены, возвращаем успех
    return 'Форма успешно отправлена';
}