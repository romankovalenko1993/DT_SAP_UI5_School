sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException"
], function (Controller, JSONModel, SimpleType, ValidateException) {
	"use strict";

	return Controller.extend("lab13.L13UI5school.controller.View1", {
		onInit: function () {

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
		}
/*		
		transmissionType: SimpleType.extend("L13UI5school.TransmissonType", {
			formatValue: function(sValue) {
				var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
				switch(sValue) {
					case "AT":
						return oBundle.getText("automatic");
					case "MT":
						return oBundle.getText("manual");
					case "CVT":
						return oBundle.getText("variable");
					default:
					    return oBundle.getText("notDefined");
				}
			},
			parseValue: function() {
				
			},
			validateValue: function(){
				
			}
		})*/
	});
});
















