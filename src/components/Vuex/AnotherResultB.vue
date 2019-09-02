<template>
 <div class="div">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>Counter B: {{ counter }}</p>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import * as types from "../../modules/types";
import { mapGetters } from "vuex";

export default {
 computed: {
  ...mapGetters({ counter: types.DOUBLE_COUNTER })
 }
};
</script>

<style scoped>
</style>