<template>
 <div>
  <div class="container">
   <div class="row">
    <div class="col-12">
     <button type="button" class="btn btn-primary" @click="increment()">Increment</button>
     <button
      type="button"
      class="btn btn-primary"
      @click="decrement()"
      style="margin-left: 5px;"
     >Decrement</button>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
 methods: {
  ...mapMutations(["increment", "decrement"])
  //   increment() {
  //    this.$store.commit('increment');
  //   },
  //   decrement() {
  //    this.$store.commit('decrement');
  //   }
 }
};
</script>

<style scoped>
</style>