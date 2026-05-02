//todo 1. Назначь для кнопки обработчик события click, который
// будет изменять текст этой кнопки при нажатии;

// 1. Находим кнопку на странице по её ID
const myButton = document.querySelector('#myButton');

// 2. Проверяем, существует ли элемент, чтобы избежать ошибок
if (myButton) {
    // 3. Назначаем обработчик события 'click'
    myButton.addEventListener('click', function() {
        // 4. Изменяем текст кнопки при нажатии
        myButton.textContent = 'Текст изменен!';
    });
}

//todo 2. Назначь для любого элемента обработчик события mouseover,
// который будет изменять размер элемента при наведении;

// 1. Выбираем элемент (например, по классу 'box')
const boxElement = document.querySelector('.box');

// 2. Проверяем, что элемент существует (наша «пуленепробиваемая» проверка)
if (boxElement) {
    // 3. Назначаем обработчик события 'mouseover' (наведение мыши)
    boxElement.addEventListener('mouseover', function() {
        // 4. Изменяем размер через свойство style
        // Увеличиваем элемент в 1.2 раза
        boxElement.style.transform = 'scale(1.2)';
        // Добавим плавности, чтобы изменение не было резким
        boxElement.style.transition = 'transform 0.3s ease';
    });

    // Дополнительно: возвращаем размер обратно, когда мышь уходит
    boxElement.addEventListener('mouseout', function() {
        boxElement.style.transform = 'scale(1.0)';
    });
}

//todo 3. Назначь для инпута обработчик события keyup,
// который будет выводить отпущенную клавишу в консоль;

// 1. Находим поле ввода (инпут) на странице
const myInput = document.querySelector('#myInput');

// 2. Проверяем, что инпут существует
if (myInput) {
    // 3. Назначаем обработчик события 'keyup'
    // Мы передаем объект события (event) в функцию, чтобы узнать, какая клавиша нажата
    myInput.addEventListener('keyup', function(event) {
        // 4. Выводим значение отпущенной клавиши в консоль
        console.log('Вы отпустили клавишу:', event.key);
    });
}

//todo 4. Создай форму и добавь обработчик события submit,
// который будет показывать сообщение об успешной отправке;

// 1. Находим форму и элемент для вывода сообщения
const feedbackForm = document.querySelector('#feedbackForm');
const messageDisplay = document.querySelector('#message');

// 2. Проверяем наличие формы
if (feedbackForm) {
    // 3. Назначаем обработчик события 'submit'
    feedbackForm.addEventListener('submit', function(event) {
        // 4. ОСТАНАВЛИВАЕМ перезагрузку страницы
        event.preventDefault();

        // 5. Показываем сообщение об успехе
        if (messageDisplay) {
            messageDisplay.textContent = 'Форма успешно отправлена! Спасибо.';
        }

        // Дополнительно: очистим поля формы
        feedbackForm.reset();
    });
}

//todo 5. Пусть на странице есть кнопка с надписью 'Изменить тему',
// которая позволяет переключать тему страницы.
// Например, по умолчанию тема светлая: задний фон - белый, текст - черный.
// Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый.
// Еще раз нажимаем на кнопку -> тема снова светлая и т. д.

// 1. Находим нашу кнопку
const themeBtn = document.querySelector('#themeButton');

// 2. Проверяем, что кнопка есть на странице
if (themeBtn) {
    // 3. Вешаем обработчик клика
    themeBtn.addEventListener('click', function() {
        // 4. Магия одной строки: toggle добавляет класс, если его нет,
        // и удаляет, если он уже есть.
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = 'Включить светлую тему';
        } else {
            themeBtn.textContent = 'Изменить тему';
        }
    });
}