// === ДАННЫЕ ИГРЫ ===

// Базовые настройки для сброса

const initialPlayerState = {
    name: 'Игрок',
    level: 1,
    xp: 0,
    xpNeeded: 100,
    hp: 100,
    maxHp: 100,
    str: 15,
    def: 5,
    potions: 3
};

let player = {};
let currentEnemy = null;
let gameState = 'explore'; // 'explore' или 'combat'

const enemiesList = [
    {name: "Гоблин", hp: 40, str: 8, def: 2, xp: 30},
    {name: "Орк", hp: 80, str: 14, def: 5, xp: 60},
    {name: "Дракон", hp: 200, str: 25, def: 10, xp: 200}
];

// === ССЫЛКИ НА ЭЛЕМЕНТЫ DOM ===
const statsContainer = document.getElementById('player-stats');
const logPanel = document.getElementById('log-panel');
const locationsPanel = document.getElementById('locations-panel');
const actionsPanel = document.getElementById('actions-panel');
const enemyStatsDisplay = document.getElementById('enemy-stats');
const potionCountDisplay = document.getElementById('potion-count');

// === ОСНОВНЫЕ ФУНКЦИИ ИГРОКА ===

function initGame() {
    // Копируем базовое состояние (глубокое копирование не нужно, объект плоский)
    player = {...initialPlayerState};
    currentEnemy = null;
    gameState = 'explore';
    logPanel.innerHTML = '';
    log("Добро пожаловать в игру! Выберите локацию для исследования.", "log-event");
    updateUI();
}

function levelUP() {
    player.level++;
    player.xp -= player.xpNeeded;
    player.xpNeeded = Math.floor(player.xpNeeded * 1, 5); // Следующий уровень требует больше опыта

    player.maxHp += 20;
    player.hp = player.maxHp; // Восстанавливаем здоровье при повышении уровня
    player.str += 5;
    player.def += 3;

    log(`🎉 НОВЫЙ УРОВЕНЬ! Вы достигли ${player.level} уровня! Характеристики выросли.`, "log-success");
}

function heal() {
    if (player.potions > 0) {
        if (player.hp === player.maxHP) {
            log("Здоровье и так максимальное!", "log-event");
            return;
        }
        player.potions--;
        let healAmount = 40;
        player.hp = Math.min(player.maxHp, player.hp + healAmount);
        log('Вы выпили зелье и восстановили здоровье', "log-success");
        updateUI();
    } else {
        log("У вас нет зелий лечения!", "log-combat");
    }
}

// === ИГРОВАЯ ЛОГИКА (Исследование и Случайные события) ===

function explore(locationName) {
    if (gameState !== 'explore') return;

    log(`Вы отправились исследовать: ${locationName}...`, "log-event");

    // Генерируем случайное событие (от 1 до 100)
    let chance = Math.floor(Math.random() * 100) + 1;

    if (chance <= 30) {
        // 30% шанс - Ничего не произошло
        log("Здесь тихо. Вы ничего не нашли.", "log-event");
    } else if (chance <= 50) {
        // 20% шанс - Нашли предмет
        player.potions++;
        log("Вы нашли в кустах Зелье лечения!", "log-success");
    } else {
        // 50% шанс - Встреча с врагом
        startCombat();
    }
    updateUI();
}

// === ЛОГИКА БОЯ ===

function startCombat() {
    // Выбираем случайного врага и создаем его копию для текущего боя

    let randomIndex = Math.floor(Math.random() * enemiesList.length);
    currentEnemy = {...enemiesList[randomIndex]};

    gameState = 'combat';
    log(`⚠️На вас напал ${currentEnemy.name}!`, "log-combat");
    updateUI();
}

function attackEnemy() {
    if (gameState !== 'combat' || !currentEnemy) return;

    // Игрок бьет врага
    let damageToEnemy = Math.max(1, player.str - currentEnemy.def) //// Урон не может быть меньше 1
    currentEnemy.hp -= damageToEnemy;
    log(`Вы ударили ${currentEnemy.name} на ${damageToEnemy} урона.`, "log-event");

    if (currentEnemy.hp <= 0) {
        //Враг повержен
        log(`💀${currentEnemy.name} повережен! Вы получили ${currentEnemy.xp} опыта.`, "log-success");
        player.xp += currentEnemy.xp;

        //Проверка на уровень
        if (player.xp >= player.xpNeeded) {
            levelUP();
        }

        // Конец боя
        currentEnemy = null;
        gameState = 'explore';
        updateUI();
        return;
    }

    // Враг бьет в ответ
    let damageToPlayer = Math.max(1, currentEnemy.str - player.def);
    player.hp -= damageToPlayer;
    log(`⚔️${currentEnemy.name} атакует вас на ${damageToPlayer} урона.`, "log-combat");

    if (player.hp <= 0 ) {
        log("☠️ВЫ ПОГИБЛИ. Игра окончена. Нажмите 'Сброс игры', чтобы начать заново.", "log-combat");
        gameState = 'gameover';
    }

    updateUI();
}

function flee() {
    if (gameState !== 'combat') return;
    log("🏃Вы трусливо сбежали с поля боя...", "log-event");
    currentEnemy = null;
    gameState = 'explore';
    updateUI();
}

// === ИНТЕРФЕЙС И ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===

function updateUI() {
    // Обновляем текст статистики
    statsContainer.innerHTML = `
        <div><strong>Уровень:</strong> ${player.level}</div>
        <div><strong>Опыт (XP):</strong> ${player.xp} / ${player.xpNeeded}</div>
        <div><strong>Здоровье (HP):</strong> ${player.hp} / ${player.maxHp}</div>
        <div><strong>Сила (STR):</strong> ${player.str}</div>
        <div><strong>Защита (DEF):</strong> ${player.def}</div>
        <div><strong>Инвентарь:</strong> Зелья (${player.potions})</div>
    `;
    potionCountDisplay.innerText = player.potions;

    // Управляем видимостью панелей в зависимости от состояния
    if (gameState === 'explore') {
        locationsPanel.classList.remove('hidden');
        actionsPanel.classList.add('hidden');
    } else if (gameState === 'combat') {
        locationsPanel.classList.add('hidden');
        actionsPanel.classList.remove('hidden');
        enemyStatsDisplay.innerText = `Враг: ${currentEnemy.name} | Здоровье: ${currentEnemy.hp} | Сила: ${currentEnemy.str}`;
    } else if (gameState === 'gameover') {
        locationsPanel.classList.add('hidden');
        actionsPanel.classList.add('hidden');
    }
}

function log(message, className = "") {
    // Добавляем запись в начало журнала
    const entry = document.createElement('div');
    entry.className = `log-entry ${className}`;
    entry.innerText = `> ${message}`;
    logPanel.prepend(entry); // prepend вставляет элемент сверху
}

// Привязка кнопки сброса
document.getElementById('reset-btn').addEventListener('click', initGame);

// Запуск игры при загрузке
initGame();
