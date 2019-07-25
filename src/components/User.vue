<template>
 <div class="components">
  <div class="container">
   <div class="row">
    <div class="col-xs-12 col-sm-12">
     <h1>The User Component</h1>
     <p>I'm an awesome User!</p>
     <button type="button" class="btn btn-primary" @click="changeName">Change my name: {{userName}}</button>
    </div>
   </div>
   <hr />
   <div class="row" style="margin-top: 20px;">
    <div class="col-xs-12 col-sm-6">
     <!-- v-on:nameReset="userName = $event" -->
     <appUserDetail v-bind:name="userName" @nameReset="userName = $event" :resetFn="resetName()"></appUserDetail>
    </div>
    <div class="col-xs-12 col-sm-6">
     <appUserEdit></appUserEdit>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
 data: function() {
  return {
   userName: "Max"
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
   this.userName = "Sam";
  }
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
