<template>
<div class="statics">
    <div id="accordion">

  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#collapseOne">
        Collapsible Group Item #1
      </a>
    </div>
    <div id="collapseOne" class="collapse show" data-parent="#accordion">
      <div class="card-body">
        <div v-for="user in UsersWith">
            <p>
                <span style="padding-right: 10px; border-right: 1px solid #DDD">{{user.name}}</span>
                <span style="padding-left: 10px;">{{user.code}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
        Collapsible Group Item #2
      </a>
    </div>
    <div id="collapseTwo" class="collapse" data-parent="#accordion">
      <div class="card-body">
         <div v-for="user in UsersWith">
            <p>
                <span style="padding-right: 10px; border-right: 1px solid #DDD">{{user.name}}</span>
                <span style="padding-left: 10px;">{{user.code}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
        Collapsible Group Item #3
      </a>
    </div>
    <div id="collapseThree" class="collapse" data-parent="#accordion">
      <div class="card-body">
         <div v-for="user in UsersWith">
            <p>
                <span style="padding-right: 10px; border-right: 1px solid #DDD">{{user.name}}</span>
                <span style="padding-left: 10px;">{{user.code}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseM">
        Collapsible Group Item #4
      </a>
    </div>
    <div id="collapseM" class="collapse" data-parent="#accordion">
      <div class="card-body">
         <div v-for="user in UsersWith">
            <p>
                <span style="padding-right: 10px; border-right: 1px solid #DDD">{{user.name}}</span>
                <span style="padding-left: 10px;">{{user.code}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseY">
        Collapsible Group Item #5
      </a>
    </div>
    <div id="collapseY" class="collapse" data-parent="#accordion">
      <div class="card-body">
         <div v-for="user in UsersWith">
            <p>
                <span style="padding-right: 10px; border-right: 1px solid #DDD">{{user.name}}</span>
                <span style="padding-left: 10px;">{{user.code}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>


</div>

</div>
</template>
<script>
export default {
    name: 'statics',
    data() {
        return {
            UsersWith: [
                {name: 'Ahmed Adel Mohamed', code: '#rew5r4we6rw6e4r65we4r65ew4rw5e6r4'},
                {name: 'Ahmed Adel Mohamed', code: '#rew5r4we6rw6e4r65we4r65ew4rw5e6r4'},
                {name: 'Ahmed Adel Mohamed', code: '#rew5r4we6rw6e4r65we4r65ew4rw5e6r4'},
                {name: 'Ahmed Adel Mohamed', code: '#rew5r4we6rw6e4r65we4r65ew4rw5e6r4'},
                {name: 'Ahmed Adel Mohamed', code: '#rew5r4we6rw6e4r65we4r65ew4rw5e6r4'}
            ]
        }
    }
}
</script>
<style lang="scss">
.statics {
    border-radius: 6px;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: #FFFFFF;
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
    border: none;
    padding: 20px;
    line-height: 1.5;
    color: #888;
}
</style>
