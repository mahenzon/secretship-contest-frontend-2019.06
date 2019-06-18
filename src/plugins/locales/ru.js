const locale = {
  strings: {
    // navbar
    homeLabel: 'Главная',
    aboutLabel: 'О сайте',
    profileLabel: 'Информация',
    loginButton: 'Войти',
    logoutButton: 'Выйти',

    // Index
    usersTitle: 'Пользователи',

    // About
    aboutAlert: 'Этот проект создан, чтобы принять участие в конкурсе от команды Secretship',

    // Profile
    profileTitle: 'Информация о профиле',

    // Login
    loginTitle: 'Войти с помощью Telegram',
    loginButtonErrorLoad: 'Ошибка загрузки кнопки',
    loginOr: 'или',
    loginTitleButton: 'Войти через Telegram бота',

    // Not Found
    notFoundTitle: 'Страница не найдена',
    backToHome: 'На главную',

    // Errors
    unexpectedError: 'Произошла непредвиденная ошибка!',
    dbFetchError: 'Ошибка при запросе к базе данных!',
    offsetOrLimitInvalid: "Параметры 'offset' и 'limit' должны быть числами!",
    notAuthorised: 'Ошибка авторизаци. Попробуйте снова',
    sessionExpired: 'Ошибка авторизаци: сессия устарела. Попробуйте снова',
    errorLogOut: 'Ошибка при завершении сессии. Повторите попытку',

    //
    language: 'Язык',
    joinDate: 'На сайте с',
  },
  dateTimeFormat: {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
}

export default locale
