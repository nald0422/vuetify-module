<template>
 <v-app>
  <v-system-bar window dark>
   <v-spacer></v-spacer>
   <v-icon>remove</v-icon>
   <v-icon>check_box_outline_blank</v-icon>
   <v-icon>close</v-icon>
  </v-system-bar>
  <v-navigation-drawer stateless value="true">
   <v-list>
    <v-list-tile>
     <v-list-tile-action>
      <v-icon>home</v-icon>
     </v-list-tile-action>
     <v-list-tile-title>Home</v-list-tile-title>
    </v-list-tile>

    <v-list-tile>
     <v-list-tile-action>
      <v-icon>note</v-icon>
     </v-list-tile-action>
     <v-list-tile-title>Area Manager Module</v-list-tile-title>
    </v-list-tile>

    <v-list-group prepend-icon="account_circle" value="true">
     <template v-slot:activator>
      <v-list-tile>
       <v-list-tile-title>Users</v-list-tile-title>
      </v-list-tile>
     </template>
     <v-list-group no-action sub-group value="true">
      <template v-slot:activator>
       <v-list-tile>
        <v-list-tile-title>Admin</v-list-tile-title>
       </v-list-tile>
      </template>

      <v-list-tile v-for="(admin, i) in admins" :key="i">
       <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
       <v-list-tile-action>
        <v-icon v-text="admin[1]"></v-icon>
       </v-list-tile-action>
      </v-list-tile>
     </v-list-group>

     <v-list-group sub-group no-action>
      <template v-slot:activator>
       <v-list-tile>
        <v-list-tile-title>Actions</v-list-tile-title>
       </v-list-tile>
      </template>
      <v-list-tile v-for="(crud, i) in cruds" :key="i">
       <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
       <v-list-tile-action>
        <v-icon v-text="crud[1]"></v-icon>
       </v-list-tile-action>
      </v-list-tile>
     </v-list-group>
    </v-list-group>
   </v-list>
  </v-navigation-drawer>

  <v-content>
   <v-component>
    <router-view />
   </v-component>
  </v-content>
 </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
 name: "App",
 components: {
  HelloWorld
 },
 data() {
  return {
   //
  };
 },

 methods: {
  testing() {
   warn("CLICKED!");
  }
 }
};
</script>
