sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException",
	"lab15/L15UI5school/utils/ListFilterDialog"
], function (Controller, JSONModel, SimpleType, ValidateException,  ListFilterDialog) {
	"use strict";

	return Controller.extend("lab15.L15UI5school.controller.MainView", {
		onInit: function () {
			this.ListFilterDialog = new ListFilterDialog(this);
		},
		
		pressFilter: function() {
			this.ListFilterDialog.open();
		},
		
		pressLoad: function(){
			var oJSONModel = new JSONModel();
			//loadData(sURL, oParameters?, bAsync?, sType?, bMerge?, bCache?, mHeaders?) : void
			//loadData is used in sync mode. The Model will be assigned after loadData.
			oJSONModel.loadData("model/example.json",undefined ,false);
			this.getView().setModel(oJSONModel, "carsModel");
		},
		pressItem: function(oEvent){
			var path = oEvent.getParameter("listItem").getBindingContextPath();
			this.byId("idForm").bindElement("carsModel>" + path);
		},
		sorting: function(sNameField){
			var oSorter = new sap.ui.model.Sorter({path: sNameField});
			this.byId("idList").getBinding("items").sort([oSorter]);
		},
		sortByName: function(){
			this.sorting("name");
		},
		
		speedFormatter: function(sValue) {
			return sValue + " км/ч";
		},
		
		ownerFormatter: function(sValue) {
			var splitValue = sValue.split(" ");
			return splitValue[0] + " " + splitValue[1][0] + ". " + splitValue[2][0] + ".";
		},
		
		cardFormatter: function(sValue) {
			return sValue.slice(0,4) + "-" + sValue.slice(5,9) + "-" + sValue.slice(10,14) + "-" + sValue.slice(15,19);
		},
		
		filterByCity: function(sFilter, sValue){
//			var oForm = this.byId("idForm");
//			var oObjectBinding = oForm.getObjectBinding("carsModel");
//			var sCurrentPath = oObjectBinding.getPath();
//			var oModel = this.getView().getModel("carsModel");
			var oFilter = new sap.ui.model.Filter(sFilter, function(value){
				return (value === sValue);
			});
			this.byId("idList").getBinding("items").filter([oFilter]);
		}
	});
});




















