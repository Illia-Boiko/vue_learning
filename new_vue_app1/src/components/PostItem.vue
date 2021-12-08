<template>
  <div class="post">
    <div>
      <div>
        <strong>Name: </strong>
        {{ post.title }}
      </div>
      <div>
        <strong>Description:</strong>
        {{ post.body }}
      </div>
    </div>
    <div class="post__buttons">
      <my-button
        @click="$emit('remove', post)"
      >
        Delete
      </my-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'post-item',

  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  emits: ['remove'],
});
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid #008080;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
