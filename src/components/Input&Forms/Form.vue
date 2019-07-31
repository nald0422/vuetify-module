<template>
 <div class="container">
  <form>
   <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
     <h1>File a Complaint</h1>
     <hr />
     <div class="form-group">
      <label for="email">Mail</label>
      <input type="text" id="email" class="form-control" v-model="mail" />
     </div>
     <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" class="form-control" v-model="password" />
     </div>
     <div class="form-group">
      <label for="age">Age</label>
      <input type="number" id="age" class="form-control" v-model="age" />
     </div>
    </div>
   </div>
   <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
     <label for="message">Message</label>
     <br />
     <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
     <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
    </div>
   </div>
   <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
     <div class="form-group">
      <label for="sendmail">
       <input type="checkbox" id="sendmail" value="SendMail" /> Send Mail
      </label>
      <label for="sendInfomail">
       <input type="checkbox" id="sendInfomail" value="SendInfoMail" /> Send Infomail
      </label>
     </div>
    </div>
   </div>
   <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
     <label for="male">
      <input type="radio" id="male" value="Male" v-model="gender" /> Male
     </label>
     <label for="female">
      <input type="radio" id="female" value="Female" v-model="gender" /> Female
     </label>
    </div>
   </div>
   <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
     <label for="priority">Priority</label>
     <select id="priority" class="form-control" v-model="priority">
      <option>Normal</option>
      <option>Urgent</option>
     </select>
    </div>
   </div>
   <hr />
   <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
     <button class="btn btn-primary">Submit!</button>
    </div>
   </div>
  </form>
  <hr />
  <div class="row">
   <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <div class="panel panel-default" style="margin-bottom: 10px;">
     <div class="panel-heading">
      <h4>Your Data</h4>
     </div>
     <div class="panel-body" style="font-size: 18px;">
      <p>Mail: {{mail}}</p>
      <p>Password: {{password}}</p>
      <p>Age: {{age}}</p>
      <p>Message: {{message}}</p>
      <p>
       <strong>Send Mail?</strong>
      </p>
      <ul>
       <li></li>
      </ul>
      <p>Gender: {{gender}}</p>
      <p>Priority: {{priority}}</p>
      <p>Switched:</p>
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
   mail: "",
   password: "",
   age: "",
   message: "",
   gender: "",
   priority: ""
  };
 }
};
</script>

<style scoped>
</style>
