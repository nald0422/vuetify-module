<template>
 <div class="parent">
  <h1>Parent Container</h1>
  <div class="container">
   <p>Parent Name : {{switchName()}}</p>
   <button
    type="button"
    class="btn btn-outline-primary"
    @click="nameReset()"
    style="margin-right: 5px;"
   >Reset by custom event</button>
   <button
    type="button"
    class="btn btn-outline-primary"
    @click="resetFn()"
   >Reset by callback function</button>
   <hr />
   <h5>Event Bus</h5>
   <p>Age: {{this.userAge}}</p>
  </div>
 </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
 data: function() {
  return {
   userName: this.name,
   userAge: this.age
  };
 },

 props: {
  name: {
   type: String,
   default: "Max"
  },
  age: { type: Number },
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
 },

 created() {
  eventBus.$on("editAge", age => {
   this.userAge = age;
  });
 },

 mounted() {
  eventBus.$on("resetAge", age => {
   this.userAge = age;
  });
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
