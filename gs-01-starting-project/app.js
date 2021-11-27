Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '123',
    }
  },

  methods: {
    addGoal() {
      if (this.enteredValue.length > 0) {
        this.goals.push(this.enteredValue);
      }

      this.enteredValue = '';
    }
  }
}).mount('#app');
