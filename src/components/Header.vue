<template>
 <ul class="nav nav-pills">
  <li class="nav-item" role="presentation">
   <router-link class="nav-link" to="/">About</router-link>
  </li>
  <dropDownComp></dropDownComp>
  <li class="nav-item">
   <router-link to="/inputForms" class="nav-link">Input Forms</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/directives" class="nav-link">Directives</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/mixins" class="nav-link">Mixins</router-link>
  </li>
  <stateManagement></stateManagement>
 </ul>
</template>

<script>
import dropdownComp from "./DropDownComponent.vue";
import StateManagement from "./StateManagement.vue";

export default {
 components: {
  dropDownComp: dropdownComp,
  stateManagement: StateManagement
 }
};
</script>

<style scoped>
</style>

