<template>
 <div>
  <div class="container">
   <div class="row">
    <div class="col-12">
     <h5>Direct to Store</h5>
     <result-app></result-app>
     <hr />
     <h5>Direct to Getters</h5>
     <another-result-app-b></another-result-app-b>
     <hr />
     <another-result-app-a></another-result-app-a>
     <hr />
     <h5>Mutation</h5>
     <counter-app></counter-app>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import Counter from "./Counter.vue";
import Result from "./Result.vue";
import AnotherResultA from "./AnotherResultA.vue";
import AnotherResultB from "./AnotherResultB.vue";

export default {
 components: {
  counterApp: Counter,
  resultApp: Result,
  anotherResultAppA: AnotherResultA,
  anotherResultAppB: AnotherResultB
 }
};
</script>

<style scoped>
</style>