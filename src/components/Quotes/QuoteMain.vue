<template>
 <div class="QuoteA">
  <div class="container">
   <headerComp :quotesCount="quotes.length" :maxQuotes="maxQuotes"></headerComp>
   <div class="row">
    <div class="col-12">
     <div class="form-group" style="margin: 10px;">
      <label for="quote">Quote:</label>
      <textarea class="form-control" rows="5" id="quote" v-model="quote"></textarea>
      <p :style="color">{{quote}}</p>
      <button class="btn btn-primary" style="float: right" @click="encodeQuote(quote)">Encode</button>
     </div>
    </div>
   </div>
   <hr />
   <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
   <hr />
   <div class="row">
    <div class="col-sm-12 text-center">
     <div class="alert alert-info" style="margin-top: 10px;">Info: Click on a Quote to delete it!</div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import QuoteGrid from "./QuoteGrid.vue";
import NewQuote from "./Quote.vue";
import Header from "./QuoteHeader.vue";

export default {
 data: function() {
  return {
   color: "color:",
   quote: "",
   maxQuotes: 10,
   quotes: ["Just A Quote to See Something."]
  };
 },

 components: {
  quoteGrid: QuoteGrid,
  headerComp: Header
 },

 methods: {
  encodeQuote(inputQuote) {
   if (this.quotes.length >= this.maxQuotes) {
    console.log("Limited to 10 quotes");
    this.color = "color: red";
   }
   if (this.quotes.length < this.maxQuotes && this.quote != "") {
    this.quotes.push(inputQuote);
    for (var i = 0; i < this.quotes.length; i++) {
     console.log(this.quotes[i]);
    }
    this.quote = "";
   }
  },

  deleteQuote(index) {
   this.quotes.splice(index, 1);
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