document.addEventListener('DOMContentLoaded', () => {
    const message = document.createElement('div'); // Створюємо контейнер для повідомлення
    message.textContent = 'Сторінка завантажена!';
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.right = '20px';
    message.style.padding = '10px 15px';
    message.style.backgroundColor = '#4CAF50';
    message.style.color = 'white';
    message.style.borderRadius = '5px';
    message.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(message); // Додаємо повідомлення на сторінку

    // Автоматично приховуємо повідомлення через 3 секунди
    setTimeout(() => {
        message.remove();
    }, 3000);
});
