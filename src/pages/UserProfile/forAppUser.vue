<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
           <router-link to="/users/statics" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Statics</router-link>
        <router-link to="/users/addAccount" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Add Account</router-link>
        <router-link to="/users/editAccount" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Edit Account</router-link>
         <router-link to="/users/deleteAccount" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Delete Account</router-link>
        <router-link to="/users/renewAccount" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Renew Account</router-link>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "App Users now ",
      members: [
        {
          image: require("@/assets/img/vue-logo.png"),
          name: "Audio Reports",
          status: "Click the link to show"
        },
        {
          image: require("@/assets/img/vue-logo.png"),
          name: "Video Reports",
          status: "Click the link to show"
        }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Offline":
          return "text-muted";
        case "Available":
          return "text-success";
        case "Busy":
          return "text-danger";
        default:
          return "text-success";
      }
    }
  }
};
</script>
<style>
</style>
