<template>
  <div class="app">
    <my-navbar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import MyNavbar from '@/components/UI/MyNavbar.vue';

export default defineComponent({
  components: {
    MyNavbar,
  },
})
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content {
    padding: 20px;
  }
</style>
