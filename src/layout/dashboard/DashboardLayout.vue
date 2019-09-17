<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/home" name="HOME PAGE" icon="ti-home"/>
        <sidebar-link to="/users/statics" name="APP Users" icon="ti-user"/>
        <sidebar-link to="/messages" name="MESSAGES &amp; PICS" icon="ti-view-list-alt"/>
        <sidebar-link to="/typography/audioRepo" name="AUDIO &amp; Videos" icon="ti-video-clapper"/>
        <sidebar-link to="/notify" name="SEND NOTIFICATIONS" icon="ti-bell"/>
        <sidebar-link to="/communications" name="Communications" icon="ti-pencil-alt2"/>
        <sidebar-link to="/pricePlans" name="PRICE PLANS" icon="ti-map"/>
        <sidebar-link to="/settings" name="SETTINGS" icon="ti-settings"/>
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
