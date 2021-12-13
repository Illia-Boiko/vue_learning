<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoal #default="slotProps">
      <h2 @click="log(slotProps)">{{ slotProps.item }}</h2>
    </CourseGoal>
    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import UserInfo from '@/components/UserInfo.vue';
import BadgeList from '@/components/BadgeList.vue';
import CourseGoal from '@/components/CourseGoal.vue';
import ActiveGoals from '@/components/ActiveGoals.vue';
import ManageGoals from '@/components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    CourseGoal,
    ManageGoals,
    ActiveGoals,
  },

  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>