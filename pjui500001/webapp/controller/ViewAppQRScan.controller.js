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
			onPress: function () {
				//lbaIO comment
				console.log('lbaIO log: onPress');

				sap.ndc.BarcodeScanner.scan(
					function (mResult) {
					   /*alert("We got a bar code\n" +
							 "Result: " + mResult.text + "\n" +
							 "Format: " + mResult.format + "\n" +
							 "Cancelled: " + mResult.cancelled);*/

							 sap.m.MessageToast.show("lbaIO - QR Code:\n" + mResult.text, {
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
