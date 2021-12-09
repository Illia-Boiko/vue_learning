<template>
  <div class="navbar">
    <span class="logo" @click="$router.push('/')">
      Vue.js
    </span>
    <div class="navbar__buttons">
      <my-button @click="$router.push('/posts')">
        Posts
      </my-button>
      <my-button @click="$router.push('/store')">
        Store
      </my-button>
      <router-link
        to="/about"
        class="link"
      >
        <my-button>
          About
        </my-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'my-navbar',
})
</script>

<style scoped>
  .navbar {
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #020202;
    box-shadow: 2px 2px 4px black;
    border-radius: 0 0 3px 3px;
  }

  .navbar__buttons {
    display: flex;
    gap: 20px;
  }

  .link {
    text-decoration: none;
  }

  .logo {
    font-size: 20px;
    color: #008080;
    cursor: pointer;
  }
</style>
