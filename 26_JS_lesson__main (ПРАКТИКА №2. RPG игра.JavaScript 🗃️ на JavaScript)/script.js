// === ДАННЫЕ ИГРЫ ===
const initialPlayerState = {
    name: "Игрок",
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
let gameState = 'explore';

const enemiesList = [
    { name: "Гоблин", hp: 40, str: 8, def: 2, xp: 30 },
    { name: "Орк", hp: 80, str: 14, def: 5, xp: 60 },
    { name: "Дракон", hp: 200, str: 25, def: 10, xp: 200 }
];

// === ССЫЛКИ НА ЭЛЕМЕНТЫ DOM ===
const statsContainer = document.getElementById('player-stats');
const logPanel = document.getElementById('log-panel');
const locationsPanel = document.getElementById('locations-panel');
const actionsPanel = document.getElementById('actions-panel');
const enemyStatsDisplay = document.getElementById('enemy-stats');
const potionCountDisplay = document.getElementById('potion-count');
// Добавили новый провод к самой кнопке лечения (Исправлено)
const healButton = document.getElementById('heal-btn');

// === ФУНКЦИИ ИГРЫ ===

function initGame() {
    player = { ...initialPlayerState };
    currentEnemy = null;
    gameState = 'explore';
    logPanel.innerHTML = '';
    log("Добро пожаловать в игра! Выберите локацию для исследования.", "log-event");
    updateUI();
}

function levelUp() {
    player.level++;
    player.xp -= player.xpNeeded;
    player.xpNeeded = Math.floor(player.xpNeeded * 1.5);
    player.maxHp += 20;
    player.hp = player.maxHp;
    player.str += 5;
    player.def += 3;
    log(`🎉 НОВЫЙ УРОВЕНЬ! Вы достигли ${player.level} уровня!`, "log-success");
}

function heal() {
    if (player.potions > 0) {
        if (player.hp === player.maxHp) {
            log("Здоровье и так максимальное!", "log-event");
            return;
        }
        player.potions--;
        let healAmount = 40;
        player.hp = Math.min(player.maxHp, player.hp + healAmount);
        log(`Вы выпили зелье и восстановили здоровье.`, "log-success");
        updateUI();
    }
}

function explore(locationName) {
    if (gameState !== 'explore') return;

    log(`Вы отправились исследовать: ${locationName}...`, "log-event");
    let chance = Math.floor(Math.random() * 100) + 1;

    if (chance <= 30) {
        log("Здесь тихо. Вы ничего не нашли.", "log-event");
    } else if (chance <= 50) {
        player.potions++;
        log("Вы нашли в кустах Зелье лечения!", "log-success");
    } else {
        startCombat();
    }
    updateUI();
}

function startCombat() {
    let randomIndex = Math.floor(Math.random() * enemiesList.length);
    currentEnemy = { ...enemiesList[randomIndex] };
    gameState = 'combat';
    log(`⚠️ На вас напал ${currentEnemy.name}!`, "log-combat");
    updateUI();
}

function attackEnemy() {
    if (gameState !== 'combat' || !currentEnemy) return;

    // Игрок бьет
    let damageToEnemy = Math.max(1, player.str - currentEnemy.def);
    currentEnemy.hp -= damageToEnemy;
    log(`Вы ударили ${currentEnemy.name} на ${damageToEnemy} урона.`, "log-event");

    if (currentEnemy.hp <= 0) {
        log(`💀 ${currentEnemy.name} повержен! Вы получили ${currentEnemy.xp} опыта.`, "log-success");
        player.xp += currentEnemy.xp;
        if (player.xp >= player.xpNeeded) {
            levelUp();
        }
        currentEnemy = null;
        gameState = 'explore';
        updateUI();
        return;
    }

    // Враг бьет в ответ
    let damageToPlayer = Math.max(1, currentEnemy.str - player.def);
    player.hp -= damageToPlayer;
    log(`⚔️ ${currentEnemy.name} атакует вас на ${damageToPlayer} урона.`, "log-combat");

    if (player.hp <= 0) {
        log("☠️ ВЫ ПОГИБЛИ. Игра окончена. Нажмите 'Сброс игры'!", "log-combat");
        gameState = 'gameover';
    }

    updateUI();
}

function flee() {
    if (gameState !== 'combat') return;
    log("🏃 Вы сбежали с поля боя...", "log-event");
    currentEnemy = null;
    gameState = 'explore';
    updateUI();
}

// === ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ===
function updateUI() {
    // Статистика
    statsContainer.innerHTML = `
            <div><strong>Уровень:</strong> ${player.level}</div>
            <div><strong>Опыт (XP):</strong> ${player.xp} / ${player.xpNeeded}</div>
            <div><strong>Здоровье (HP):</strong> ${player.hp} / ${player.maxHp}</div>
            <div><strong>Сила (STR):</strong> ${player.str}</div>
            <div><strong>Защита (DEF):</strong> ${player.def}</div>
            <div><strong>Инвентарь:</strong> Зелья (${player.potions})</div>
        `;

    potionCountDisplay.innerText = player.potions;

    // ЛОГИКА БЛОКИРОВКИ КНОПКИ ЗЕЛЬЯ (Исправлено)
    if (player.potions === 0) {
        healButton.disabled = true; // Блокируем кнопку, если банок 0
    } else {
        healButton.disabled = false; // Разблокируем, если банки есть
    }

    // Управление видимостью панелей через класс .hidden (Исправлено)
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
        healButton.disabled = true; // При смерти лечиться тоже нельзя
    }
}

function log(message, className = "") {
    const entry = document.createElement('div');
    entry.className = `log-entry ${className}`;
    entry.innerText = `> ${message}`;
    logPanel.prepend(entry);
}

document.getElementById('reset-btn').addEventListener('click', initGame);
initGame();