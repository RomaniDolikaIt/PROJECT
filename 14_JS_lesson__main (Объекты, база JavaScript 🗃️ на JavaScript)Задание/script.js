//todo 1. Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст, увлечения и т.д.
// Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д.
// Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);

const userProfile = {
    name: 'Рома',               // Строка (String) [cite: 151]
    age: 39,                    // Число (Number) [cite: 151]
    hobbies: ['футбол'],        // Массив (Array) [cite: 151]
    isStudent: true             // Булево значение (Boolean)
};

console.log('Имя:', userProfile.name);
console.log('Возраст:', userProfile.age);

const hobbyKey = 'hobbies';
console.log('Увлечения:', userProfile[hobbyKey]);

console.table(userProfile);

for (let key in userProfile) {
    console.log(`${key}: ${userProfile[key]}`);
}

//todo 2. В объект из предыдущего пункта:
//
// - добавь новое свойство;
//
// - измени значение существующего свойства;
// - удали любое свойство.
// И снова выведи все свойства объекта в консоль разными способами!

const userProfile1 = {
    name: 'Рома',
    age: 39,
    hobbies: ['футбол'],
    isStudent: true
};

// 1. Добавляем новое свойство (город)
userProfile1.city = 'Москва';

// 2. Изменяем существующее свойство (возраст)
userProfile1.age = 40;

// 3. Удаляем свойство (статус студента)
delete userProfile1.isStudent;

console.log('Обновленный возраст:', userProfile1.age); // Выведет 40
console.log('Новое свойство (город):', userProfile1.city); // Выведет Москва
console.log('Удаленное свойство:', userProfile1.isStudent); // Выведет undefined

console.table(userProfile1);