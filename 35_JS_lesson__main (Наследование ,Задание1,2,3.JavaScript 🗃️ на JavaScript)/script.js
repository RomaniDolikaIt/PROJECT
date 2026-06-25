function printToBox(elementId, text) {
  document.getElementById(elementId).textContent += text + "\n";
}

// ==========================================
// 👪 ЗАДАНИЕ 1: Родословная классов Person и Student
// ==========================================
class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Привет, меня зовут ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name); // Оживляем родительский конструктор
    this.course = course;
  }
  introduce() {
    return `Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе.`;
  }
}

const alex = new Student("Алексей", 3);
printToBox("res-1", `🏃 Вызов метода экземпляра:\n${alex.introduce()}`);

// --- Исследование прототипов под капотом ---
// Выводим в консоль браузера, как просили в задании
console.log("=== Задание 1: Исследование Student.prototype ===");
console.log(Student.prototype);

// Визуализируем цепочку на экране для понимания
printToBox("res-1", `\n🕵️ Исследуем скрытые связи (Цепочка прототипов):`);
printToBox(
  "res-1",
  `1. Объект alex создан от прототипа: ${Object.getPrototypeOf(alex).constructor.name}`,
);
printToBox(
  "res-1",
  `2. Родитель прототипа Student: ${Object.getPrototypeOf(Student.prototype).constructor.name}.prototype`,
);
printToBox(
  "res-1",
  `3. Самый верхний родитель: ${Object.getPrototypeOf(Object.getPrototypeOf(Student.prototype)).constructor.name}.prototype`,
);

// ==========================================
// 💼 ЗАДАНИЕ 2: Сотрудник (Employee)
// ==========================================
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  work() {
    return `Я работаю на позиции ${this.position}.`;
  }

  introduce() {
    // Берем базовое приветствие у Person и приклеиваем к нему информацию о должности
    return `${super.introduce()} И да, ${this.work()}`;
  }
}

const roman = new Employee("Роман", "Frontend Tech Lead");
printToBox("res-2", `${roman.introduce()}`);

// ==========================================
// 🚗 ЗАДАНИЕ 3: Чистые объекты без классов (Object.create)
// ==========================================

// Базовый объект-родитель (Прототип)
const Vehicle = {
  move: function () {
    return "💨 Транспортное средство движется...";
  },
};

// Создаем новый пустой объект Car, у которого прототипом (__proto__) ЖЕСТКО назначен Vehicle
const Car = Object.create(Vehicle);

// Добавляем объекту Car его собственный метод
Car.drive = function () {
  return "🚗 Машина едет по дороге, крутя колесами!";
};

// Проверяем, как работает цепочка
printToBox("res-3", `Вызов собственного метода Car.drive():\n${Car.drive()}`);
printToBox(
  "res-3",
  `\nВызов унаследованного метода Car.move():\n${Car.move()}`,
);

// Докажем бэкенду, что Car реально унаследован от Vehicle без всяких классов
printToBox(
  "res-3",
  `\nЯвляется ли Vehicle прототипом для Car? -> ${Vehicle.isPrototypeOf(Car)}`,
);
