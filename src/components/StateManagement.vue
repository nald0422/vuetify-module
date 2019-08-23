<template>
 <li class="nav-item dropdown">
  <a
   class="nav-link dropdown-toggle"
   data-toggle="dropdown"
   href="#"
   role="button"
   aria-haspopup="true"
   aria-expanded="false"
  >Vuex</a>
  <div class="dropdown-menu">
   <router-link to="/computed" class="dropdown-item">Computed</router-link>
   <router-link to="/watchers" class="dropdown-item">Watchers</router-link>
   <router-link to="/vuexStore" class="dropdown-item">Vuex Store</router-link>
  </div>
 </li>
</template>
