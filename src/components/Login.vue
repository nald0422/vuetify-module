<template>
 <div class="container">
  <div class="row justify-content-center align-items-center">
   <form action="your-action" @submit="onFormSubmit($event)" style="width: 400px; background-color: #E5F0FF; border-radius: 15px;">
    <div class="dx-fieldset">
     <div class="dx-fieldset-header">
      <h4>Login</h4>
     </div>
     <div class="dx-field">
      <div class="dx-field-label">Username</div>
      <div class="dx-field-value">
       <dx-text-box v-model="username">
        <dx-validator>
         <dx-required-rule />
        </dx-validator>
       </dx-text-box>
      </div>
     </div>
     <div class="dx-field">
      <div class="dx-field-label">Password</div>
      <div class="dx-field-value">
       <dx-text-box :value.sync="password" mode="password" v-model="password">
        <dx-validator>
         <dx-required-rule />
        </dx-validator>
       </dx-text-box>
      </div>
     </div>
    </div>
    <div class="dx-fieldset">
     <div class="right">
      <div class="button" align="right">
       <dx-button id="button" text="Login" :use-submit-behavior="true" type="success" />
       <dx-button text="Next" type="success" @click="$router.replace('/list')" />
      </div>
     </div>
    </div>
   </form>
  </div>
 </div>
</template>

<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>
<script>
import { DxTextBox, DxButton } from "devextreme-vue";
import { DxValidator, DxRequiredRule } from "devextreme-vue/validator";

import notify from "devextreme/ui/notify";
import axios from "axios";
var md5 = require("md5");

export default {
 components: {
  DxTextBox,
  DxButton,
  DxValidator,
  DxRequiredRule
 },

 data() {
  return {
   birthDateOptions: { width: "100%" },

   username: "",
   password: "",

   buttonOptions: {
    text: "Login",
    type: "success",
    useSubmitBehavior: true
   },
   passwordOptions: {
    mode: "password"
   },

   groupedItems: {
    systemInformation: [
     "ID",
     "FirstName",
     "LastName",
     "HireDate",
     "Position",
     "OfficeNo"
    ]
   },

   AuthorizationModel: {
    UserModel: [
     {
      person_id: "",
      user_id: "",
      company_name: "",
      job_designation: ""
     }
    ],

    token: {
     token: ""
    }
   },

   phoneOptions: { mask: "+1 (000) 000-0000" },
   notesOptions: { height: 140 }
  };
 },
 methods: {
  onFormSubmit(e) {
   var url = "http://192.168.2.9:3000/user/login";
   const data = {
    username: btoa(this.username),
    password: btoa(md5(this.password))
   };

   axios.post(url, data).then(response => {
    console.log(JSON.stringify(response));
    this.AuthorizationModel = response["data"];
   });

   this.showNotification();
   this.$router.push("/list");

   e.preventDefault();
  },

  showNotification() {
   notify(
    {
     message: "Logged in as " + this.username,
     position: {
      my: "center top",
      at: "center top"
     }
    },
    "success",
    500
   );
  }
 },

 encodeMD5() {}
};
</script>
<style scoped>
.widget-container {
 margin: auto;
 margin-top: 150px;
 height: 230px;
 width: 350px;
 background-color: rgba(191, 191, 191, 0.15);
 padding: 20px;
 /* display: inline-block; */
}

.dx-field {
 width: 200px;
}

.dx-field-value {
 width: 400px;
}

.dx-field-label {
 width: 80px;
}

.right {
 /* float: right; */
 margin: auto;
}

.input.dx-texteditor-input {
 width: 150px;
 padding: auto;
}

.dx-textbox {
 width: 200px;
}

/* .dx-fieldset {
 width: 400px;
} */
</style>
