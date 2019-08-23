<template>
 <div class="class">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <div class="example">
      <p>Original Message: " {{ message }} "</p>
      <p>Computed reversed message: "{{reversedMessage}}"</p>
      <p>Time now: {{now}}</p>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data: function() {
  return {
   message: "Hello"
  };
 },
 computed: {
  reversedMessage() {
   return this.message
    .split("")
    .reverse()
    .join("");
  },
  now() {
   let current_datetime = new Date();
   let formatted_date =
    current_datetime.getDate() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getFullYear();
   return formatted_date;
  }
 }
};
</script>

<style scoped>
</style>