<template>
 <div>
  <div class="container">
   <div class="row">
    <mixin-app></mixin-app>
   </div>
  </div>
 </div>
</template>

<script>
import mixinApp from "./App.vue";

export default {
 components: {
  mixinApp: mixinApp
 }
};
</script>

<style>
</style>
