<template>
 <div>
  <div class="container">
   <div class="row">
    <div class="col-12">
     <p>
      Ask yes/no Question:
      <input v-model="question" />
     </p>
     <p>{{answer}}</p>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import axios from "axios";
export default {
 data: function() {
  return {
   question: "",
   answer: "I cannot give you an answer until you ask a question!",
   answerContainer: ""
  };
 },

 methods: {
  getAnswer() {
   if (this.question.indexOf("?") === -1) {
    this.answer = "Questions usually contain a Question mark. ;-)";
   } else {
    this.answer = "thinking";
    var vm = this;
    axios
     .get("https://yesno.wtf/api")
     .then(function(response) {
      vm.answer = _.capitalize(response.data.answer);
     })
     .catch(function(error) {
      vm.answer = "Error! Could not reach the API. " + error;
     });
   }
  }
 },

 watch: {
  question() {
   this.answer = "Waiting for you to stop typing...";
   this.debouncedGetAnswer();
  }
 },

 created() {
  // _.debounce is a function provided by lodash to limit how
  // often a particularly expensive operation can be run.
  // In this case, we want to limit how often we access
  // yesno.wtf/api, waiting until the user has completely
  // finished typing before making the ajax request. To learn
  // more about the _.debounce function (and its cousin
  // _.throttle), visit: https://lodash.com/docs#debounce
  this.debouncedGetAnswer = _.debounce(this.getAnswer, 700);
 }
};
</script>

<style scoped>
</style>
