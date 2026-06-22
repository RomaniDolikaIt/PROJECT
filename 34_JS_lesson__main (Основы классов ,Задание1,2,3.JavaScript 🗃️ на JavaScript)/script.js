// Вспомогательная функция для вывода логов прямо на экран
function printLog(elementId, text) {
  document.getElementById(elementId).textContent += text + "\n";
}

// ==========================================
// 📖 ЗАДАНИЕ 1: Класс Book
// ==========================================
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  // Метод вывода краткой информации
  getSummary() {
    return `📚 «${this.title}», автор: ${this.author} (${this.pages} стр.)`;
  }
}

// Создаем книгу и выводим инфо
const myBook = new Book("Гарри Поттер", "Дж. К. Роулинг", 500);
printLog("res-1", myBook.getSummary());

// ==========================================
// 👤 ЗАДАНИЕ 2: Класс User
// ==========================================
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    return `👤 Имя: ${this.name} | ✉️ Email: ${this.email}`;
  }
}

// Создаем несколько экземпляров (пользователей)
const user1 = new User("Роман", "roman@example.com");
const user2 = new User("Алиса", "alice@mail.ru");
const user3 = new User("Джон", "john_doe@gmail.com");

// Вызываем метод для каждого
printLog("res-2", user1.displayInfo());
printLog("res-2", user2.displayInfo());
printLog("res-2", user3.displayInfo());

// ==========================================
// 📐 ЗАДАНИЕ 3: Исправленный класс Rectangle
// ==========================================
class Rectangle {
  constructor(width, height) {
    // Инициализируем скрытые свойства с нижним подчеркиванием,
    // пропуская их через сеттеры для первой проверки при рождении объекта
    this.width = width;
    this.height = height;
  }

  // --- Управление ШИРИНОЙ ---
  set width(value) {
    if (value <= 0) {
      console.error("❌ Ошибка: Ширина должна быть больше 0!");
    } else {
      this._width = value; // Запись в скрытый сейф
    }
  }
  get width() {
    return this._width;
  }

  // --- Управление ВЫСОТОЙ (То, что просили добавить) ---
  set height(value) {
    if (value <= 0) {
      // Если число отрицательное или ноль — ругаемся, но старое значение НЕ меняем!
      console.error("❌ Ошибка: Высота должна быть больше 0!");
    } else {
      this._height = value; // Запись в скрытый сейф
    }
  }
  get height() {
    return this._height;
  }

  // --- Геттер площади ---
  get area() {
    // Теперь безопасно умножаем значения из скрытых сейфов, никакой рекурсии!
    return this._width * this._height;
  }

  // --- Геттер периметра (То, что просили добавить) ---
  get perimeter() {
    return 2 * (this._width + this._height);
  }
}

// Тестируем прямоугольник
const myRect = new Rectangle(5, 10);
printLog("res-3", `📐 Создан прямоугольник 5x10`);
printLog("res-3", `Площадь (get area): ${myRect.area}`); // 50
printLog("res-3", `Периметр (get perimeter): ${myRect.perimeter}`); // 30

printLog("res-3", `\n🔀 Пробуем сломать высоту и поставить -3...`);
// Специально открываем консоль, чтобы увидеть ошибку, которую выкинет сеттер
myRect.height = -3;

printLog("res-3", `Проверяем высоту после попытки взлома: ${myRect.height}`); // Осталась 10! Сеттер защитил её.
printLog("res-3", `Периметр не сломался и равен: ${myRect.perimeter}`); // Все еще 30
