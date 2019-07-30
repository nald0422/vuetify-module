<template>
 <div class="QuoteA">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <div class="form-group">
      <label for="quote">Quote:</label>
      <textarea class="form-control" rows="5" id="quote"></textarea>
      <button class="btn btn-primary" style="margin-top: 10px; float: right">Encode</button>
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
   quotes: []
  };
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