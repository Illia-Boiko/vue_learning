<template>
  <div
    class="modalWindow"
    v-if="isVisible"
    @click="hideModalWindow"
  >
    <div class="modalWindow__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import toggleMixin from '@/mixins/toggleMixin';

export default defineComponent({
  name: 'my-modal-window',

  mixins: [toggleMixin],

  methods: {
    hideModalWindow() {
      this.$emit('update:isVisible', false);
    }
  }
});
</script>

<style scoped>
  .modalWindow {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #220c0c1f;
  }

  .modalWindow__content {
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
    min-width: 500px;
    min-height: 200px;
    padding: 20px;
    border: 1px solid #008080;
  }
</style>