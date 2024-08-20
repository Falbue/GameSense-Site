document.addEventListener('DOMContentLoaded', function() {
    const flashMessage = document.getElementById('reload_notification');
    const buttons = document.querySelectorAll('button[notification]');
    const notification = document.getElementById('notification');
    const notificationText = notification.querySelector('h3.notification_font');

    function showElement(element) {
        setTimeout(() => {
            element.classList.add('show');
        }, 100);
    }

    function hideElement(element) {
        setTimeout(() => {
            element.classList.remove('show');
        }, 3100);
    }

    if (flashMessage) {
        showElement(flashMessage);
        hideElement(flashMessage);
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('notification');
            notificationText.textContent = message;
            showElement(notification);
            hideElement(notification);
        });
    });

            // Объявляем функции для использования в другом скрипте
    window.showElement = showElement;
    window.hideElement = hideElement;
});