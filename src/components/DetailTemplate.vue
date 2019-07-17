<template>
 <div>
  <div class="master-detail-caption">{{ detailInfo }}</div>
  <dx-data-grid
   :data-source="dataSource"
   :show-borders="true"
   :column-auto-width="true"
   :column-auto-heigh="true"
  >
   <dx-column data-field="children.childId" data-type="string" caption="Child ID" />
   <dx-column data-field="children.childName" data-type="string" caption="Child Name" />
   <dx-column data-field="children.childAge" data-type="number" caption="Child Age"/>
  </dx-data-grid>
 </div>
</template>
<script>
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import service from "./data.js";
import axios from "axios";

const getPersonsUrl = "http://localhost:8080/Persons";
const tasks = service.getTasks();

export default {
 components: { DxDataGrid, DxColumn },
 props: {
  templateData: {
   type: Object,
   default: () => {}
  }
 },
 data() {
  let { FirstName } = this.templateData.data;

  return {
   dataSource: [],
   detailInfo: `${FirstName}'s Children`
  };
 },
 methods: {
  // completedValue(rowData) {
  //   return rowData.Status === 'Completed';
  // },
  // getTasks(key) {
  //   return new DataSource({
  //     store: new ArrayStore({
  //       data: tasks,
  //       key: 'childId'
  //     }),
  //     filter: ['personId', '=', key]
  //   });
  // },
  loadPersons() {
   axios
    .get(getPersonsUrl, {
     method: "GET",
     headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
     }
    })
    .then(response => {
     console.log(getPersonsUrl);
     this.dataSource = response["data"];
    })
    .catch(error => console.log(error));
  },

  created() {
   loadPersons();
   console.log("SUBLIST : " + this.dataSource);
  }
 }
};
</script>
<style>
.master-detail-caption {
 padding: 0 0 5px 10px;
 font-size: 14px;
 font-weight: bold;
}
</style>
