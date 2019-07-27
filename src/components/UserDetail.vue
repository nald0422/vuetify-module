<template>
  <div class="parent">
    <h1>Parent Container</h1>
    <p>
      Parent Name : {{switchName()}}
      <br />
      Age: {{this.userAge}}
    </p>
    <button
      type="button"
      class="btn btn-outline-primary"
      @click="nameReset()"
      style="margin-right: 5px;"
    >Reset by custom event</button>
    <button
      type="button"
      class="btn btn-outline-primary"
      @click="resetFn()"
    >Reset by callback function</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data: function() {
    return {
      userName: this.name,
      userAge: this.age
    };
  },

  props: {
    name: {
      type: String,
      default: "Max"
    },
    age: { type: Number },
    resetFn: Function
  },

  methods: {
    switchName() {
      return this.name.toUpperCase();
    },

    nameReset() {
      this.userName = "Sam";
      this.$emit("nameReset", this.userName);
    }
  },

  created() {
    eventBus.$on("editAge", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
.parent {
  /* background-color: tomato; */
  border-style: solid;
  border-width: 0.2ch;
  padding: 20px;
}
</style>
