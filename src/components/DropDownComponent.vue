<template>
 <li class="nav-item dropdown">
  <a
   class="nav-link dropdown-toggle"
   data-toggle="dropdown"
   href="#"
   role="button"
   aria-haspopup="true"
   aria-expanded="false"
  >Components</a>
  <div class="dropdown-menu">
   <router-link to="/tutorial" class="dropdown-item">Vue demo [Global Component]</router-link>
   <router-link to="/serverStatus" class="dropdown-item">Server Status [Local Component]</router-link>
   <router-link to="/userApps" class="dropdown-item">User Application [Communicate Components]</router-link>
   <router-link to="/quote" class="dropdown-item">Quote [Advanced Components]</router-link>
  </div>
 </li>
</template>
