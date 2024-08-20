// Функция для применения стилей к элементу
function applyStyle(element, styleProperty, value) {
    element.style[styleProperty] = value;
}

// Получаем все элементы на странице
const allElements = document.querySelectorAll('*');

// Перебираем каждый элемент
allElements.forEach(element => {
    // Получаем список классов, примененных к элементу
    const classes = element.classList;

    // Перебираем каждый класс
    classes.forEach(className => {
        let value;

        if (className.startsWith('h')) {
            value = className.slice(1);
            applyStyle(element, 'height', `${value}px`);
        }

        if (className.startsWith('m')) {
            if (className.startsWith('mt')) {
                value = className.slice(2);
                applyStyle(element, 'marginTop', `${value}px`);
            } else if (className.startsWith('ml')) {
                value = className.slice(2);
                applyStyle(element, 'marginLeft', `${value}px`);
            } else if (className.startsWith('mb')) {
                value = className.slice(2);
                applyStyle(element, 'marginBottom', `${value}px`);
            } else if (className.startsWith('mv')) {
                value = className.slice(2);
                applyStyle(element, 'marginBottom', `${value}px`);
                applyStyle(element, 'marginTop', `${value}px`);
            }else {
                value = className.slice(1);
                applyStyle(element, 'margin', `${value}px`);
            }
        }

        if (className.startsWith('p')) {
            if (className.startsWith('pt')) {
                value = className.slice(2);
                applyStyle(element, 'paddingTop', `${value}px`);
            }
            if (className.startsWith('pv')) {
                value = className.slice(2);
                applyStyle(element, 'paddingTop', `${value}px`);
                applyStyle(element, 'paddingBottom', `${value}px`);
            } 
            else {
                value = className.slice(1);
                applyStyle(element, 'padding', `${value}px`);
            }
        }

        if (className.startsWith('w')) {
            if (className === 'w-full') {
                applyStyle(element, 'width', '100%');
            } else if (className.startsWith('w-')) {
                value = className.slice(2);
                if (!isNaN(value) && value >= 0 && value <= 100) {
                    applyStyle(element, 'width', `${value}%`);
                }
            } else {
                value = className.slice(1);
                applyStyle(element, 'width', `${value}px`);
            }
        }

        if (className.startsWith('bg-color')) {
            value = className.slice(8);
            applyStyle(element, 'backgroundColor', value);
        }

        if (className.startsWith('br')) {
            value = className.slice(2);
            applyStyle(element, 'borderRadius', value);
        }
    });
});
