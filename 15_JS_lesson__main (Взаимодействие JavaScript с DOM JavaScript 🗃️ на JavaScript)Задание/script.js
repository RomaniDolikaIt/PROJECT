//todo 1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

//Представим, что у нас в HTML есть такой элемент:
//    <h1 id="main-title">Старый заголовок</h1>

//Вот как мы заменим его текст с помощью JavaScript:

// 1. Находим элемент по его уникальному ID
const titleElement = document.getElementById('main-title');

// 2. Проверяем, существует ли он
if (titleElement) {
    // 3. Меняем текстовое содержимое
    titleElement.textContent = 'Добро пожаловать в мир JavaScript!';
}

console.log(titleElement);

//todo 2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

/*Допустим, на странице есть карточка:
    <div class="card">Информационный блок</div>

Вот как мы превратим её в «ночной режим» через JavaScript:
 */
// 1. Находим ПЕРВЫЙ элемент с классом 'card'
const card = document.querySelector('.card');

// 2. Проверяем наличие и меняем стили
if (card) {
    card.style.backgroundColor = '#2c3e50'; // Темно-синий фон
    card.style.color = '#ecf0f1';           // Светло-серый текст
}

//todo 3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;

// 1. «Рождение»: создаем пустой элемент нужного тега
const myParagraph = document.createElement('p');

// 2. «Наполнение»: добавляем внутрь текст
myParagraph.textContent = 'Привет! Я новый параграф, созданный с помощью JavaScript.';

// Можно добавить стили или классы для красоты
myParagraph.style.fontWeight = 'bold';
myParagraph.style.color = 'darkgreen';

// 3. «Прописка»: добавляем элемент в самый конец тела документа (body)
document.body.appendChild(myParagraph);

//todo 4. Напиши функцию, которая удаляет элемент с указанным ID из документа;

/**
 * Функция для удаления элемента по его ID
 * @param {string} elementId - ID элемента, который нужно удалить
 */
function removeElementById(elementId) {
    // 1. Пытаемся найти элемент на странице
    const element = document.getElementById(elementId);

    // 2. Защитное условие (Guard Clause):
    // Если элемента нет, просто выходим из функции, чтобы не вызвать ошибку
    if (!element) {
        console.warn(`Элемент с ID "${elementId}" не найден.`);
        return;
    }

    // 3. Удаляем элемент
    element.remove();
    console.log(`Элемент "${elementId}" успешно удален.`);
}

// Пример использования:
// removeElementById('ad-banner');

//todo 5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;

//Представим, что у нас есть такая ссылка в HTML:
//    <a id="dynamic-link" href="https://google.com">Перейти на сайт</a>

//Способ 1: Прямое обращение к свойству (самый быстрый)
//В большинстве случаев достаточно просто обратиться к свойству .href.

    // 1. Находим ссылку по ID
    const myLink = document.getElementById('dynamic-link');

// 2. Проверяем наличие элемента (наш стандарт безопасности)
if (myLink) {
    // 3. Меняем адрес
    myLink.href = 'https://github.com';

    // 4. Выводим новое значение в консоль
    console.log('Новый URL ссылки:', myLink.href);
}

//todo 6. Создай новый элемент, добавь к нему класс и добавь его в DOM;

// 1. Создаем новый элемент (например, карточку товара или уведомление)
const newElement = document.createElement('div');

// 2. Добавляем ему класс для стилизации
newElement.classList.add('status-message');

// 3. Наполняем элемент содержимым
newElement.textContent = 'Элемент успешно добавлен в DOM!';

// 4. Находим родителя, куда мы хотим поселить наш элемент (например, body)
const container = document.body;

// 5. Добавляем элемент на страницу
container.appendChild(newElement);

//todo 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.

// 1. Пытаемся найти элемент на странице
const box = document.querySelector('#myBox');

// 2. Проверяем: а нашелся ли элемент?
if (box) {
    // Если элемент существует, работаем с ним:

    // Переключаем класс
    box.classList.toggle('active');

    // Выводим результат в консоль
    console.log('Элемент найден. Наличие класса "active":', box.classList.contains('active'));
} else {
    // Если элемент НЕ нашелся, выводим предупреждение вместо ошибки
    console.warn('Ошибка: Элемент с селектором #myBox не найден на странице!');
}