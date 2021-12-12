const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Learn vue!',
      vueLink: 'https://google.com',
    }
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    }
  }
});

app.mount('#user-goal');