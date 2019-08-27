<template>
 <div class="div">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>Counter: {{ doubleCounter }}</p>
     <!-- <p>Owned computed getter: {{ localCounter }}</p> -->
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 computed: {
  ...mapGetters(["doubleCounter", "stringCounter"])
 }
};
</script>

<style scoped>
</style>