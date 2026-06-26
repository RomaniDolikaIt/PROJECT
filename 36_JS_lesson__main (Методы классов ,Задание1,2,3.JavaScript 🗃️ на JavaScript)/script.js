// Функция для вывода результатов работы прямо на страницу
function printResult(elementId, text) {
  document.getElementById(elementId).textContent += text + "\n";
}

// ==========================================
// 🔢 ЗАЗАНИЕ 1: Класс Counter
// ==========================================
class Counter {
  // Объявляем приватное свойство (наш скрытый от внешнего мира сейф)
  #count = 0;

  // Публичный метод для увеличения
  increment() {
    this.#count++;
  }

  // Публичный метод для уменьшения
  decrement() {
    this.#count--;
  }

  // Публичный метод для отображения текущего значения
  showValue() {
    return `🔢 Текущее значение счетчика: ${this.#count}`;
  }
}

// Тестируем счетчик
const myCounter = new Counter();
myCounter.increment();
myCounter.increment(); // Сделали +2
printResult("res-1", myCounter.showValue()); // Отобразит 2

myCounter.decrement(); // Сделали -1
printResult("res-1", myCounter.showValue()); // Отобразит 1

// ==========================================
// ✉️ ЗАДАНИЕ 2: Класс EmailValidator
// ==========================================
class EmailValidator {
  // Статический метод — утилита, привязанная к самому классу
  static isValid(email) {
    // Простая проверка: если в строке есть символ '@', возвращаем true, иначе false
    return email.includes("@");
  }
}

// Тестируем валидатор БЕЗ создания экземпляра через new
const email1 = "roman@example.com";
const email2 = "just_text.com";

printResult(
  "res-2",
  `Проверяем "${email1}": ${EmailValidator.isValid(email1)}`,
); // true
printResult(
  "res-2",
  `Проверяем "${email2}": ${EmailValidator.isValid(email2)}`,
); // false

// ==========================================
// 🛍️ ЗАДАНИЕ 3: Класс Order
// ==========================================
class Order {
  constructor(items) {
    this.items = items; // Массив товаров, например: [{name: 'яблоко', price: 100}, ...]
  }

  // 🔒 Приватный метод: считает сумму (скрытая внутренняя бухгалтерия)
  #calculateTotal() {
    // Пробегаемся по массиву и суммируем цены
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  // 🔓 Публичный метод: выдает чек наружу
  getInvoice() {
    // Изнутри класса мы имеем полный доступ к нашему приватному методу через #
    const total = this.#calculateTotal();
    return `🧾 Общая стоимость вашего заказа: ${total} руб.`;
  }
}

// Создаем корзину с покупками
const myCart = [
  { name: "Клавиатура Mac", price: 12000 },
  { name: "Мышка", price: 4500 },
];

// Оформляем заказ через экземпляр класса
const currentOrder = new Order(myCart);

// Вызываем публичный метод
printResult("res-3", currentOrder.getInvoice()); // Выведет общую сумму: 16500 руб.
