sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, ResourceModel) {
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
		
		
		}


	});

});