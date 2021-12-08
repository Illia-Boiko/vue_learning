<template>
  <div v-if="posts.length">
    <h3>List</h3>

  <transition-group name="list">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </transition-group>
  </div>

  <h3 v-else>
    List of posts is empty
  </h3>
</template>

<script lang="ts">
import PostItem from '@/components/PostItem.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: { PostItem },
  name: 'list-of-posts',

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  emits: ['remove'],
});

</script>

<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s ease;
  }
  .list-enter-from {
    opacity: 0;
    transform: translateX(-50%);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateX(50%);
  }

  .list-move {
    transition: transform 0.3s ease;
  }
</style>
