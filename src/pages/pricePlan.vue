<template>
    <div class="pricePlan">
       <div class="pricing pricing-for-HodHod container-fluid p-5 bg-white rounded-lg shadow" id="pricing-for-HodHod">
<div class="myContent-Special-For-Pricing">
<div class="pricing" style="background-color: #FFF; box-shadow: 0 15px 20px #cacaca" v-scroll-reveal.reset="{ distance: '150px', origin: 'left', duration: 2000, scale: 0.5, opacity: 0.5, rotate: {x: 30, y: 30, z: 30} }">
<div class="pricing-content text-center text-dark">
<div class="image text-center">
<img src="../assets/img/vue-logo.png" style="height: 85px"/>
</div>
<h4 style="color: #555" v-for="data in forStarter">{{data.name}}</h4>
<p style="color: #888" v-for="data in forStarter">{{data.description}}</p>
<ul class="pricing-features text-left" id="pricing-features" style="color: #888; border-bottom: 1px solid rgb(183, 212, 255); padding-bottom: 10px;">
<li class="list-item" id="list-item1" v-for="data in forPremium">
<span class="word ml-2">{{data.features[0]}}</span>
<span class="icon"><i class="fas fa-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item2" v-for="data in forPremium">
<span class="word ml-2">{{data.features[1]}}</span>
<span class="icon"><i class="fas fa-volume-up"></i></span>
</li>
<li class="list-item mt-2" id="list-item3" v-for="data in forPremium" style="text-decoration: line-through">
<span class="word ml-2">{{data.features[2]}}</span>
<span class="icon"><i class="fas fa-headset"></i></span>
</li>
<li class="list-item mt-2" id="list-item4" v-for="data in forPremium">
<span class="word ml-2">{{data.features[3]}}</span>
<span class="icon"><i class="far fa-image"></i></span>
</li>
<li class="list-item mt-2" id="list-item5" v-for="data in forPremium">
<span class="word ml-2">{{data.features[4]}}</span>
<span class="icon"><i class="fas fa-photo-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item6" v-for="data in forPremium">
<span class="word ml-2">{{data.features[5]}}</span>
<span class="icon"><i class="fas fa-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item6" v-for="data in forPremium">
<span class="word ml-2">{{data.features[6]}}</span>
<span class="icon"><i class="fas fa-file-invoice"></i></span>
</li>
</ul>
<div class="info-about-pricing text-center d-flex justify-content-around">
<h6 class="salary" style="color: #888">
<span class="price">Price: </span>
<span class="price-actual" v-for="data in forStarter">{{data.price}} <i class="fas fa-dollar-sign"></i></span>
</h6>
<h6 class="salary" style="color: #888">
<span class="price">Users: </span>
<span class="price-actual" v-for="data in forStarter">{{data.numberOfUsers}} <i class="fas fa-users"></i></span>
</h6>
<h6 class="salary" style="color: #888">
<span class="price">Dur: </span>
<span class="price-actual" v-for="data in forStarter">{{data.duration}} <i class="far fa-clock"></i></span>
</h6>
</div>
<div class="text-center mt-1">
<button type='button' class='btn btn-success' style="padding: 12px 20px; background-color: rgb(91, 113, 236); border-radius: 20px; box-shadow: 0 0 5px #262f65; border: none;">GET STARTED <i class="fas fa-play"></i></button>
</div>
</div>
</div>
<div class="pricing" v-scroll-reveal.reset="{ distance: '150px', origin: 'top', duration: 2000, scale: 0.5, opacity: 0.5, rotate: {x: 30, y: 30, z: 30} }">
<div class="pricing-content text-center text-white">
<div class="image text-center">
<img src="../assets/img/vue-logo.png" style="height: 85px"/>
</div>
<h4 style="color: rgb(183, 212, 255)" v-for="data in forPremium">{{data.name}}</h4>
<p style="color: rgb(160, 198, 253)" v-for="data in forPremium">{{'You can generate codes up to 30 users. No live streaming. ' + data.description}}</p>
<ul class="pricing-features text-left" id="pricing-features" style="color: rgb(160, 198, 253); border-bottom: 1px solid rgb(183, 212, 255); padding-bottom: 10px;">
<li class="list-item" id="list-item1" v-for="data in forPremium">
<span class="word ml-2">{{data.features[0]}}</span>
<span class="icon"><i class="fas fa-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item2" v-for="data in forPremium">
<span class="word ml-2">{{data.features[1]}}</span>
<span class="icon"><i class="fas fa-volume-up"></i></span>
</li>
<li class="list-item mt-2" id="list-item3" v-for="data in forPremium">
<span class="word ml-2">{{data.features[2]}}</span>
<span class="icon"><i class="fas fa-headset"></i></span>
</li>
<li class="list-item mt-2" id="list-item4" v-for="data in forPremium">
<span class="word ml-2">{{data.features[3]}}</span>
<span class="icon"><i class="far fa-image"></i></span>
</li>
<li class="list-item mt-2" id="list-item5" v-for="data in forPremium">
<span class="word ml-2">{{data.features[4]}}</span>
<span class="icon"><i class="fas fa-photo-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item6" v-for="data in forPremium">
<span class="word ml-2">{{data.features[5]}}</span>
<span class="icon"><i class="fas fa-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item6" v-for="data in forPremium">
<span class="word ml-2">{{data.features[6]}}</span>
<span class="icon"><i class="fas fa-file-invoice"></i></span>
</li>
</ul>
<div class="info-about-pricing text-center d-flex justify-content-around">
<h6 class="salary" style="color: rgb(183, 212, 255)">
<span class="price">Price: </span>
<span class="price-actual" v-for="data in forPremium">{{data.price}} <i class="fas fa-dollar-sign"></i></span>
</h6>
<h6 class="salary" style="color: rgb(183, 212, 255)">
<span class="price">Users: </span>
<span class="price-actual" v-for="data in forPremium">{{data.numberOfUsers}} <i class="fas fa-users"></i></span>
</h6>
<h6 class="salary" style="color: rgb(183, 212, 255)">
<span class="price">Dur: </span>
<span class="price-actual" v-for="data in forPremium">{{data.duration}} <i class="far fa-clock"></i></span>
</h6>
</div>
<div class="text-center mt-1">
<button type='button' class='btn btn-success' style="padding: 12px 20px; background-color: rgb(52, 86, 138); border-radius: 20px; box-shadow: rgb(57, 109, 187) 0px 0px 5px; border: none;">GET STARTED <i class="fas fa-play"></i></button>
</div>
</div>
</div>
<div class="pricing" style="background-color: #627AFE; box-shadow: 0 15px 20px #a7b5ff" v-scroll-reveal.reset="{ distance: '150px', origin: 'right', duration: 2000, scale: 0.5, opacity: 0.5, rotate: {x: 30, y: 30, z: 30} }">
<div class="pricing-content text-center text-dark">
<div class="image text-center">
<img src="../assets/img/vue-logo.png" style="height: 85px"/>
</div>
<h4 style="color: rgb(230, 234, 255)" v-for="data in forBasic">{{data.name}}</h4>
<p style="color: rgb(230, 234, 255)" v-for="data in forBasic">{{'You can generate codes up to 30 users. No live streaming. ' + data.description}}</p>
<ul class="pricing-features text-left" id="pricing-features" style="color: rgb(230, 234, 255); border-bottom: 1px solid rgb(183, 212, 255); padding-bottom: 10px;">
<li class="list-item" id="list-item1" v-for="data in forBasic">
<span class="word ml-2">{{data.features[0]}}</span>
<span class="icon"><i class="fas fa-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item2" v-for="data in forBasic">
<span class="word ml-2">{{data.features[1]}}</span>
<span class="icon"><i class="fas fa-volume-up"></i></span>
</li>
<li class="list-item mt-2" id="list-item3" v-for="data in forBasic">
<span class="word ml-2">{{data.features[2]}}</span>
<span class="icon"><i class="fas fa-headset"></i></span>
</li>
<li class="list-item mt-2" id="list-item4" v-for="data in forBasic">
<span class="word ml-2">{{data.features[3]}}</span>
<span class="icon"><i class="far fa-image"></i></span>
</li>
<li class="list-item mt-2" id="list-item5" v-for="data in forBasic">
<span class="word ml-2">{{data.features[4]}}</span>
<span class="icon"><i class="fas fa-photo-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item6" v-for="data in forBasic">
<span class="word ml-2">{{data.features[5]}}</span>
<span class="icon"><i class="fas fa-video"></i></span>
</li>
<li class="list-item mt-2" id="list-item6" v-for="data in forBasic">
<span class="word ml-2">{{data.features[6]}}</span>
<span class="icon"><i class="fas fa-file-invoice"></i></span>
</li>
</ul>
<div class="info-about-pricing text-center d-flex justify-content-around">
<h6 class="salary" style="color: rgb(230, 234, 255)">
<span class="price">Price: </span>
<span class="price-actual" v-for="data in forBasic">{{data.price}} <i class="fas fa-dollar-sign"></i></span>
</h6>
<h6 class="salary" style="color: rgb(230, 234, 255)">
<span class="price">Users: </span>
<span class="price-actual" v-for="data in forBasic">{{data.numberOfUsers}} <i class="fas fa-users"></i></span>
</h6>
<h6 class="salary" style="color: rgb(230, 234, 255)">
<span class="price">Dur: </span>
<span class="price-actual" v-for="data in forBasic">{{data.duration}} <i class="far fa-clock"></i></span>
</h6>
</div>
<div class="text-center mt-1">
<button type='button' class='btn btn-success' style="padding: 12px 20px; background-color: #2a41bf; border-radius: 20px; box-shadow: 0 0 5px #31385d; border: none;">GET STARTED <i class="fas fa-play"></i></button>
</div>
</div>
</div>
</div>
</div>
    </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      PricingData: [],
      Starter: [],
      Premium: [],
      Basic: []
    };
  },
  methods: {},
  created() {
    this.$http
      .get(
        "https://api-hodhod.herokuapp.com/plans?fbclid=IwAR07W7zIW9sMdy-aYv2N49zn5wocKnten85CTf6cNW8S63iks1VkIQBPdXc"
      )
      .then(response => (this.PricingData = response.data));
  },
  computed: {
    forStarter() {
      this.Starter = this.PricingData.slice(0, 1);
      return this.Starter;
    },
    forPremium() {
      this.Premium = this.PricingData.slice(2, 3);
      return this.Premium;
    },
    forBasic() {
      this.Basic = this.PricingData.slice(1, 2);
      return this.Basic;
    }
  }
};
</script>
<style lang="scss">
.myContent-Special-For-Pricing {
  width: 100%;
  position: relative;
  padding: 5px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  perspective: 1000px;
  .pricing {
    padding: 20px;
    border-radius: 6px;
    background-color: #172f53;
    width: 420px;
    box-shadow: 0 15px 20px #6c95d2;
    transition: all 1s ease-in-out;
    .pricing-features {
      list-style-type: none;
      direction: rtl;
    }
    &:first-child {
      margin-right: 25px;
    }
    &:last-child {
      margin-left: 25px;
    }
    &:hover {
      -webkit-transform: translateY(-30px) scale(1.02) !important;
      -moz-transform: translateY(-30px) scale(1.02) !important;
      -o-transform: translateY(-30px) scale(1.02) !important;
      -ms-transform: translateY(-30px) scale(1.02) !important;
      transform: translateY(-30px) scale(1.02) !important;
      box-shadow: 0 0 100px #ccc;
    }
  }
}
</style>
