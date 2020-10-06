sap.ui.define([
	"sap/ui/base/Object"
], function (Object) {
	
	return Object.extend("lab15L15UI5school.utils.ListFilterDialog", {
		
		constructor: function(oOwnerController) {
			Object.prototype.constructor.call(this);
			this.oView = oOwnerController.getView();
			this.oOwnerController = oOwnerController;
			this.sFragment = "lab15/L15UI5school.view.fragments.ListFilterDialog";
			this.oModel = this.oView.getModel();
			this.getDialog();
		},
		
		getDialog: function() {
			if (!this.oDialog) {
				this.oDialog = sap.ui.xmlfragment(this.oView.getId(), this.sFragment, this);
				this.oView.addDependent(this.oDialog);
				this.oDialog.setBusyIndicatorDelay(0);
			}
			return this.oDialog;
		},
		
		open: function() {
			this.getDialog().open();
		},
		
		close: function() {
			this.getDialog().close();
		},
		
		filter: function() {
			var sValue = this.oView.byId("idFilterValue").getValue();
			var sFilter = this.oView.byId("idFilter").getValue();
			this.getDialog().close();
			this.oOwnerController.filterByCity(sFilter, sValue);
		}
	});
}); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	