<template>
 <div class="div">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>Counter: {{ counter }}</p>
    </div>
   </div>
  </div>
 </div>
</template>

<script>

import {mapGetters} from 'vuex'
import * as types from '../../modules/types'

export default {
 computed: {
     ...mapGetters({counter: types.GET_COUNTER}) 
 }
};
</script>

<style scoped>
</style>