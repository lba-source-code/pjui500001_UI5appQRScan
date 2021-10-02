/*global QUnit*/

sap.ui.define([
	"pjui500001/controller/ViewAppQRScan.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewAppQRScan Controller");

	QUnit.test("I should test the ViewAppQRScan controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
