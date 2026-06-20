//todo 1. Создай форму для ввода контактной информации (имя, телефон, email).
// Сохрани данные в LocalStorage в виде объекта JSON. Затем извлеки данные из LocalStorage,
// преобразуй их обратно в объект и отобрази контактную информацию на странице;

const saveBtn = document.getElementById('save-btn');
const displayCard = document.getElementById('display-card');

// 1. Функция-распаковщик: достает данные из сейфа и рисует их на экране
function loadAndDisplayContact() {
    // Достаем строчку из LocalStorage
    const rawData = localStorage.getItem('user_contact');

    // Переводчик JSON.parse превращает строку обратно в JS-объект.
    // Если в сейфе пусто (null), то благодаря оператору || мы берем null, и код не ломается
    const savedContact = JSON.parse(rawData) || null;

    // Если контакт нашелся — заполняем текст на странице и показываем карточку
    if (savedContact) {
        document.getElementById('out-name').textContent = savedContact.name;
        document.getElementById('out-phone').textContent = savedContact.phone;
        document.getElementById('out-email').textContent = savedContact.email;

        displayCard.style.style.display = 'block'; // Делаем блок видимым
    }
}

// 2. Функция-упаковщик: срабатывает при клике на кнопку
saveBtn.addEventListener('click', () => {
    // Собираем значения из полей ввода в один объект
    const contactObject = {
        name: document.getElementById('user-name').value,
        phone: document.getElementById('user-phone').value,
        email: document.getElementById('user-email').value
    };

    // Защита от пустых полей: если пользователь ничего не ввел, не сохраняем
    if (!contactObject.name || !contactObject.phone || !contactObject.email) {
        alert('Пожалуйста, заполните все поля перед сохранением!');
        return;
    }

    // Переводчик JSON.stringify превращает наш объект в плоскую строку текста
    const jsonString = JSON.stringify(contactObject);

    // Кладем эту строку в LocalStorage под ключом 'user_contact'
    localStorage.setItem('user_contact', jsonString);

    console.log('✅ Данные успешно упакованы в JSON и сохранены!');

    // Сразу вызываем отрисовку, чтобы данные мгновенно появились на экране
    loadAndDisplayContact();
});

// 3. Главный триггер: как только страница полностью загрузилась,
// сразу проверяем, не лежит ли в сейфе старый контакт
document.addEventListener('DOMContentLoaded', loadAndDisplayContact);