<template>
 <div id="app">
  <div class="container" style="padding: 10px; padding-bottom: 0px;">
   <!-- <h1>Router</h1> -->
   <div class="row">
    <div class="col-12">
     <appHeader></appHeader>
    </div>
   </div>
  </div>
  <!-- <hr /> -->
  <div class="block">
   <transition name="page" mode="out-in">
    <router-view />
   </transition>
  </div>
 </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import HelloWorld from "@/components/HelloWorld";
import Header from "./components/Header.vue";

export default {
 name: "App",
 components: {
  appHeader: Header
  //   HelloWorld
 },
 data() {
  return {
   drawer: {
    // sets the open status of the drawer
    open: true,
    // sets if the drawer is shown above (false) or below (true) the toolbar
    clipped: true,
    // sets if the drawer is CSS positioned as 'fixed'
    fixed: false,
    // sets if the drawer remains visible all the time (true) or not (false)
    permanent: true,
    // sets the drawer to the mini variant, showing only icons, of itself (true)
    // or showing the full drawer (false)
    mini: true
   },
   toolbar: {
    //
    fixed: false,
    // sets if the toolbar contents is leaving space for drawer (false) or not (true)
    clippedLeft: true
   },
   footer: {
    // sets the CSS position of the footer
    fixed: true,
    // sets if the footer is full width (true) or gives space to the drawer (false)
    clippedLeft: true
   },
   message: "Hello",
   input: "",
   link: "http://google.com",
   counter: 0,
   x: 0,
   y: 0
   //
  };
 },

 props: {
  source: String
 },

 methods: {
  testing() {
   warn("CLICKED!");
  },

  toggleDrawer() {
   if (this.drawer.permanent) {
    this.drawer.permanent = !this.drawer.permanent;
    // set the clipped state of the drawer and toolbar
    this.drawer.clipped = true;
    this.toolbar.clippedLeft = true;
   } else {
    // normal drawer
    this.drawer.open = !this.drawer.open;
   }
  },

  makeDrawerPermanent() {
   this.drawer.permanent = true;
   // set the clipped state of the drawer and toolbar
   this.drawer.clipped = false;
   this.toolbar.clippedLeft = false;
  },
  // toggles the drawer variant (mini/full)
  toggleMiniDrawer() {
   this.drawer.mini = !this.drawer.mini;
  },

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

<style scoped lang="scss">
#nav {
 padding: 30px;
 a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
   color: #42b983;
  }
 }
}

.block {
 border: 1px solid #ccc;
 box-shadow: 1px 1px 2px black;
 padding: 30px;
 margin: 30px auto;
}

.page-enter-active,
.page-leave-active {
 transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
 opacity: 0;
 transform: translateX(-30%);
}
</style>
