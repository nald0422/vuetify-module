<template>
 <div class="child">
  <h1>Child Container</h1>
  <p>Age: {{childAge}}</p>
  <div class="container">
   <button
    type="button"
    class="btn btn-primary"
    @click="editAge()"
    style="margin-right: 5px;"
   >Edit Age (Callback Function)</button>
   <button
    type="button"
    class="btn btn-primary"
    @click="resetAge()"
    style="margin-right: 5px;"
   >Reset Age</button>
   <button type="button" class="btn btn-primary" @click="editUserAge">Event Bus</button>
  </div>
 </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
 data: function() {
  return {
   childAge: this.age
  };
 },

 props: {
  age: {
   type: Number
  },
  editAge: Function,
  resetAge: Function
 },

 methods: {
  editUserAge() {
   this.childAge = 30;
   console.log("Child Age: " + this.age);
   eventBus.$emit("editAge", this.childAge);
  }
 }
};
</script>

<style scoped>
.child {
 background-color: #d7fffe;
 font: white;
 border-style: solid;
 border-width: 0.2ch;
 padding: 20px;
}
</style>
