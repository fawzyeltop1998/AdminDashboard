<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            <img v-if="loading" src="../assets/img/loading.gif" style="height: 50px"/>            
            <span v-else>{{stats.value}} </span>  
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>
   <!--Stats cards-->

   <!-- Table-List-here -->
    <div class="row">
      <div class="col-12">
        <TableList></TableList>
      </div>
    </div>
    <!-- Table-List-here -->
    

  </div>
</template>
<script>
import { StatsCard } from "@/components/index";
import TableList from './TableList.vue';
import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    TableList
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      info: null,
      number: 50,
      loading: true,
      royal: 'There are lots of things now',
      statsCards: [
        {
          type: "warning",
          icon: "ti-server",
          title: "Users",
          value: null,
          footerText: "Number of users",
          footerIcon: "ti-server"
        },
        {
          type: "success",
          icon: "ti-money",
          title: "Conversations",
          value: null,
          footerText: "Number of sales",
          footerIcon: "ti-money"
        },
        {
          type: "danger",
          icon: "ti-text",
          title: "Messages",
          value: null,
          footerText: "Number of messages",
          footerIcon: "ti-text"
        },
        {
          type: "info",
          icon: "ti-video-camera",
          title: "Video Calls",
          value: null,
          footerText: "Number of video calls",
          footerIcon: "ti-video-camera"
        },
        {
          type: "info",
          icon: "ti-headphone",
          title: "Audio Calls",
          value: null,
          footerText: "Number of Audio calls",
          footerIcon: "ti-headphone"
        },
        {
          type: "info",
          icon: "ti-pencil-alt2",
          title: "Families",
          value: null,
          footerText: "Number of reports  ",
          footerIcon: "ti-reload"
        },
        {
          type: "info",
          icon: "ti-twitter-alt",
          title: "Codes",
          value: null,
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "info",
          icon: "ti-twitter-alt",
          title: "Plans",
          value: null,
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ]
    }
  },
  mounted () {
    this.$http.get('https://api-hodhod.herokuapp.com/admins/statistics')
      .then(response => {
        this.statsCards[0].value = response.data.users
        this.statsCards[1].value = response.data.conversations
        this.statsCards[2].value = response.data.messages
        this.statsCards[3].value = response.data.calls
        this.statsCards[4].value = response.data.calls
        this.statsCards[5].value = response.data.families
        this.statsCards[6].value = response.data.codes
        this.statsCards[7].value = response.data.plans
        this.loading = false;
      });
  }
}

</script>
<style>
</style>
