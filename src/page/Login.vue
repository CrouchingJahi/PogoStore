<template>
  <div>
    <form v-if="ident" v-on:submit="logout">
      <p>You are already logged in.</p>
      <button>Logout</button>
    </form>
    <form v-if="!ident" v-on:submit="login">
      <p>Please login.</p>
      <input v-model="pword" v-bind:class="{ error }"
        placeholder="Password" type="password"
        v-on:change="onchange"
      >
      <button>Login</button>
      <p class="error" v-if="error">{{error}}</p>
    </form>
  </div>
</template>
<script>
import { auth } from 'firebase'

export default {
  name: 'LoginPage',
  data: () => {
    return {
      ident: auth().currentUser,
      email: 'crouching.jahi@gmail.com',
      pword: '',
      error: '',
      logging: false
    }
  },
  methods: {
    onchange: function(e) {
      this.error = ''
    },
    login: function(e) {
      e.preventDefault()
      if (!this.pword) {
        this.error = "Enter a password."
      }
      else {
        this.logging = true
        auth().signInWithEmailAndPassword(this.email, this.pword)
          .then(result => {
            this.logging = false
            this.ident = auth().currentUser
            this.$router.push('/')
          })
          .catch(err => {
            this.logging = false
            console.log(err)
            this.error = err.message
          })
      }
    },
    logout: function(e) {
      e.preventDefault()
      auth().signOut()
    }
  }
}
</script>
