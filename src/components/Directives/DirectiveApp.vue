<template>
 <div class="container">
  <div class="row">
   <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <h1>Built-in Directives</h1>
    <p v-text="'This is Some Text'"></p>
    <p v-html="'<Strong>This is Html</Strong>'"></p>
   </div>
  </div>
  <hr />
  <div class="row">
   <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <h1>Custom Directives</h1>
    <h5>Global directives</h5>
    <p v-highlight:background="{backgroundColor:'black', secondColor:'white'}">Highlight</p>
    <h5>Local directives</h5>
    <p v-highlight-local:background.delayed="'yellow'">Highlight</p>
   </div>
  </div>
 </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
 directives: {
  "highlight-local": {
   bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers["delayed"]) {
     delay = 3000;
    }
    setTimeout(() => {
     if (binding.arg == "background") {
      el.style.backgroundColor = binding.value;
      if (binding.value == "black") {
       el.style.color = "white";
      }
     } else {
      el.style.color = binding.value;
     }
     console.log("Delay : " + delay);
    }, delay);
   }
  }
 }
};
</script>

<style scoped>
</style>
