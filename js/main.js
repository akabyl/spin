// Получаем все элементы с классом .aside-nav__item
const navItems = document.querySelectorAll('.aside-nav__item');

// Функция для обновления активного состояния
function setActiveLink(event) {
	// Удаляем класс active у всех ссылок
	navItems.forEach(item => {
		const link = item.querySelector('.aside-nav__link');
		if (link) {
			link.classList.remove('active');
		}
	});

	// Добавляем класс active для текущей ссылки
	const clickedLink = event.target.closest('.aside-nav__link');
	if (clickedLink) {
		clickedLink.classList.add('active');
	}
}

// Привязываем обработчик события клика ко всем .aside-nav__item
navItems.forEach(item => {
	item.addEventListener('click', setActiveLink);
});
