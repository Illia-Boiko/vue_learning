<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <button @click="onClick">Ok</button>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
      ok: true
    };
  },

  methods: {
    reloadTeam(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);

      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },

    onClick() {
      this.ok = !this.ok;
    }
  },

  created() {
    this.reloadTeam(this.teamId);
  },

  beforeRouteLeave(_, _2, next) {
    if (this.ok) {
      next();
    } else {
      const leave = confirm('?');
      console.log(leave);
      next(leave);
    }
  },

  watch: {
    teamId() {
      this.reloadTeam(this.teamId);
    },
  },

  beforeRouteEnter(_, _2, next) {
    next();
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>