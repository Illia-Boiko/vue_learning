const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Kazkoviy',
      vueLink: 'https://webtricks-master.ru/react-hooks/uchim-usememo-na-primerah/',
    };
  },

  methods: {
    outputGoal() {
      if (Math.random() < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      };
    },
  }
});

app.mount('#user-goal');