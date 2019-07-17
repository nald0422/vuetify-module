<template>
 <div>
  <v-container>
   <v-layout row wrap>
     <v-flex xs12>
     <dx-data-grid id="grid-container" :show-borders="true" :data-source="dataSource">
      <dx-column :width="100" data-field="personId" caption="Person ID" data-type="string" />
      <dx-column data-field="personName" caption="Peron Name" data-type="string" />
      <dx-column :width="100" data-field="personAge" caption="Person Age" data-type="number" />
      <dx-master-detail :enabled="true" template="masterDetailTemplate" />
      <div slot="masterDetailTemplate" slot-scope="{ data: employee }">
       <detail-template :template-data="employee" />
      </div>
     </dx-data-grid>
    </v-flex>
   </v-layout>
  </v-container>
 </div>
</template>
<script>
import { DxDataGrid, DxColumn, DxMasterDetail } from "devextreme-vue/data-grid";

import DetailTemplate from "./DetailTemplate.vue";
import service from "./data.js";
import axios from "axios";

const getPersonsUrl = "http://localhost:8080/Persons";

export default {
 components: {
  DxDataGrid,
  DxColumn,
  DxMasterDetail,
  DetailTemplate
 },
 data() {
  return {
   dataSource: []
  };
 },

 created() {
  axios
   .get(getPersonsUrl, {
    method: "GET",
    headers: {
     "Content-type": "application/json; charset=UTF-8",
     "Access-Control-Allow-Origin": "*"
    }
   })
   .then(response => {
    this.dataSource = response["data"];
   })
   .catch(error => console.log(error));
 }
};
</script>
<style>
#grid-container {
 height: 440px;
}
</style>
