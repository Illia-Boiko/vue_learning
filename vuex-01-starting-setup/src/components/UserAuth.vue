<template>
  <button v-if="!userIsLogged" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'login',
        'logout',
      ]),
    },

    computed: {
      ...mapGetters([
        'userIsLogged',
      ])
    }
  }
</script>

<style scoped>
  button {
    border: 1px solid magenta;
    background-color: #cccccc4b;
    border-radius: 3px;
  }
</style>
