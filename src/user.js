const DEFAULT_USERPIC = 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg'
const dateStringOptions = { year: 'numeric', month: 'long', day: 'numeric' }
function createUser ({
  user_id, 
  username,
  first_name,
  last_name,
  join_date,
  language_code,
  profile_photo_id
}) {
  let profilePic
  if (profile_photo_id) {
    profilePic = `/telegram-media/${profile_photo_id}`
  } else {
    profilePic = DEFAULT_USERPIC
  }
  return {
    user_id,
    username,
    first_name,
    last_name,
    language_code,
    join_date,
    profile_photo_id,
    profilePic,

    joinDateString() {
      const joinDate = new Date(this.join_date)
      try {
        return joinDate.toLocaleDateString(this.language_code, dateStringOptions)
      } catch (error) {
        try {
          const lang = navigator.language || navigator.userLanguage
          return joinDate.toLocaleDateString(lang, dateStringOptions)
        } catch (err) {
          return joinDate.toLocaleDateString('en-US', dateStringOptions)
        }
      }
    },
    telegramLink() {
      return `https://t.me/${this.username}`
    },
    logout() {
      Object.keys(this).forEach((prop) => {
        this[prop] = null
      })
    },
  }
}

export default {
  createUser,
}
