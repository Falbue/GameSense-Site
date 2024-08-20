function setElementPositions() {
    // Получаем все элементы с атрибутом "absolute" или "fixed"
    const elements = document.querySelectorAll('[absolute], [fixed]');
    
    // Проходим по всем найденным элементам
    elements.forEach(element => {
        let positionValue, positionType, zIndexValue;
        
        // Определяем тип позиции и значения атрибутов
        if (element.hasAttribute('absolute')) {
            positionValue = element.getAttribute('absolute');
            positionType = 'absolute';
            zIndexValue = '-1';
        } else if (element.hasAttribute('fixed')) {
            positionValue = element.getAttribute('fixed');
            positionType = 'fixed';
            zIndexValue = '999';
        }

        // Разделяем значение на координаты "top" и "left"
        const [top, left] = positionValue.split(' ');

        // Устанавливаем стили для элемента
        element.style.position = positionType;
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.zIndex = zIndexValue;
    });
}

// Вызываем функцию после загрузки страницы
window.onload = setElementPositions;
