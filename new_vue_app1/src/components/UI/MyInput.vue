<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

  export default defineComponent({
    name: 'my-input',

    props: {
      modelValue: [String, Number],
    },

    methods: {
    }
  });
</script>

<style scoped>
  .input {
    width: 100%;
    border: 1px solid #008080;
    padding: 10px 15px;
  }
</style>
