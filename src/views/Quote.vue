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
   <hr />
   <div class="row">
    <div class="col-lg-12">
     <!-- Component is being kept after <keep-alive> tag and prevent from being destroyed -->
     <keep-alive>
      <component :is="selectedComponent"></component>
     </keep-alive>
    </div>
   </div>
   <div class="row">
    <div class="table-responsive">
     <table class="table">
      <thead>
       <tr>
        <th scope="col">User Id</th>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
       </tr>
      </thead>
      <tbody>
       <tr v-for="item in data" :key="item.id">
        <td>{{item.userId}}</td>
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.body}}</td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import Quote from "../components/QuoteComp.vue";
import QuoteA from "../components/QuoteA.vue";
import QuoteB from "../components/QuoteB.vue";
import axios from "axios";

export default {
 components: {
  quoteView: Quote,
  CategoryA: QuoteA,
  CategoryB: QuoteB
 },

 created() {
  axios
   .get("https://jsonplaceholder.typicode.com/posts")
   .then(response => {
    console.log(JSON.stringify(response));
    this.data = response["data"];
   })
   .catch(error => console.log(error));
 },

 data: function() {
  return {
   quote: "The Quote",
   selectedComponent: "quoteView",
   data: []
  };
 }
};
</script>

<style>
</style>
