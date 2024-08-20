document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[open-menu]');
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');

    function showElement(element) {
        element.classList.add('show');
    }

    function hideElement(element) {
        element.classList.remove('show');
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const menuId = this.getAttribute('open-menu');
            const menu = document.getElementById(menuId);

            // Скрыть все меню
            document.querySelectorAll('.menu').forEach(m => hideElement(m));
            hideElement(sidebar);

            // Показать оверлей
            showElement(overlay);
            // Показать выбранное меню
            showElement(menu);
        });
    });

    const sidebarButton = document.querySelector('[open-sidebar]');
    if (sidebarButton) {
        sidebarButton.addEventListener('click', function(event) {
            event.preventDefault();
            // Скрыть все меню
            document.querySelectorAll('.menu').forEach(m => hideElement(m));
            // Показать оверлей
            showElement(overlay);
            // Показать боковое меню
            showElement(sidebar);
        });
    }

    overlay.addEventListener('click', function() {
        // Скрыть оверлей
        hideElement(overlay);
        // Скрыть все меню
        document.querySelectorAll('.menu').forEach(m => hideElement(m));
        hideElement(sidebar);
    });
});
