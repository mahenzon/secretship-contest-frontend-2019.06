<template lang="pug">
  div
    h3 Users:
    #users-list
      div.my-3(v-bind:key="user.user_id" v-for="user in allUsers")
        ListUser(v-bind:user="user" v-bind:userInfo="userInfo")
</template>

<script>
import axios from 'axios';
import ListUser from './ListUser'
import createUser from '../helpers/user'

export default {
  name: 'UsersList',
  props: ['userInfo'],
  components: {
    ListUser,
  },
  data() {
    return {
      nowFetching: false,
      totalUsersAvailable: 100,  // make > than allUsers lenth to allow first fetch
      allUsers: [],
      usersIds: new Set(),
    }
  },
  created() {
    this.loadMoreUsers()
  },
  mounted() {
    const elem = document.getElementById('users-list')
    elem.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Donno why JS cannot get this element
    // const elem = document.getElementById('users-list')
    // elem.removeEventListener('scroll', this.handleScroll);
    // console.log('scrolling Destroyed');
  },
  methods: {
    handleScroll: function(e) {
      const { scrollTop, clientHeight, scrollHeight } = document.getElementById('users-list')
      if (scrollTop + clientHeight + 42 >= scrollHeight) {
        this.loadMoreUsers()
      }
    },
    async loadMoreUsers() {
      if (this.nowFetching || (this.allUsers.length >= this.totalUsersAvailable)) return
      this.nowFetching = true
      try {
        const url = '/api/users'
        // const url = 'http://localhost:3001/api/users'
        const params = { offset: this.allUsers.length, limit: 25 }
        const response = await axios.get(url, { params })
        const { users, total } = response.data
        this.totalUsersAvailable = total
        this.addUsersSafe(users)
      } catch (error) {
        console.log(error)
      }
      this.nowFetching = false
    },
    addUsersSafe(users) {
      users.forEach((element) => {
        if (this.usersIds.has(element.user_id)) return
        this.allUsers.push(createUser(element))
      })
    },
  } 
}
</script>

<style scoped>
  #users-list {
    height: 80vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>

