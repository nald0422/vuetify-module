<template>
 <div>
  <div class="container">
   <div class="row">
    <div class="col-12">
     <counter-app></counter-app>
     <result-app></result-app>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import Counter from "./Counter.vue";
import Result from "./Result.vue";

export default {
 components: {
  counterApp: Counter,
  resultApp: Result
 }
};
</script>

<style scoped>
</style>