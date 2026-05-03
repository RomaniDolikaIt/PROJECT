const questions = [
    {
        type: 'choice',
        question: 'Какая планета самая большая в Солнечной системе?',
        options: ['Марс', 'Юпитер', 'Сатурн', 'Венера'],
        answer: 'Юпитер'
    },
    {
        type: 'input',
        question: 'Как называется естественный спутник Земли?',
        answer: 'луна'
    },
    {
        type: 'choice',
        question: 'Кто был первым человеком в космосе?',
        options: ['Нил Армстронг', 'Юрий Гагарин', 'Алексей Леонов'],
        answer: 'Юрий Гагарин'
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const quizScreen = document.getElementById('quiz-screen');
const setupScreen = document.getElementById('setup-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const feedback = document.getElementById('feedback');
const timerDisplay = document.getElementById('timer');
const highScoreDisplay = document.getElementById('high-score');

// Загрузка лучшего результата [cite: 11, 17]
highScoreDisplay.textContent = `Лучший результат: ${localStorage.getItem('bestScore') || 0}`;

function startTimer() {
    timeLeft = 30;
    timerDisplay.textContent = `Осталось времени: ${timeLeft}с`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Осталось времени: ${timeLeft}с`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleAnswer(null, false); // Время истекло — ответ неверный [cite: 10]
        }
    }, 1000);
}

function showQuestion() {
    clearInterval(timerInterval);
    feedback.classList.add('hidden');
    answerOptions.innerHTML = '';

    const q = questions[currentQuestionIndex];
    questionText.textContent = q.question; // Используем textContent для безопасности [cite: 13, 20]

    if (q.type === 'choice') {
        q.options.forEach(opt => {
            const btn = document.createElement('button'); // Динамическое создание элементов [cite: 18, 19]
            btn.textContent = opt;
            btn.onclick = () => handleAnswer(opt, opt === q.answer);
            answerOptions.appendChild(btn);
        });
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Введите ответ...';
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Ответить';
        submitBtn.onclick = () => {
            // Приведение к нижнему регистру для корректного сравнения [cite: 29, 30]
            const isCorrect = input.value.trim().toLowerCase() === q.answer.toLowerCase();
            handleAnswer(input.value, isCorrect);
        };
        answerOptions.appendChild(input);
        answerOptions.appendChild(submitBtn);
    }
    startTimer();
}

function handleAnswer(userAnswer, isCorrect) {
    clearInterval(timerInterval);
    if (isCorrect) score++;

    feedback.textContent = isCorrect ? "Правильно! ✨" : `Ошибка! Правильный ответ: ${questions[currentQuestionIndex].answer}`;
    feedback.className = isCorrect ? 'correct' : 'wrong';
    feedback.classList.remove('hidden');

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endTest();
        }
    }, 1500); // Небольшая пауза, чтобы пользователь увидел результат [cite: 7]
}

function endTest() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    document.getElementById('final-score').textContent = `Ваш счет: ${score} из ${questions.length}`;

    // Сохранение рекорда [cite: 11, 17]
    const best = localStorage.getItem('bestScore') || 0;
    if (score > best) {
        localStorage.setItem('bestScore', score);
        highScoreDisplay.textContent = `Лучший результат: ${score}`;
    }
}

startBtn.onclick = () => {
    setupScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
};

restartBtn.onclick = () => {
    score = 0;
    currentQuestionIndex = 0;
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
};