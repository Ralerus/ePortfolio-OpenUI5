sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("se.openui5.helloworld.controller.App", {

		onInit: function(){
			this._oView = this.getView();
			this._oModel = this._oView.getModel();
			this._oWizard = this._oView.byId("myWizard");
		},

		onSelectionChanged: function (oEvent){
			var sSelectedValue = oEvent.getParameter("item").getText();

			if(sSelectedValue!="None"){
				this._oModel.setProperty("/salutation", sSelectedValue);
			}else{
				this._oModel.setProperty("/salutation","");
			}
			this._oWizard.nextStep();
		},

		onSubmitName: function (){
			if(this._oModel.getProperty("/name") !== ""){
				this._oWizard.nextStep();
			}else{
				MessageToast.show("Please enter a name!")
			}
		},

		onShowHello : function (){
			MessageToast.show("Hello "+this._oModel.getProperty("/salutation") + " " + this._oModel.getProperty("/name") + "!");
		}
    });
});