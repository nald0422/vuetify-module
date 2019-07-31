<template>
 <div class="child">
  <h1>Child Container</h1>
  <div class="container">
   <hr />
   <h5>Callback function</h5>
   <button
    type="button"
    class="btn btn-primary"
    @click="editAge()"
    style="margin-right: 5px;"
   >Edit age</button>
   <button
    type="button"
    class="btn btn-primary"
    @click="resetAge()"
    style="margin-right: 5px;"
   >Reset age</button>
   <hr />
   <h5>Event Bus</h5>
   <p>Age: {{childAge}}</p>
   <button
    type="button"
    class="btn btn-primary"
    @click="editUserAge"
    style="margin-right: 5px;"
   >Edit User Age</button>
   <button type="button" class="btn btn-primary" @click="resetUserAge">Reset User Age</button>
  </div>
 </div>
</template>

<script>
import { eventBus } from "../../main.js";
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
  },

  resetUserAge() {
   this.childAge = 27;
   eventBus.$emit("resetAge", this.childAge);
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
