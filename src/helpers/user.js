import joinDateString from './join-date'

const DEFAULT_USERPIC = 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg'

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
    profilePic = `http://localhost:3001/telegram-media/${profile_photo_id}`
    // profilePic = `/telegram-media/${profile_photo_id}`
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
      return joinDateString(this)
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

export default createUser
