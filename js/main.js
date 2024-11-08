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

// Получаем элементы
const popUpLogin = document.querySelector('.pop-up-login');
const popUpRegister = document.querySelector('.pop-up-register');
const overlay = document.querySelector('.overlay');

// Общий обработчик открытия попапа
function openPopUp(popUp) {
  closeAllPopUps(); // Закрываем все попапы перед открытием нового
  popUp.classList.add('active');
  overlay.classList.add('active');
}

// Общий обработчик закрытия попапов
function closeAllPopUps() {
  document.querySelectorAll('.pop-up.active, .overlay.active').forEach(element => {
    element.classList.remove('active');
  });
}

// Обработчик событий для открытия и закрытия попапов
document.addEventListener('click', (event) => {
  if (event.target.matches('.login')) {  // Открыть попап Login
    openPopUp(popUpLogin);
  } else if (event.target.matches('.register')) {  // Открыть попап Register
    openPopUp(popUpRegister);
  } else if (
    event.target.closest('.pop-up__close') || 
    event.target.classList.contains('overlay')
  ) {  // Закрытие попапов по кнопке или overlay
    closeAllPopUps();
  } else if (event.target.closest('.pop-up__link')) {  // Переключение между попапами
    event.preventDefault();
    const isLoginLink = event.target.closest('.pop-up-login .pop-up__link');
    openPopUp(isLoginLink ? popUpRegister : popUpLogin);
  }
});
