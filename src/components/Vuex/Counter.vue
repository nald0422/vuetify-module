<template>
 <div>
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>Counter from actions: {{AsyncCtr}}</p>
     <button type="button" class="btn btn-primary" @click="increment()">Increment</button>
     <button
      type="button"
      class="btn btn-primary"
      @click="decrement()"
      style="margin-left: 5px;"
     >Decrement</button>
     <button
      type="button"
      class="btn btn-primary"
      @click="incrementAsync({by: 10, duration: 500})"
      style="margin-left: 5px;"
     >Increment Asynchronous</button>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import * as types from "../../modules/types";

export default {
 computed: {
  ...mapGetters({ AsyncCtr: types.GET_ASYNCHCOUNTER })
 },
 methods: {
  //   ...mapMutations({ increment: types.MUTATE_INCREMENT_COUNTER }),
  ...mapActions({
   increment: types.DISPATCH_COUNTER_INCREMENT,
   decrement: types.DISPATCH_COUNTER_DECREMENT,
   incrementAsync: types.DISPATCH_INCREMENT_ASYNC
  })
  //   increment() {
  //    this.$store.commit('increment');
  //   },
  //   decrement() {
  //    this.$store.commit("decrement");
  //   },
 }
};
</script>

<style scoped>
</style>