sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, ResourceModel, JSONModel) {
	"use strict";

	return UIComponent.extend("se.openui5.helloworld.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);
			
			var i18nModel = new ResourceModel({
				bundleName :"se.openui5.helloworld.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		
			var oDataModel={
				salutation: "",
				name:""
			}
			var oJSONModel = new JSONModel(oDataModel);
			this.setModel(oJSONModel);
		}


	});

});