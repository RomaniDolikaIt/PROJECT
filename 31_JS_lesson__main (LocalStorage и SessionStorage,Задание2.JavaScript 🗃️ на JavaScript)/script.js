//todo 2. Создай приложение для учета расходов. Сохрани каждую запись расхода (описание, сумма, дата)
// в LocalStorage в виде массива объектов JSON. Затем извлеки данные из LocalStorage и отобрази список
// расходов. Также реализуй функцию удаления записи из LocalStorage;

const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('expenses-list');

// 1. ФУНКЦИЯ ОТРИСОВКИ: Достает массив из LocalStorage и выводит его на экран
function renderExpenses() {
    // Очищаем контейнер, чтобы не дублировать старые записи при каждой перерисовке
    listContainer.innerHTML = '';

    // Наша "железная защита": достаем строку. Если там пусто (null), берём пустой массив []
    const expenses = JSON.parse(localStorage.getItem('my_expenses')) || [];

    // Если расходов нет, пишем об этом
    if (expenses.length === 0) {
        listContainer.innerHTML = '<p style="color: #777;">Список расходов пока пуст...</p>';
        return;
    }

    // Пробегаемся по массиву и создаем HTML-кубик для каждого расхода
    expenses.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'expense-item';

        div.innerHTML = `
                <div class="expense-info">
                    <strong>${item.title}</strong> — <span>${item.amount} ₽</span>
                    <span class="expense-date">${item.date}</span>
                </div>
                <button class="del-btn" onclick="deleteExpense(${item.id})">❌ Удалить</button>
            `;

        listContainer.appendChild(div);
    });
}

// 2. ФУНКЦИЯ ДОБАВЛЕНИЯ: Срабатывает при клике на большую розовую кнопку
addBtn.addEventListener('click', () => {
    const titleInput = document.getElementById('exp-title');
    const amountInput = document.getElementById('exp-amount');
    const dateInput = document.getElementById('exp-date');

    // Проверяем, заполнено ли всё
    if (!titleInput.value || !amountInput.value || !dateInput.value) {
        alert('Заполните все три поля!');
        return;
    }

    // Шаг А: Достаем текущий массив из сейфа (или создаем новый пустой)
    const expenses = JSON.parse(localStorage.getItem('my_expenses')) || [];

    // Шаг Б: Создаем новый объект расхода
    const newExpense = {
        id: Date.now(), // Генерирует уникальное число (мс от 1970 года). Идеально для ID!
        title: titleInput.value,
        amount: Number(amountInput.value),
        date: dateInput.value
    };

    // Шаг В: Запихиваем объект в массив
    expenses.push(newExpense);

    // Шаг Г: Упаковываем массив в строку JSON и заменяем старый массив в LocalStorage
    localStorage.setItem('my_expenses', JSON.stringify(expenses));

    // Очищаем поля ввода на странице для следующей покупки
    titleInput.value = '';
    amountInput.value = '';
    dateInput.value = '';

    // Перерисовываем список, чтобы новая запись сразу появилась
    renderExpenses();
});

// 3. ФУНКЦИЯ УДАЛЕНИЯ: Находит нужный расход по ID и выкидывает его
function deleteExpense(idToDelete) {
    // Шаг А: Достаем массив из сейфа
    let expenses = JSON.parse(localStorage.getItem('my_expenses')) || [];

    // Шаг Б: Фильтруем массив. Оставляем только те элементы, чей ID НЕ равен idToDelete
    expenses = expenses.filter(item => item.id !== idToDelete);

    // Шаг В: Сохраняем отфильтрованный массив обратно в LocalStorage
    localStorage.setItem('my_expenses', JSON.stringify(expenses));

    // Перерисовываем экран
    renderExpenses();
}

// 4. ТРИГГЕР: Загружаем и показываем список расходов сразу при открытии сайта
document.addEventListener('DOMContentLoaded', renderExpenses);