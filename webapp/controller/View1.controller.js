sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("L7ModelsL7ModelsBindingsPractice.controller.View1", {
		onInit: function () {

		},
		pressLoad: function(){
			var oJSONModel = new JSONModel();
			//loadData(sURL, oParameters?, bAsync?, sType?, bMerge?, bCache?, mHeaders?) : void
			//loadData is used in sync mode. The Model will be assigned after loadData.
			oJSONModel.loadData("model/example.json",undefined ,false);
			this.getView().setModel(oJSONModel, "companiesModel");
		},
		pressItem: function(oEvent){
			var path = oEvent.getParameter("listItem").getBindingContextPath();
			this.byId("idForm").bindElement("companiesModel>" + path);
		},
		sorting: function(sNameField){
			var oSorter = new sap.ui.model.Sorter({path: sNameField});
			this.byId("idList").getBinding("items").sort([oSorter]);
		},
		sortByName: function(){
			this.sorting("name");
		},
		sortByCity: function(){
			this.sorting("city");
		},
		filterByCity: function(){
			var oForm = this.byId("idForm");
			var oObjectBinding = oForm.getObjectBinding("companiesModel");
			var sCurrentPath = oObjectBinding.getPath();
			var oModel = this.getView().getModel("companiesModel");
			var sCityName = oModel.getProperty(sCurrentPath + "/city").toUpperCase();
			var oFilter = new sap.ui.model.Filter("city", function(value){
				return (value === sCityName);
			});
			this.byId("idList").getBinding("items").filter([oFilter]);
		}
	});
});
