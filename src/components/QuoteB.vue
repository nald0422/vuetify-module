<template>
 <div>
  <h1 slot="title">Quote B</h1>
  <p>Check State: {{ status }}</p>
  <button
   class="btn btn-primary"
   @click="increase()"
   style="margin-right: 5px;"
  >Increase: {{ counter }}</button>
  <!-- <slot name="title"></slot>
  <slot name="content"></slot>-->
 </div>
</template>

<script>
export default {
 data: function() {
  return {
   counter: 0,
   status: ""
  };
 },

 methods: {
  increase() {
   this.counter++;
  }
 },
 created() {
  this.status = "Activated";
 },
 //component is being destroyed after selected
 destroyed() {
  console.log("Destroyed");
 },

 activated() {
  console.log("Activated!");
 },

 deactivated() {
  console.log("Deactivated!");
 }
};
</script>

<style scoped>
div {
 border: 1px solid #ccc;
 box-shadow: 1px 1px 2px black;
 padding: 30px;
 margin: 30px auto;
 text-align: center;
}

h1 {
 color: dodgerblue;
}
</style>