"use strict"; // Включаем строгого завуча, чтобы видеть ошибки!

function printLog(elementId, text) {
  document.getElementById(elementId).textContent += text + "\n";
}

// ==========================================
// 🔒 ОБЪЕДИНЕННЫЙ ОБЪЕКТ: ТЕСТИРУЕМ ДЕСКРИПТОРЫ
// ==========================================
const secureLaptop = {
  brand: "Apple",
  model: "MacBook Pro",
};

// --- ЧАСТЬ 1: Делаем все текущие свойства неизменяемыми ---
Object.defineProperty(secureLaptop, "brand", { writable: false });
Object.defineProperty(secureLaptop, "model", { writable: false });

printLog("res-1", `💻 Создан объект со свойствами brand и model.`);
printLog(
  "res-1",
  `Текущие значения: ${secureLaptop.brand} ${secureLaptop.model}`,
);

// Проверяем, можно ли изменить значения (оборачиваем в try...catch)
try {
  printLog("res-1", `\n🔀 Пробуем изменить brand на "Asus"...`);
  secureLaptop.brand = "Asus"; // Здесь упадет ошибка
} catch (error) {
  printLog(
    "res-1",
    `💥 Завуч заблокировал изменение! Ошибка: ${error.message}`,
  );
  printLog(
    "res-1",
    `Проверяем значение после атаки: brand по-прежнему = "${secureLaptop.brand}"`,
  );
}

// --- ЧАСТЬ 2: Добавляем неперечисляемое свойство-невидимку ---
// Используем наш любимый синтаксис: Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(secureLaptop, "osVersion", {
  value: "macOS Sequoia",
  writable: true,
  configurable: true,
  enumerable: false, // ❌ СКРЫВАЕМ ИЗ ЦИКЛОВ!
});

// Добавим еще одно обычное свойство для контраста, чтобы цикл его увидел
secureLaptop.ram = "16GB";

printLog(
  "res-2",
  `🔑 Прямое чтение скрытого свойства osVersion: ${secureLaptop.osVersion}`,
);
printLog("res-2", `\n🔄 Запускаем цикл for...in для перебора ключей объекта:`);

let foundKeys = [];
for (const key in secureLaptop) {
  foundKeys.push(key);
  printLog(
    "res-2",
    ` Найдено свойство: [${key}] -> значение: ${secureLaptop[key]}`,
  );
}

// Убеждаемся, что osVersion не попал в перебор
printLog(
  "res-2",
  `\n📊 Итоговый массив ключей из цикла: ${JSON.stringify(foundKeys)}`,
);
if (!foundKeys.includes("osVersion")) {
  printLog(
    "res-2",
    `🎉 Проверка пройдена успешно! Свойство 'osVersion' полностью скрыто от цикла for...in.`,
  );
}
