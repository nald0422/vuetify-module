<template>
 <div>
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>Counter from actions: {{getAsynchCtr}}</p>
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
      @click="incrementAsync()"
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

export default {
 computed: {
  getAsynchCtr() {
   return this.$store.getters.getAsynchCtr;
  }
 },
 methods: {
  ...mapMutations(["increment"]),
  //   increment() {
  //    this.$store.commit('increment');
  //   },
  decrement() {
   this.$store.commit("decrement");
  },
  incrementAsync() {
   this.$store.dispatch({
    type: "incrementAsynchronous",
    amount: 4
   });
  }
  //   ...mapActions({incrementAsync:'incrementAsynchronous'})
 }
};
</script>

<style scoped>
</style>