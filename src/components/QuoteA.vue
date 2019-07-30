<template>
 <div class="QuoteA">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <div class="form-group">
      <label for="quote">Quote:</label>
      <textarea class="form-control" rows="5" id="quote" v-model="quote"></textarea>
      <p>{{quote}}</p>
      <button
       class="btn btn-primary"
       style="margin-top: 10px; float: right"
       @click="encodeQuote(quote)"
      >Encode</button>
      <!-- <p v-for="q in quotes" :key="q.id">{{q.id}}</p> -->
     </div>
    </div>
   </div>
   <hr />
  </div>
  <!-- <slot name="title"></slot>
  <slot name="content"></slot>-->
 </div>
</template>

<script>
export default {
 data: function() {
  return {
   quote: "",
   quotes: []
  };
 },

 methods: {
  encodeQuote(inputQuote) {
   this.quotes.push(inputQuote);
   for (var i = 0; i < this.quotes.length; i++) {
    console.log(this.quotes[i]);
   }
  }
 }
};
</script>

<style scoped>
.QuoteA {
 border: 1px solid #ccc;
 box-shadow: 1px 1px 2px black;
 padding: 30px;
 margin: 30px auto;
}

h1 {
 color: dodgerblue;
}
</style>