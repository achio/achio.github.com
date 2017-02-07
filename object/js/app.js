/*
 * @Author: ITACH
 * @Date:   2017-02-07 15:42:02
 * @Last Modified by:   ITACH
 * @Last Modified time: 2017-02-07 16:10:30
 */

'use strict';
let myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl: './resume.html'
			})
			.when('/oldResume',{
				templateUrl : './oldResume.html'
			})
			.otherwise('/');
	}
]);