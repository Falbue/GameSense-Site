// Получаем textarea
var textarea = document.querySelector('textarea');

// Слушаем событие ввода
textarea.addEventListener('input', function() {
    // Автоматически изменяем высоту textarea в зависимости от содержимого
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
