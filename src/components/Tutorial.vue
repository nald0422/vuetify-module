<template>
 <div id="app">
  <div class="container-fluid m-3">
   <div class="row">
    <div class="col-sm">
     <input v-model="message" />
    </div>
    <div class="col-sm">
     <p>{{ message }}</p>
    </div>
    <div class="col-sm">
     <p>Value returned by method: {{ sayHello() }}</p>
    </div>
   </div>
   <hr />
   <div class="row">
    <div class="col-sm">
     <p>
      <a v-bind:href="link">Google</a>
     </p>
    </div>
    <div class="col-sm">
     <v-btn color="info" v-on:click="counter++">Increase</v-btn>
     <v-btn color="info" v-on:click="counter--">Decrease</v-btn>
     <p>Counter: {{ counter }}</p>
     <p>Result: {{ result() }}</p>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 name: "HelloWorld",
 data() {
  return {
   message: "Hello",
   input: "",
   link: "http://google.com",
   counter: 0,
   x: 0,
   y: 0
  };
 },
 methods: {
  result() {
   return this.counter > 5 ? "Greater than 5" : "Less than 5";
  },
  sayHello() {
   return "Hello World!";
  },
  increase(step) {
   this.counter += step;
  },
  updateCoordinates: function(event) {
   this.x = event.clientX;
   this.y = event.clientY;
  }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
 font-weight: normal;
}
ul {
 list-style-type: none;
 padding: 0;
}
li {
 display: inline-block;
 margin: 0 10px;
}
a {
 color: #42b983;
}
</style>