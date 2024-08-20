const fadeDurationInSeconds = 1; // Длительность анимации

        function fadeOutElement(element) {
            if (element) {
                element.style.transition = `opacity ${fadeDurationInSeconds}s ease`;
                element.classList.add('fade-out'); // Добавляем класс для анимации исчезновения

                setTimeout(() => {
                    element.style.zIndex = '-1'; // Устанавливаем z-index, чтобы скрыть элемент
                }, fadeDurationInSeconds * 1000);
            }
        }

        function fadeInElement(element) {
            if (element) {
                element.style.zIndex = '1000'; // Восстанавливаем z-index перед показом
                element.style.transition = `opacity ${fadeDurationInSeconds}s ease`;
                element.classList.remove('fade-out'); // Убираем класс для показа элемента
                element.classList.add('fade-in'); // Добавляем класс для анимации появления
            }
        }