//todo 3. Создай форму с несколькими полями ввода и кнопкой отправки. Реализуй делегирование события,
// например, валидации каждого поля ввода при его изменении. Пусть это будет простое условие, например,
// длина строки не более 20 символов.

// 1. Находим только саму форму! Нам плевать, сколько внутри неё инпутов.
const form = document.getElementById('registration-form');

// 2. Вешаем событие 'input' (срабатывает при каждом нажатии клавиши) прямо на ФОРМУ
form.addEventListener('input', (event) => {

    // event.target — это конкретный инпут на дне формы, в котором сейчас пишет пользователь
    const currentInput = event.target;

    // Нам нужно реагировать только если событие прилетело от тегов <input>
    if (currentInput.tagName === 'INPUT') {

        // Ищем блок с ошибкой, который лежит рядом с текущим инпутом
        const errorMessage = currentInput.nextElementSibling;

        // Условие из задания: длина строки не более 20 символов
        if (currentInput.value.length > 20) {
            // Если символов больше 20 — красим в красный
            currentInput.className = 'invalid';
            errorMessage.style.display = 'block';
            console.log(`❌ Ошибка в поле "${currentInput.name}": слишком длинный текст!`);
        } else {
            // Если всё хорошо — красим в зелёный
            currentInput.className = 'valid';
            errorMessage.style.display = 'none';
        }
    }
});

// Предотвращаем перезагрузку страницы при отправке формы
form.addEventListener('submit', (e) => e.preventDefault());