<template>
 <div>
  <p>Server Status: {{ status }}</p>
  <hr />
  <v-btn color="warning" @click="changeStatus">Change Status</v-btn>
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
