<template>
  <button @click="increment">ADD 1</button>
  <button @click="decrement({value: 10})">DEC 1</button>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('counter', [
        'increment',
        'decrement',
      ]),
    },
  };
</script>