// === ЗАДАНИЕ 1: ОТПРАВКА ФОРМЫ (POST) ===
document.getElementById('post-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Запрещаем странице перезагружаться при отправке формы

    const postData = {
        userId: document.getElementById('post-userid').value,
        title: document.getElementById('post-title').value,
        body: document.getElementById('post-body').value
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        const serverAnswer = await response.json();
        // Выводим ответ сервера в красивом текстовом JSON формате
        document.getElementById('post-response').textContent = `Статус: ${response.status} OK\n` + JSON.stringify(serverAnswer, null, 2);
    } catch (error) {
        document.getElementById('post-response').textContent = 'Ошибка запроса: ' + error.message;
    }
});

// === ЗАДАНИЕ 2: ПОЛУЧЕНИЕ СПИСКА (GET) ===
document.getElementById('load-posts-btn').addEventListener('click', async () => {
    const container = document.getElementById('posts-container');
    container.innerHTML = '⌛ Загрузка...';

    try {
        // Запрашиваем первые 5 постов, чтобы не забивать экран (добавили ?_limit=5)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await response.json();

        container.innerHTML = ''; // Очищаем текст загрузки

        posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'post-card';
            // Даем карточке ID, чтобы её легко было удалить из DOM дерева в Задании 3
            card.id = `post-id-${post.id}`;

            card.innerHTML = `
                    <div class="post-content">
                        <h4>${post.title}</h4>
                        <p>${post.body}</p>
                    </div>
                    <button class="btn-delete" onclick="deletePostFromServer(${post.id})">🗑️</button>
                `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = 'Ошибка при загрузке: ' + error.message;
    }
});

// === ЗАДАНИЕ 3: УДАЛЕНИЕ ПОСТА (DELETE) ===
async function deletePostFromServer(postId) {
    if (!confirm(`Вы точно хотите удалить пост №${postId}?`)) return;

    try {
        // Отправляем курьера с методом DELETE к конкретному посту
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Если сервер ответил успешным кодом (200), удаляем карточку из DOM дерева
            const cardToDelete = document.getElementById(`post-id-${postId}`);
            if (cardToDelete) {
                cardToDelete.remove();
                alert(`Пост №${postId} успешно удален! (Статус сервера: ${response.status})`);
            }
        }
    } catch (error) {
        alert('Не удалось удалить пост: ' + error.message);
    }
}

// === ЗАДАНИЕ 4: ОБНОВЛЕНИЕ ДАННЫХ (PUT) ===
document.getElementById('user-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const updatedUser = {
        id: 1, // Обновляем фейкового юзера №1
        name: document.getElementById('user-name').value,
        email: document.getElementById('user-email').value
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });

        const result = await response.json();
        document.getElementById('user-response').textContent = `Статус: ${response.status}\n` + JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('user-response').textContent = 'Ошибка PUT запроса: ' + error.message;
    }
});