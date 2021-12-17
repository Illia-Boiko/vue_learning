<template>
  <h3>{{ finalCount }}</h3>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('counter', [
        'finalCount',
        'normalizeCount',
      ]),
    },
  }
</script>
