<template>
 <div class="parent">
  <h1>Parent Container</h1>
  <p>Parent Name : {{switchName()}}</p>
  <button type="button" class="btn btn-outline-primary" @click="nameReset()">Reset A</button>
  <button type="button" class="btn btn-outline-primary" @click="resetFn()">Reset B</button>
 </div>
</template>

<script>
export default {
 data: function() {
  return {
   userName: this.name
  };
 },

 props: {
  name: {
   type: String,
   default: "Max"
  },
  resetFn: Function
 },

 methods: {
  switchName() {
   return this.name.toUpperCase();
  },

  nameReset() {
   this.userName = "Sam";
   this.$emit("nameReset", this.userName);
  }
 }
};
</script>

<style scoped>
.parent {
 /* background-color: tomato; */
 border-style: solid;
 border-width: 0.2ch;
 padding: 20px;
}
</style>
