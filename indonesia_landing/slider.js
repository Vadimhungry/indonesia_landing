const images = document.querySelectorAll('.slider-img');
const controls = document.querySelectorAll('.controls');
let imageIndex = 0;

// функция скрывает отображаемый слайд и показывает слайд с номером index
function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active')
    imageIndex = index;
}

// функция для обработки клика по переключанелю на слайдере
function handleControlClick(event) {
    if (event.target.classList.contains('prev')) {
        let index = imageIndex - 1;

        if (index < 0) {
            index = images.length - 1;
        }

        show(index);
    } else if (event.target.classList.contains('next')) {
        let index = imageIndex + 1;

        if (index >= images.length) {
            index = 0;
        }

        show(index);
    }
}

// каждой кнопке с классом controls добавляем обработчик клика по ней
controls.forEach((e) => {
    e.addEventListener('click', handleControlClick);
})

// при загрузке страницы отображаем первый слайд
show(imageIndex);