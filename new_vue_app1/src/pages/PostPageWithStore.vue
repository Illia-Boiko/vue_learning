<template>
  <div class="app">
    <h1>Posts page</h1>

    <my-input
      placeholder="Search by title"
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
    />

    <div class="app__buttons">
      <my-button @click="this.isModalWindowVisible = true;">
        Create new post
      </my-button>
      <my-select
        class="app__select"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>

    <div class="page__wrapper">
      <div
        v-for="page in totalPages"
        :key="page"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(page)"
      >
        {{ page }}
      </div>
    </div>

    <my-modal-window
      v-model:isVisible="isModalWindowVisible"
    >
      <post-form @create="createPost" />
    </my-modal-window>

    <list-of-posts
      :posts="getFilteredPosts"
      @remove="removePost"
      v-if="!isDataLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import ListOfPosts from '@/components/ListOfPosts.vue';
import { defineComponent } from '@vue/runtime-core';
import PostForm from '@/components/PostForm.vue';
import { IPost } from '@/types';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default defineComponent({
    name: "app",
    components: {
      PostForm,
      ListOfPosts,
      MyButton,
      MySelect,
    },

    data() {
      return {
        isModalWindowVisible: false,
      }
    },

    methods: {
      ...mapMutations({
        setPageNumber: 'setPageNumber',
        setSearchQuery: 'setSearchQuery',
        setSelectedSort: 'setSelectedSort',
        setPosts: 'setPosts',
      }),

      ...mapActions({
        fetchPosts: 'fetchPosts',
      }),

      createPost(post: IPost): void {
        this.setPosts([post, ...this.posts]);
        this.isModalWindowVisible = false;
      },

      removePost(post: IPost): void {
        this.setPosts(this.posts.filter((item: IPost) => item.id !== post.id));
      },

      changePage(numberOfPage: number) {
        this.setPageNumber(numberOfPage);
        this.fetchPosts();
      },
    },

    mounted() {
      this.fetchPosts();
    },

    computed: {
      ...mapState({
        posts: (state: any) => state.post.posts,
        isDataLoading: (state: any) => state.post.isDataLoading,
        selectedSort: (state: any) => state.post.selectedSort,
        sortOptions: (state: any) => state.post.sortOptions,
        searchQuery: (state: any) => state.post.searchQuery,
        pageNumber: (state: any) => state.post.pageNumber,
        limit: (state: any) => state.post.limit,
        totalPages: (state: any) => state.post.totalPages,
      }),

      ...mapGetters({
        getSortedPosts: 'getSortedPosts',
        getFilteredPosts: 'getFilteredPosts',
      })
    },
  });
</script>

<style>
  .app__buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  .app__select {
    display: block;
    background: none;
    border: 1px solid #008080;
    border-radius: 3px;
    padding: 10px 15px;
    color: #008080;
    cursor: pointer;
  }

  .page__wrapper {
    display: flex;
    gap: 1px;
    padding: 10px 0;
  }

  .page {
    border: 1px solid #008080;
    padding: 10px;
  }

  .current-page {
    background-color: #00808055;
  }
</style>
