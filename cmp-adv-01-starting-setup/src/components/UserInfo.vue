<template>
  <BaseCard>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: {
    BaseCard,
  },

  props: ['fullName', 'infoText', 'role'],
};
</script>
