<template>
  <div>
    <h2>Manage Goals</h2>
    <input v-model="newGoal" type="text">
    <button @click="setGoal">Set Goal</button>
  </div>
  <teleport to="#app">
    <ErrorAlert v-if="isDialogVisible">
      <h2>Error</h2>
      <p>Please, enter the value</p>
      <button @click="hideDialog">Okay</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
  import ErrorAlert from '@/components/ErrorAlert.vue';

  export default {
    components: {
      ErrorAlert,
    },

    data() {
      return {
        newGoal: '',
        isDialogVisible: false,
      }
    },

    methods: {
      setGoal() {
        if (this.newGoal === '') {
          this.isDialogVisible = true;
        }
      },

      hideDialog() {
        this.isDialogVisible = false;
      },
    },

    mounted() {
      console.log('Alive');
    }
  }
</script>
