const DEFAULT_USERPIC = 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg'


function createUser ({
  user_id, 
  username,
  first_name,
  last_name,
  join_date,
  photo_url,
  language_code,
  profile_photo_id
}) {
  return {
    user_id,
    username,
    first_name,
    last_name,
    language_code,
    join_date,
    profile_photo_id,
    photo_url,

    hasAvatar() {
      return Boolean(this.profile_photo_id || this.photo_url)
    },
    getProfilePic() {
      if (this.profile_photo_id) {
        return `http://localhost:3001/telegram-media/${this.profile_photo_id}`
        // return `/telegram-media/${this.profile_photo_id}`
      }
      if (this.photo_url) {
        return this.photo_url
      }
      return DEFAULT_USERPIC
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
