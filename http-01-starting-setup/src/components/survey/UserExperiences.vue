<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="errorMessage.length > 0">{{ errorMessage }}</p>
      <p v-else-if="!isLoading && (results.length === 0 || !results)">Response is empty... Please, add one or more surveys.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: '',
    };
  },

  methods: {
    async getExperiences() {
      try {
        this.errorMessage = '';
        this.isLoading = true;
        const responseArray = [];

        const response = await fetch('https://vue-http-demo-88-default-rtdb.europe-west1.firebasedatabase.app/players.json');
        
        if (response.ok && response.status === 200) {
          const data = await response.json();

          for (const id in data) {
            responseArray.push({ id: id, name: data[id].name, rating: data[id].rating });
          }

          this.results = responseArray.reverse();
        } else {
          this.errorMessage = `Error with ${response.status} code!`;
        }
      } catch (error) {
        this.errorMessage = `${error}`;
      } finally {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.getExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>