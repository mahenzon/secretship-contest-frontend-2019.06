const dateStringOptions = { year: 'numeric', month: 'long', day: 'numeric' }

function joinDateString({ join_date, language_code }) {
  const joinDate = new Date(join_date)
  try {
    return joinDate.toLocaleDateString(languageCode, dateStringOptions)
  } catch (error) {
    try {
      const lang = navigator.language || navigator.userLanguage
      return joinDate.toLocaleDateString(lang, dateStringOptions)
    } catch (err) {
      return joinDate.toLocaleDateString('en-US', dateStringOptions)
    }
  }
}

module.exports = joinDateString
