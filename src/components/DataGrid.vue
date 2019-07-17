<template>
 <v-container>
  <dx-data-grid :show-borders="true" :data-source="data" :remote-operations="true" :height="600">
   <dx-column data-field="branch" data-type="string" caption="Branch"></dx-column>
   <dx-column data-field="documentNo" data-type="string" caption="Document No."></dx-column>
   <dx-column data-field="applicationDate" data-type="date" caption="Application Date">
    <dx-header-filter :group-interval="100" />
   </dx-column>
   <dx-column data-field="cierDate" datay-type="date" caption="CIER Date">/></dx-column>
   <dx-column data-field="age" caption="Age" data-type="number" />
   <dx-column data-field="customer" caption="Customer" data-type="string" />
   <dx-column data-field="model" caption="Model" data-type="string" />
   <dx-column data-field="status" caption="Status" data-type="string" />
   <dx-column data-field="statusDate" caption="Status Date" data-type="date" />
   <dx-column data-field="remarks" caption="Remarks" data-type="string" />
   <dx-filter-row :visible="true" />
   <dx-header-filter :visible="true" />
   <dx-group-panel :visible="true" />
   <dx-scrolling mode="virtual" />
   <dx-editing :allow-adding="true" :allow-updating="true" :allow-deleting="false" mode="row">
    <button>press</button>
   </dx-editing>
   <dx-grouping :auto-expand-all="false" />
   <dx-summary>
    <dx-group-item summary-type="count" />
   </dx-summary>
  </dx-data-grid>
 </v-container>
</template>
<script>
import {
 DxDataGrid,
 DxColumn,
 DxEditing,
 DxFilterRow,
 DxHeaderFilter,
 DxGroupPanel,
 DxGrouping,
 DxScrolling,
 DxSummary,
 DxLookup,
 DxTotalItem,
 DxGroupItem,
 DxStringLengthRule,
 DxRequiredRule,
 DxRangeRule,
 DxValueFormat
} from "devextreme-vue/data-grid";

import { createStore } from "devextreme-aspnet-data-nojquery";
import axios from "axios";

const url = "http://localhost:8080/getApproved";

// const dataSource = createStore({
//  key: "OrderID",
//  loadUrl: `${url}/Orders`,
//  insertUrl: `${url}/InsertOrder`,
//  updateUrl: `${url}/UpdateOrder`,
//  deleteUrl: `${url}/DeleteOrder`,
//  onBeforeSend: (method, ajaxOptions) => {
//   ajaxOptions.xhrFields = { withCredentials: true };
//  }
// });

// const customersData = createStore({
//  key: "Value",
//  loadUrl: `${url}/CustomersLookup`,
//  onBeforeSend: (method, ajaxOptions) => {
//   ajaxOptions.xhrFields = { withCredentials: true };
//  }
// });

export default {
 components: {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxFilterRow,
  DxHeaderFilter,
  DxGroupPanel,
  DxGrouping,
  DxScrolling,
  DxSummary,
  DxLookup,
  DxTotalItem,
  DxGroupItem,
  DxStringLengthRule,
  DxRangeRule,
  DxRequiredRule,
  DxValueFormat
 },
 data() {
  return {
   url,
   data: []
  };
 },

 created() {
  axios
   .get(url, {
    method: "GET",
    headers: {
     "Content-type": "application/json; charset=UTF-8",
     "Access-Control-Allow-Origin": "http://localhost:8080"
    }
   })
   .then(response => {
    console.log(JSON.stringify(response));
    this.data = response["data"];
   })
   .catch(error => console.log(error));
 }
};
</script>
