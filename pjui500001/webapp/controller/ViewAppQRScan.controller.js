sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ndc/BarcodeScanner"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast,BarcodeScanner) {
		"use strict";

		return Controller.extend("pjui500001.controller.ViewAppQRScan", {
			onInit: function () {
				//lbaIO comment
				console.log('lbaIO log: onInit');

				sap.m.MessageToast.show("lbaIO - Welcome the QR scan app :)", {
					duration: 3000,                  // default
					width: "15em",                   // default
					my: "center",       		     // default
					at: "center",		             // default
					of: window,                      // default
					offset: "0 0",                   // default
					collision: "fit fit",            // default
					onClose: null,                   // default
					autoClose: true,                 // default
					animationTimingFunction: "ease", // default
					animationDuration: 1000,         // default
					closeOnBrowserNavigation: true   // default
				});
			},
			onPress: function (oEvent) {
				//lbaIO comment
				console.log('lbaIO log: onPress ');
				console.log('lbaIO log: onPress ' + Object.values(oEvent));
				console.log('lbaIO log: onPress ' + Object.values(Object.values(oEvent)[2]));
				console.log('lbaIO log: onPress ' + oEvent.getSource());
				console.log('lbaIO log: onPress ' + oEvent.getSource().data("customattribute"));
				var vr_obj = oEvent.getSource().data("customattribute");
				console.log(Object.values(vr_obj));
				sap.ndc.BarcodeScanner.scan(
					function (mResult) {
					   /*alert("We got a bar code\n" +
							 "Result: " + mResult.text + "\n" +
							 "Format: " + mResult.format + "\n" +
							 "Cancelled: " + mResult.cancelled);*/

							 sap.m.MessageToast.show("lbaIO - QR Code:\n Plant: " + Object.values(vr_obj)[0] + "\n Mov. Type: " + Object.values(vr_obj)[1] + "\n" + mResult.text, {
								duration: 6000,                  // default
								width: "15em",                   // default
								my: "center",       		     // default
								at: "center",		             // default
								of: window,                      // default
								offset: "0 0",                   // default
								collision: "fit fit",            // default
								onClose: null,                   // default
								autoClose: true,                 // default
								animationTimingFunction: "ease", // default
								animationDuration: 1000,         // default
								closeOnBrowserNavigation: true   // default
							});
							

					},
					
					function (Error) {
					   alert("Scanning failed: " + Error);
					},
					function (mParams) {
					   alert("Value entered: " + mParams.newValue);
					},
					"Enter Product Bar Code"
				);

				
				
				

			}
		});
	});
