sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("lab5.L05UI5school.controller.View1", {
		onInit: function () {

		},
		
		onClickAdd: function() {
			var oInput = this.byId("idInput");
			oInput.setValue(oInput.getDescription() + oInput.getValue());
		},
		
		onClickClear: function() {
			var oInput = this.byId("idInput");
			oInput.setValue("Hi!");
		}
	});
});