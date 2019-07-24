<template>
 <div class="components">
  <h1>The User Component</h1>
  <p>I'm an awesome User!</p>
  <button @click="changeName">Change my name</button>
  <div class="container">
   <div class="row">
    <div class="col-xs-12 col-sm-6">
     <appUserDetail></appUserDetail>
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
   this.userName = Sam;
  }
 },

 components: {
  appUserDetail: UserDetail,
  appUserEdit: UserEdit
 }
};
</script>

<style>
</style>
