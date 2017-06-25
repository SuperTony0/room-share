<template>
    <div>
        <div>
            Hi I am your login screen
        </div>
        <img src="../assets/logo.png">
        <h1></h1>
        <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
            Sign in with Facebook
        </fb-signin-button>
    </div>
</template>

<script>
import router from '../router/index.js'
export default {
    name: 'login',
    data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes,user_events,user_friends',
        return_scopes: true
      },
    }
  },
  methods: {
    getMyEvents () {
      FB.api(
        "/me",
        function (response) {
          router.push('Dashboard')
        }
      )
    },
    onSignInSuccess (response) {
      this.getMyEvents();
      
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
</style>