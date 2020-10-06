/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"lab07/L07UI5school/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});