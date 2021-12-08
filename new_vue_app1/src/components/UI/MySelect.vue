<template>
  <select
    :value="modelValue"
    @change="onUpdate"
  >
    <option value="" disabled>Choose a value</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'my-select',

  props: {
    modelValue: {
      type: String,
    },

    options: {
      type: Array,
      default: () => [],
    }
  },

  methods: {
    onUpdate(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
});
</script>

<style scoped>

</style>
