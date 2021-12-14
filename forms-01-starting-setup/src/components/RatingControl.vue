<template>
  <ul>
    <li><button :class="{active: modelValue === 'poor'}" @click="activate('poor')" type="button">Poor</button></li>
    <li><button :class="{active: modelValue === 'average'}" @click="activate('average')" type="button">Average</button></li>
    <li><button :class="{active: modelValue === 'great'}" @click="activate('great')" type="button">Great</button></li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  methods: {
    activate(option) {
      this.$emit('update:modelValue', option)
    },
  }
}
</script>

<style scoped>
  .active {
    border: 1px solid magenta;
  }

  button.active {
    color: magenta;
  }

  button:active {
    background-color: red;
  }

  ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>
