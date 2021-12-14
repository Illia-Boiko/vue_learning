<template>
  <BaseDialog
    v-if="inputsIsValid"
    title="Invalid Input"
    @close="hideDialog"
  >
    <template #default>
      <p>Unfortunately, one of inputs is empty(</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus natus beatae omnis officiis ab distinctio esse provident sapiente ad!</p>
    </template>
    <template #menu>
      <BaseButton @click="hideDialog">Close</BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="resourceTitle">Title:</label>
        <input
          type="text"
          id="resourceTitle"
          placeholder="Please, enter the title"
          v-model="newResource.title"
        >
      </div>

      <div class="form-control">
        <label for="resourceDescription">Description:</label>
        <textarea
          id="resourceDescription"
          placeholder="Please, enter the description"
          rows="3"
          v-model="newResource.description"
       ></textarea>
      </div>

      <div class="form-control">
        <label for="resourceLink">Link:</label>
        <input
          type="text"
          id="resourceLink"
          placeholder="Please, enter the link"
          v-model="newResource.link"
        >
      </div>
      <div class="form-control">
        <BaseButton
          type="submit"
        >
          Add Resource
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
  export default {
    data() {
      return {
        newResource: {
          id: 0,
          title: '',
          description: '',
          link: '',
        },

        inputsIsValid: false,
      };
    },

    inject: ['addNewResource'],

    methods: {
      resetForm() {
        this.newResource = {
          id: 0,
          title: '',
          description: '',
          link: '',
        };
      },
  
      onSubmit() {
        this.newResource.id = Date.now();
        if (this.isFormFilled) {
          this.addNewResource(this.newResource);
          this.resetForm();
        } else {
          this.inputsIsValid = true;
        }
      },

      hideDialog() {
        this.inputsIsValid = false;
      },
    },

    computed: {
      isFormFilled() {
        return (
          !!this.newResource.title.trim()
          || !!this.newResource.description.trim()
          || !!this.newResource.link.trim()
        );
      },
    }
  }
</script>

<style scoped>
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    resize: none;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }

  .form-control {
    margin: 1rem 0;
  }
</style>
