<template>
 <div id="app">
  <div id="nav">
   <router-link to="/about" class="routerLink">About</router-link>
   <router-link to="/tutorial" class="routerLink">Vue demo [Global Component]</router-link>
   <router-link to="/serverStatus" class="routerLink">Server Status [Local Component]</router-link>
   <router-link to="/userApps" class="routerLink">User Application [Communicate Components]</router-link>
   <router-link to="/quote" class="routerLink">Quote [Advanced Components]</router-link>
   <router-link to="/inputForms" class="routerLink">Input Forms</router-link>
   <router-link to="/directives" class="routerLink">Directives</router-link>
  </div>
  <hr />
  <router-view />
  <!-- <ul class="nav">
   <li class="nav-item">
    <a class="nav-link active" href="/about">About</a>
   </li>
   <li class="nav-item">
    <a class="nav-link" href="/tutorial">Vue demo [Global Component]</a>
   </li>
   <li class="nav-item">
    <a class="nav-link" href="/serverStatus">Server Status [Local Component]</a>
   </li>
   <li class="nav-item">
    <a class="nav-link" href="/userApps">User Application [Communicate Components]</a>
   </li>
  </ul>-->
  <!-- <v-navigation-drawer app fixed clipped>
    <v-list>
     <v-list-tile to="/about">
      <v-list-tile-action>
       <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
       <v-list-tile-title>About</v-list-tile-title>
      </v-list-tile-content>
     </v-list-tile>
     <v-list-tile to="/tutorial">
      <v-list-tile-action>
       <v-icon>book</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
       <v-list-tile-title>Vue demo [Global Component]</v-list-tile-title>
      </v-list-tile-content>
     </v-list-tile>
     <v-list-tile to="/serverStatus">
      <v-list-tile-action>
       <v-icon>assignment</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
       <v-list-tile-title>Server Status [Local Component]</v-list-tile-title>
      </v-list-tile-content>
     </v-list-tile>
     <v-list-tile to="/userApps">
      <v-list-tile-action>
       <v-icon>person</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
       <v-list-tile-title>User Application [Communicate Components]</v-list-tile-title>
      </v-list-tile-content>
     </v-list-tile>
    </v-list>
  </v-navigation-drawer>-->
  <!-- <v-toolbar app fixed clipped-left>
    <v-menu :nudge-width="-100">
     <v-toolbar-title slot="activator">Toolbar</v-toolbar-title>
     <v-list>
      <v-list-tile :to="'/page1'">Settings</v-list-tile>
      <v-list-tile :to="'/page2'">
       <v-list-tile-title v-text="'Account'"></v-list-tile-title>
      </v-list-tile>
     </v-list>
    </v-menu>
  </v-toolbar>-->
 </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import HelloWorld from "@/components/HelloWorld";

export default {
 name: "App",
 components: {
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

.routerLink {
 margin-right: 20px;
 padding: 20px;
}
</style>
