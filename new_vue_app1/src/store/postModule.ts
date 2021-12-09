import { IPost } from "@/types";
import axios from 'axios';

export const postModule = {
  state: () => ({
    posts: [{id: 0, title: '', body: ''}],
    isDataLoading: false,
    // isModalWindowVisible: false,
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
  }),

  getters: {
    getSortedPosts(state: { selectedSort: string; posts: IPost[]; }): IPost[] {
      if (state.selectedSort === 'title') {
        return [...state.posts].sort((a, b) => a.title.localeCompare(b.title));
      } else if (state.selectedSort === 'body') {
        return [...state.posts].sort((a, b) => a.body.localeCompare(b.body));
      } else if (state.selectedSort === 'time') {
        return [...state.posts].sort((a, b) => b.id - a.id);
      }

      return state.posts;
    },

    getFilteredPosts(state: { searchQuery: string; }, getters: { getSortedPosts: any[]; }): IPost[] {
      return getters.getSortedPosts
      .filter((el: IPost) => el.title
      .toLowerCase()
      .includes(state.searchQuery.toLowerCase()));
    },
  },

  mutations: {
    setPosts(state: { posts: IPost[]; }, posts: IPost[]) {
      state.posts = posts;
    },

    setIsDataLoading(state: any, bool: boolean) {
      state.isDataLoading = bool;
    },

    setSelectedSort(state: any, str: string) {
      state.selectedSort = str;
    },

    setSortOptions(state: any, opt: {name: string, value: string}[]) {
      state.sortOptions = opt;
    },

    setSearchQuery(state: any, str: string) {
      state.searchQuery = str;
    },

    setPageNumber(state: any, num: number) {
      state.pageNumber = num;
    },

    setTotalPages(state: any, num: number) {
      state.totalPages = num;
    },
  },

  actions: {
    async fetchPosts(actions: any) {
      const { state, commit } = actions;

      try {
        commit('setIsDataLoading', true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.pageNumber,
            _limit: state.limit,
          }
        });
        commit('setPosts', response.data);
        commit('setTotalPages', Math.ceil(+response.headers['x-total-count'] / state.limit))
      } catch(error) {
        commit('setPosts', []);
        alert(`${error}`);
      } finally {
        commit('setIsDataLoading', false);
      }
    },
  },

  namespace: true,
}
