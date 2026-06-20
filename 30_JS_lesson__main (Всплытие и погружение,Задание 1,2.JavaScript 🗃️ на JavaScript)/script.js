//todo 1. Создай три вложенных элемента (например, `div` внутри `div` внутри `div`).
// Назначь обработчики событий для каждого из них и проследи за последовательностью вызовов при клике
// на внутренний элемент с помощью console.log();
//todo 2. Напиши код, который останавливает всплытие события на среднем элементе из предыдущего задания;


const big = document.getElementById('big');
const medium = document.getElementById('medium');
const small = document.getElementById('small');

// Навешиваем клики на всех
big.addEventListener('click', () => {
    console.log('🔴 Сработало событие на БОЛЬШОМ div');
});

medium.addEventListener('click', (event) => {
    console.log('🟢 Сработало событие на СРЕДНЕМ div');


    event.stopPropagation();  // остановить всплытие!
});

small.addEventListener('click', () => {
    console.log('🔵 Сработало событие на МАЛЕНЬКОМ div');
});

