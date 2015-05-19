var angular = require('angular');

var dialogusModule = angular.module('ui.dialogus', []);

dialogusModule.factory('DialogService', ['$document', '$compile', '$controller', '$http', '$rootScope', '$q', '$templateCache',
    function($document, $compile, $controller, $http, $rootScope, $q, $templateCache) {
		var body = $document.find('body');

		function DialogService() {
		      var self = this;
		      this._dialogHost = null;

		      this.show = function(options) {
		      	this._verifyDialogHostDirective();
		      	this._dialogHost.show(options);
		      	body.append('Test');
		      }

		      this._verifyDialogHostDirective = function() {
		      	if(!this._dialogHost) {
		      		body.getElementById('appBusyIndicator');
		      	}
		      }
		}

		return new DialogService();
    }	
]);

