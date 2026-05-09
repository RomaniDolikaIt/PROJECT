// todo 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:
const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };
const total1 = product1.price * 1.2;
const total2 = product2.price * 1.2;
console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);

//после рефакторинга Использование метода массива .map()
const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 }
];

const calculateTotal = (price) => price * 1.2;

products.forEach(p => {
    console.log(`Total for ${p.name}:`, calculateTotal(p.price));
});

// todo 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
if (user.isAdmin) {
    if (user.isActive) {
        if (user.age > 18) {
            console.log('Access granted');
        }
    }
}

//после рефакторинга Guard Clauses (Защитные условия)
function checkAccess(user) {
    // Если хотя бы одно условие не выполнено — выходим
    if (!user.isAdmin) return;
    if (!user.isActive) return;
    if (user.age <= 18) return;

    // Если мы дошли досюда, значит всё в порядке
    console.log('Access granted');
}

// todo 3 задание
// В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// чтобы улучшить читаемость и повторное использование кода:
function checkStock(item) {
    return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
}
function processOrder(order) {
    // Валидация данных заказа
    if (!order.id || !order.items || order.items.length === 0) {
        console.log('Invalid order');
        return;
    }
    // Рассчет суммы
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
    }
    // Проверка наличия на складе
    for (let item of order.items) {
        if (!checkStock(item)) {
            console.log('Item out of stock:', item.name);
            return;
        }
    }
    // Выполнение заказа
    console.log('Order processed with total:', total);
}

//после рефакторинга деструктуризация

const isItemInStock = () => Math.random() < 0.5;

// Считаем сумму через reduce в одну строку
const calculateTotal = (items) =>
    items.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

function processOrder(order) {
    const { id, items } = order;

    // 1. Компактная валидация
    if (!id || !items?.length) return console.log('Invalid order');

    // 2. Поиск отсутствующего товара через .find()
    const outOfStockItem = items.find(item => !isItemInStock(item));

    if (outOfStockItem) {
        return console.log('Item out of stock:', outOfStockItem.name);
    }

    // 3. Финальный результат
    console.log('Order processed with total:', calculateTotal(items));
}