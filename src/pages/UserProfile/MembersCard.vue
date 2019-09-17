<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
        <router-link to="/typography/audioRepo" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Audio Reports</router-link>
        <router-link to="/typography/videoRepo" style="display: block; text-align: center; font-size: 20px; margin-bottom: 10px">Video Reports</router-link>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "Audio & Video Reports",
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
