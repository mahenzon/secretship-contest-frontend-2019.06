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
  return {
    user_id,
    username,
    first_name,
    last_name,
    language_code,
    join_date,
    profile_photo_id,
    
    
    profilePic: 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg',
    loadProfilePic () {
      if (this.profile_photo_id) {
        this.getProfilePicURL()
      }
    },
    getProfilePicURL() {
      this.profilePic = 'https://ippcdn-ippawards.netdna-ssl.com/wp-content/uploads/2018/07/34-1st-PANORAMA-Mateusz-Piesiak-1.jpg'
      // TODO: get photo by id
      // get, then set
      // this.profilePic = 'https://qwe.123/img'
    },
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

