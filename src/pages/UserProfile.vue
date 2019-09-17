<template>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <forAppUser></forAppUser>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">
        <transition class="view">
          <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<script>
import forAppUser from "./UserProfile/forAppUser.vue";
export default {
  components: {
    forAppUser
  }
};
</script>
<style>
.view-enter {
  opacity: 0;
}
.view-enter-to {
  opacity: 1;
}
.view-enter-active {
  transition: all 0.5s ease-in-out;
}
</style>
