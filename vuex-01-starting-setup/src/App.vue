<template>
  <BaseContainer title="Vuex" v-if="userIsLogged">
    <TheCounter />
    <FavoriteValue />
    <button @click="addOne">ADD 1</button>
    <ChangeCounter />
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth />
  </BaseContainer>
</template>

<script>
import BaseContainer from '@/components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter.vue';
import ChangeCounter from '@/components/ChangeCounter.vue';
import FavoriteValue from '@/components/FavoriteValue.vue';
import UserAuth from '@/components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addOne() {
      this.$store.dispatch('counter/increment');
    },
  },

  computed: {
    ...mapGetters([
      'userIsLogged',
    ])
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }

  button {
    border: 1px solid green;
    background-color: #cccccc4b;
    border-radius: 3px;
  }
</style>