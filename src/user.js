const dateStringOptions = { year: 'numeric', month: 'long', day: 'numeric' }
function createUser ({ user_id, username, first_name, last_name, join_date, language_code }) {
  return {
    user_id,
    username,
    first_name,
    last_name,
    language_code,
    join_date,
    
    profilePic: null,
    joinDateString() {
      const joinDate = new Date(this.join_date)
      try {
        return joinDate.toLocaleDateString(this.language_code, dateStringOptions)
      } catch (error) {
        try {
          const lang = navigator.language || navigator.userLanguage
          return joinDate.toLocaleDateString(lang, dateStringOptions)
        } catch (error) {
          return joinDate.toLocaleDateString('en-US', dateStringOptions)
        }
      }
    },
    telegramLink() {
      return `https://t.me/${this.username}`
    },
    logout() {
      for (const prop of Object.keys(this)) {
        this[prop] = null
      }
    },
  }
}

export default {
  createUser,
}

