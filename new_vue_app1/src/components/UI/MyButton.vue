<template>
  <button class="button">
    <slot>
    </slot>
  </button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'my-button',
});
</script>

<style scoped>
  .button {
    display: block;
    background: none;
    border: 1px solid #008080;
    border-radius: 3px;
    padding: 10px 15px;
    color: #008080;
    cursor: pointer;
  }
</style>