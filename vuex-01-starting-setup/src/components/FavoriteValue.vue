<template>
  <h3>{{ normalizeCount }}</h3>
  <p>We do more...</p>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters('counter', [
        'finalCount',
        'normalizeCount',
      ]),
    },
  }
</script>
