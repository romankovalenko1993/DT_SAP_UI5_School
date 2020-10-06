/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"lab5/L05UI5school/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});