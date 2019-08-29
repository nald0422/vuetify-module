<template>
 <div class="div">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <h6>/w mapGetters (Spread operator)</h6>
     <p>Counter A: {{ doubleCtr }}</p>
     <p>Mouse clicks: {{ counterClicks }}</p>
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
  ...mapGetters({ doubleCtr: "doubleCounter" }),
  counterClicks() {
   return this.$store.getters.getCounter * 2;
  }
 }
};
</script>

<style scoped>
</style>