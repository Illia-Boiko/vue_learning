<template>
  <div class="app">
    <h1>Posts page</h1>
    <my-input
      placeholder="Search by title"
      v-model="searchQuery"
    />

    <div class="app__buttons">
      <my-button @click="this.isModalWindowVisible = true;">
        Create new post
      </my-button>
      <my-select
        class="app__select"
        v-model="selectedSort"
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
import {
  defineComponent,
  // watch,
} from '@vue/runtime-core';
import PostForm from '@/components/PostForm.vue';
import { IPost } from '@/types';
import axios from 'axios';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';

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
        posts: [{id: 0, title: '', body: ''}],
        isModalWindowVisible: false,
        isDataLoading: false,
        selectedSort: '',
        sortOptions: [
          { value: 'title', name: 'Sort by title' },
          { value: 'body', name: 'Sort by body' },
          { value: 'time', name: 'Sort by newest' },
        ],
        searchQuery: '',
        pageNumber: 1,
        limit: 10,
        totalPages: 0,
      }
    },

    methods: {
      createPost(post: IPost): void {
        this.posts = [post, ...this.posts];
        this.isModalWindowVisible = false;
      },

      removePost(post: IPost): void {
        this.posts = this.posts.filter((item: IPost) => item.id !== post.id);
      },

      async fetchPosts() {
        try {
          this.isDataLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.pageNumber,
              _limit: this.limit,
            }
          });
          this.posts = response.data;
          this.totalPages = Math.ceil(+response.headers['x-total-count'] / this.limit);
        } catch(error) {
          this.posts = [];
          alert(`${error}`);
        } finally {
          this.isDataLoading = false;
        }
      },

      changePage(numberOfPage: number) {
        this.pageNumber = numberOfPage;
        // this.fetchPosts();
      },
    },

    mounted() {
      this.fetchPosts();
    },

    computed: {
      getSortedPosts(): IPost[] {
        if (this.selectedSort === 'title') {
          return [...this.posts].sort((a, b) => a.title.localeCompare(b.title));
        } else if (this.selectedSort === 'body') {
          return [...this.posts].sort((a, b) => a.body.localeCompare(b.body));
        } else if (this.selectedSort === 'time') {
          return [...this.posts].sort((a, b) => b.id - a.id);
        }

        return this.posts;
      },

      getFilteredPosts(): IPost[] {
        return this.getSortedPosts
        .filter((el: IPost) => el.title
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase()));
      },
    },

    // watch: {
    //   selectedSort(newValue: 'title' | 'body') {
    //     this.posts.sort((a: IPost, b: IPost) => a[newValue].localeCompare(b[newValue]));
    //   },
    // },
    watch: {
      pageNumber() {
        this.fetchPosts();
      },
    }
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
