<template>
  <form
    class="newPostForm"
    @submit.prevent="createPost"
  >
    <h2>Create new post</h2>
    <my-input
      placeholder="Title"
      v-model="post.title"
    />
    <my-input
      placeholder="Body"
      v-model="post.body"
    />
    <my-button
      type="submit"
      style="align-self: flex-end"
    >
      Create
    </my-button>
  </form>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },

  name: 'post-form',

  methods: {
    clearPost() {
      this.post = {
        title: '',
        body: '',
      }
    },

    createPost() { 
      const { post } = this;

      if (post.title.length > 0 && post.body.length > 0) {
        post.id = Date.now();
        this.$emit('create', post);
        this.clearPost();
      }
    },
  }
});
</script>

<style scoped>
  .newPostForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
