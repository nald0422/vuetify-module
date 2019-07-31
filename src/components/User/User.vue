<template>
 <div class="components">
  <div class="container">
   <div class="row">
    <div class="col-xs-12 col-sm-12">
     <h1>The User Component</h1>
     <p>
      I'm an awesome User!
      <br />
      Age: {{userAge}}
     </p>
     <button type="button" class="btn btn-primary" @click="changeName">Change my name: {{userName}}</button>
    </div>
   </div>
   <hr />
   <div class="row" style="margin-top: 20px;">
    <div class="col-xs-12 col-sm-6">
     <!-- v-on:nameReset="userName = $event" -->
     <appUserDetail
      v-bind:name="userName"
      v-bind:age="userAge"
      @nameReset="userName = $event"
      v-bind:resetFn="resetName"
     ></appUserDetail>
    </div>
    <div class="col-xs-12 col-sm-6">
     <appUserEdit v-bind:age="userAge" v-bind:editAge="editUserAge" v-bind:resetAge="resetUserAge"></appUserEdit>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

import { eventBus } from "../../main.js";

export default {
 data: function() {
  return {
   userName: "Max",
   userAge: 27,
   userEventBus: ""
  };
 },

 methods: {
  changeName() {
   if (this.userName.toLowerCase() == "max") {
    this.userName = "Sam";
   } else {
    this.userName = "Max";
   }
  },
  resetName() {
   this.userName = "Max";
   console.log("Reset Function");
  },

  editUserAge() {
   this.userAge = 30;
  },

  resetUserAge() {
   this.userAge = 27;
  }
 },

 created() {
  eventBus.$on("editAge", age => {
   this.userEventBus = age;
  });
 },

 components: {
  appUserDetail: UserDetail,
  appUserEdit: UserEdit
 }
};
</script>

<style scoped>
.container {
 padding: 20px;
}
</style>
