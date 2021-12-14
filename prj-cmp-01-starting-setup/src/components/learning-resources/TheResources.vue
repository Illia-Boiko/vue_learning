<template>
  <BaseCard>
    <BaseButton 
      @click="setSelectedTab('StoredResources')"
      :mode="selectedTab === 'StoredResources' ? '' : 'flat'"
    >
      Stored Resources
    </BaseButton>
    <BaseButton 
      @click="setSelectedTab('AddResource')"
      :mode="selectedTab === 'AddResource' ? '' : 'flat'"
    >
      Add Resource
    </BaseButton>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </BaseCard>
</template>

<script>
  import StoredResources from '@/components/learning-resources/StoredResources.vue';
  import AddResource from '@/components/learning-resources/AddResource.vue';

  export default {
    components: {
      StoredResources,
      AddResource,
    },

    data() {
      return {
        selectedTab: 'StoredResources',
        storedResources: [
          {
            id: 'official-guide',
            title: 'Official Vue.js Guide',
            description: 'The official Vue.js documentation!',
            link: 'https://vuejs.org',
          },
          {
            id: 'google',
            title: 'Google',
            description: 'Learn all with Google!',
            link: 'https://google.org',
          },
        ],
      };
    },

    provide() {
      return {
        'storedResources': this.storedResources,
        'addNewResource': this.pushNewResource,
        'deleteResource': this.deleteResource,
      }
    },

    methods: {
      setSelectedTab(componentName) {
        this.selectedTab = componentName;
      },

      pushNewResource(resource) {
        this.storedResources.unshift(resource);
        this.selectedTab = 'StoredResources';
      },

      deleteResource(id) {
        const index = this.storedResources.findIndex(el => el.id === id);
        this.storedResources.splice(index, 1);
      }
    },
  }
</script>

<style scoped>

</style>
