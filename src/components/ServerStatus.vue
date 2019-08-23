<template>
 <div>
  <div class="container">
   <div class="row" style="margin-bottom: 5px;">
    <div class="col-6">
     <p>Server Status: {{ status }}</p>
    </div>
    <div class="col-6">
     <button type="button" class="btn btn-warning" @click="changeStatus">Change Status</button>
    </div>
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
    this.status = "Critical";
   }
  }
 }
};
</script>

<style>
</style>

