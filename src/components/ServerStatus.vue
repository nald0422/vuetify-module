<template>
 <div>
  <div class="container">
   <div class="row" style="margin-bottom: 5px;">
    <p>Server Status: {{ status }}</p>
    <hr />
    <button type="button" class="btn btn-warning" @click="changeStatus">Change Status</button>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data: function() {
  return {
   status: "Critical"
  };
 },

 methods: {
  changeStatus() {
   if (this.status.toLowerCase() == "critical") {
    this.status = "Normal";
   } else if (this.status.toLowerCase() == "normal") {
    this.status = "critical";
   }
  }
 }
};
</script>

<style>
</style>
