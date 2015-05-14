var angular = require('angular');

var dialogusModule = angular.module('ui.dialogus', []);

dialogusModule.factory('DialogService', ['$document', '$compile', '$controller', '$http', '$rootScope', '$q', '$templateCache',
    function($document, $compile, $controller, $http, $rootScope, $q, $templateCache) {
		var body = $document.find('body');

		function DialogService() {
		      var self = this;

		      this.show = function(options) {
		      	body.append('Test');
		      }
		}

		return new DialogService();
    }	
]);

