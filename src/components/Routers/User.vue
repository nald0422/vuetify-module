<template>
 <div class="container">
  <div class="row">
   <div class="col-lg-12">
    <h1>The User Page</h1>
    <hr />
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data: function() {
  return {
   id: this.$route.params.id
  };
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
