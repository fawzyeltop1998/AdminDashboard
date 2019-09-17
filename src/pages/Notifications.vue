<template>
  <div class="notify-to-usersOROwner shadow rounded-lg bg-white">
    <div class="row mb-2" style="border-bottom: 1px solid #DDD">
      <div class="col-12">
        <h4 class="SNotifyToUsersOROwner">Send notify to users or owner</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-7 col-lg-7 col-md-12">
          <h5 style="color: #0887d4; border-bottom: 1px solid #DDD; padding-bottom: 5px;">Use the rich editor to make process</h5>
        <div class="quil-editor shadow rounded-lg p-3">
          <h5 class="text-muted pb-1" style="border-bottom: 1px solid #DDD">Write the title and body after selecting one of the options</h5>
          <div class="InputForTitle">
             <div class="form-group">
                <label for="exampleFormControlInput1">Enter the title you'd like</label>
                <input type="email" class="form-control" style="border: 1px solid #DDD" id="exampleFormControlInput1" placeholder="HodoHod is a web application">
             </div>
              <div class="form-group" style="position: relative;">
                <label for="exampleFormControlInput1">Enter the body you'd like</label>
                <VueEmoji @input="onInput()" :value="myText" />
             </div>
             
             <div class="input-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
             <div class="form-group">
               <button type="button" class="btn btn-success">Post</button>
             </div>
          </div>
        </div>
      </div>
      <div class="col-5" style="border-left: 1px solid #DDD">
        <div class="forUserOrOwner" >
          <h5 style="color: #0887d4; border-bottom: 1px solid #DDD; padding-bottom: 5px;">Select one of the following two options</h5>
          <div class="options">
            <div class="owner-option">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" name="example1">
                <label class="custom-control-label" for="customCheck1">Message to one owner</label>
              </div>
            </div>
            <div class="owner-option">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck2" name="example1">
                <label class="custom-control-label" for="customCheck2">Message to all users</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import NotificationTemplate from './Notifications/NotificationTemplate';
import { VueEditor } from "vue2-editor";
import VueEmoji from 'emoji-vue'

  
export default {
  data() {
    return {
      input: '',
      search: ''
    }
  },
  methods: {
     onInput(event) {
          this.input += event.data;
      }
  },
 components: { 
    VueEditor ,
      VueEmoji


  }
}
</script>
<style lang="scss">
.notify-to-usersOROwner {
  padding: 20px;
}
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';

.emoji-picker-container {
  width: 100% !important;
}

.emoji-wysiwyg-editor {
  min-height: 80px;
  padding-right: 35px;
  outline: none;
  width: 100% !important;
  border-radius: 4px;
}
.emoji-picker-icon {
  position: absolute !important;
  right: 12px;
  top: 10px;  
}
</style>
