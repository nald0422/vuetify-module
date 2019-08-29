<template>
 <div class="div">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>Counter: {{ counter }}</p>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 computed: {
  counter() {
   return this.$store.getters.getCounter;
  }
 }
};
</script>

<style scoped>
</style>