//todo 3. Создай счетчик, который отслеживает и отображает активное время пользователя на странице.
// Время должно обновляться каждую секунду и сохраняться в SessionStorage.


const counterElement = document.getElementById('seconds-counter');

// ШАГ 1: Заглядываем в камеру хранения сессии при загрузке страницы.
// Если пользователь только что зашел — там будет null, тогда берем 0.
// Если он обновил страницу — забираем сохраненные секунды, чтобы продолжить отсчет!
let totalSeconds = Number(sessionStorage.getItem('active_seconds')) || 0;

// Сразу выводим стартовую цифру на экран, чтобы пользователь не видел дефолтный ноль
counterElement.textContent = totalSeconds;

// ШАГ 2: Включаем бесконечный метроном (setInterval), который тикает каждые 1000 мс (1 секунда)
setInterval(() => {
    totalSeconds += 1; // Накидываем секунду

    counterElement.textContent = totalSeconds; // Меняем цифру на экране

    // Перезаписываем обновленное значение в SessionStorage
    // Нам не нужен JSON.stringify, потому что число автоматически превратится в строку '1', '2' и т.д.
    sessionStorage.setItem('active_seconds', totalSeconds);
}, 1000);