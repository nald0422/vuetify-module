<template>
 <div>
  <!-- <quoteView>
      <h1 slot="title">{{quote}}</h1>
      <p slot="content">A Wonderful Quote</p>
      Without slot name will set as default content
  </quoteView>-->
  <div class="container">
   <div class="row" style="margin-top: 20px;">
    <div class="col-sm">
     <button
      class="btn btn-outline-primary"
      @click="selectedComponent = 'quoteView'"
     >Quote Application</button>
    </div>
    <div class="col-sm">
     <button class="btn btn-outline-warning" @click="selectedComponent = 'CategoryA'">Category A</button>
    </div>
    <div class="col-sm">
     <button class="btn btn-outline-success" @click="selectedComponent = 'CategoryB'">Category B</button>
    </div>
   </div>
  </div>
  <hr />
  <div class="row">
   <div class="col-lg-12">
    <!-- Component is being kept after <keep-alive> tag and prevent from being destroyed -->
    <keep-alive>
     <component :is="selectedComponent"></component>
    </keep-alive>
   </div>
  </div>
 </div>
</template>
<script>
import Quote from "../components/QuoteComp.vue";
import QuoteA from "../components/QuoteA.vue";
import QuoteB from "../components/QuoteB.vue";
export default {
 components: {
  quoteView: Quote,
  CategoryA: QuoteA,
  CategoryB: QuoteB
 },

 data: function() {
  return {
   quote: "The Quote",
   selectedComponent: "quoteView"
  };
 }
};
</script>

<style>
</style>
