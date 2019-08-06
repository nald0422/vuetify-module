<template>
 <div class="container">
  <div class="row">
   <div class="col-lg-12">
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID: {{ id }}</p>
    <userList></userList>
    <hr />
    <h5>Navigate by Code</h5>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
   </div>
  </div>
 </div>
</template>

<script>
import UserList from "./UserList.vue";

export default {
 data: function() {
  return {
   id: this.$route.params.id
  };
 },

 watch: {
  $route(to, from) {
   this.id = to.params.id;
  }
 },

 components: {
  userList: UserList
 },

 methods: {
  navigateToHome() {
   this.$router.push("/");
  }
 }
};
</script>

<style>
</style>
