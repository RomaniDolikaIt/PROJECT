/*
//todo 1. Напиши функцию, которая использует `setTimeout` для создания таймера обратного отсчета.
// Таймер должен выводить оставшееся время каждую секунду и остановиться,когда время истечет;

function countdownTimer(seconds) {
    // Выводим текущее оставшееся время
    console.log(`Осталось времени: ${seconds} сек.`);

    // ТОРМОЗ: Проверяем, не кончилось ли время
    if (seconds <= 0) {
        console.log("⏱️ Время истекло! Таймер остановлен.");
        return; // Выходим из функции, дальше таймер заводить не нужно
    }

    // ПЕДАЛЬ ГАЗА: Если время еще есть, заводим будильник на 1 секунду (1000 мс)
    // Который вызовет эту же функцию, но уменьшит секунды на 1
    setTimeout(function() {
        countdownTimer(seconds - 1);
    }, 1000);
}

// === ПРОВЕРЯЕМ В КОНСОЛИ ===
// Запускаем таймер на 5 секунд
countdownTimer(5);


//todo 2. Напиши функцию, которая использует `setInterval` для вывода сообщения "Не забудь выпить воды!"
// каждые 30 минут;

function startWaterReminder(minutes) {
    // Переводим минуты в миллисекунды:
    // 1 минута = 60 секунд = 60 000 миллисекунд
    const intervalMs = minutes * 60 * 1000;

    console.log(`💧 Таймер запущен! Напоминание будет срабатывать каждые ${minutes} мин.`);

    // Запускаем бесконечный цикл каждые 30 минут
    const intervalId = setInterval(function() {
        console.log("🔔 Напоминание: Не забудь выпить воды!");
    }, intervalMs);

    // Возвращаем ID интервала наружу, чтобы его можно было остановить при необходимости
    return intervalId;
}

// === ЗАПУСК ===
// Передаем 30 минут, как в условии задачи
const waterTimerId = startWaterReminder(30);
*/
//todo 3. Создай HTML-форму, где есть три элемента:
//  - поле "Задержка"
// - поле "Текст"
// - кнопка "Начать".
// При клике на кнопку текст выводится в консоль через указанную задержку до тех пор, пока пользователь
// снова не нажмет начать. Если пользователь снова нажмет на кнопку - текст снова начнет выводится в
// консоль, нажмет еще раз - прекратит и т. д.

// 1. Ищем элементы на странице (наши провода)
const delayInput = document.getElementById('delay-input');
const textInput = document.getElementById('text-input');
const toggleBtn = document.getElementById('toggle-btn');

// 2. Хранилище состояния таймера
let timerId = null; // Сюда будем прятать паспорт запущенного setInterval

// 3. Главная функция-тумблер
function handleToggle() {
    // ПРОВЕРКА: Если timerId НЕ равен null, значит таймер СЕЙЧАС РАБОТАЕТ
    if (timerId !== null) {
        // ДЕЙСТВИЕ "ВЫКЛ":
        clearInterval(timerId); // Уничтожаем интервал по его паспорту
        timerId = null;         // Сбрасываем переменную в исходное состояние empty

        // Меняем внешний вид кнопки обратно на зелёный
        toggleBtn.innerText = "Начать";
        toggleBtn.className = "btn-start";
        console.log("🛑 Таймер остановлен пользователем.");
    }
    // Иначе (если timerId равен null), значит сейчас всё выключено
    else {
        // ДЕЙСТВИЕ "ВКЛ":
        const delayInSeconds = Number(delayInput.value); // Забираем цифру из поля
        const textToPrint = textInput.value;             // Забираем текст из поля

        // Переводим секунды в миллисекунды для нашего капризного JS!
        const delayInMs = delayInSeconds * 1000;

        console.log(`🚀 Таймер запущен! Будет писать "${textToPrint}" каждые ${delayInSeconds} сек.`);

        // Запускаем бесконечный цикл и сохраняем его ID в нашу переменную
        timerId = setInterval(function() {
            console.log(`🔔 Сообщение: ${textToPrint}`);
        }, delayInMs);

        // Меняем внешний вид кнопки на красный "Стоп"
        toggleBtn.innerText = "Прекратить";
        toggleBtn.className = "btn-stop";
    }
}

// 4. Вешаем клик на кнопку
toggleBtn.addEventListener('click', handleToggle);

