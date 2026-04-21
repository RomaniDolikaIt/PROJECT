//todo 1. Создай функцию, которая принимает произвольное количество чисел
// и возвращает их среднее значение;

function getAverage(...numbers) {
    // 1. Сначала считаем сумму всех чисел через reduce
    const sum = numbers.reduce((total, n) => total + n, 0);

    // 2. Делим сумму на количество чисел (длину массива)
    return sum / numbers.length;
}

// Теперь мы можем передавать сколько угодно чисел:
console.log(getAverage(10, 20, 30));       // 20
console.log(getAverage(1, 2, 3, 4, 5, 6)); // 3.5

//todo 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна)
// и возвращает строку с этой информацией, используя деструктуризацию;

// В параметрах сразу указываем, какие ключи нам нужны из объекта
function formatUserInfo({ name, age, country }) {
    // Теперь переменные name, age и country доступны нам напрямую
    return `Пользователь: ${name}, возраст: ${age}, страна: ${country}`;
}

// Создаем объект пользователя
const person = {
    name: 'Роман',
    age: 32,
    country: 'Россия',
    occupation: 'Logistics' // Это поле функция просто проигнорирует
};

// Вызываем функцию и передаем в неё весь объект
console.log(formatUserInfo(person));
// Результат: "Пользователь: Роман, возраст: 32, страна: Россия"

//todo 3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию,
// чтобы извлечь несколько значений на разных уровнях вложенности;

const shipment = {
    id: 'RU-5521',
    route: {
        from: 'USA',
        via: 'Turkey',
        to: 'Russia'
    },
    cargo: [
        { type: 'Electronics', amount: 10 },
        { type: 'Furniture', amount: 5 }
    ],
    manager: 'Roman'
};
const {
    route: { from },           // Заходим в route и забираем from
    cargo: [{ type }],         // Заходим в массив cargo, берем 1-й элемент и забираем type
    manager                    // Забираем manager с верхнего уровня
} = shipment;

console.log(from);    // 'USA'
console.log(type);    // 'Electronics'
console.log(manager); // 'Roman'

//todo 4. Используй оператор `spread` для создания нового массива, который включает все элементы
// исходного массива и добавляет несколько новых элементов в начале и в конце;

const middleRoute = ['Turkey', 'Georgia'];

// Создаем новый массив, добавляя элементы в начало и в конец
const fullRoute = ['USA', ...middleRoute, 'Russia', 'Kazakhstan'];

console.log(fullRoute);
// Результат: ['USA', 'Turkey', 'Georgia', 'Russia', 'Kazakhstan']

//todo 5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами и возвращает
// новый объект без одного указанного параметра.

// Функция принимает объект, вытаскивает из него ключ 'propToRemove',
// а всё ОСТАЛЬНОЕ складывает в новый объект 'rest'
function removeProperty(propToRemove, obj) {
    // Мы используем динамическое имя ключа в квадратных скобках [propToRemove]
    const { [propToRemove]: deleted, ...rest } = obj;

    return rest;
}

const product = {
    id: 1,
    title: 'iPhone 15',
    price: 1000,
    category: 'Electronics'
};

// Удаляем 'price' из объекта
const cleanProduct = removeProperty('price', product);

console.log(cleanProduct);
// Результат: { id: 1, title: 'iPhone 15', category: 'Electronics' }