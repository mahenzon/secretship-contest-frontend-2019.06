const locale = {
  strings: {
    // navbar
    homeLabel: 'Home',
    aboutLabel: 'About',
    profileLabel: 'Profile info',
    loginButton: 'Login',
    logoutButton: 'Logout',

    // Index
    usersTitle: 'Users:',

    // About
    aboutAlert: 'This project is created to participate in this Secretship Contest',

    // Profile
    profileTitle: 'Profile info',

    // Login
    loginTitle: 'You have two blue pills',
    loginButtonErrorLoad: 'Error loading button',
    loginOr: 'or',
    loginTitleButton: 'Login via Telegram Bot',

    // Not Found
    notFoundTitle: 'Page not found',
    backToHome: 'Home',

    // Errors
    unexpectedError: 'Unexpected error!',
    dbFetchError: 'Error fetching database!',
    offsetOrLimitInvalid: "Both 'offset' and 'limit' params have to be numeric!",
    notAuthorised: 'Not authorized',
    sessionExpired: 'Session expired. Please try again',
    errorLogOut: 'Error logging you out. Please try again',

    //
    language: 'Language',
    joinDate: 'Join date:',
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
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
}

export default locale
