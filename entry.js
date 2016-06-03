/**
 * Created by py on 2016/5/31.
 */
import angular from "angular";
import uiRouter from  "angular-ui-router"
import "bootstrap-webpack";
import "./style.css";
import bussiness from './bussiness';

var app = angular.module("app",[bussiness]);
app.config(['$urlRouterProvider','$locationProvider',function ($urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}]);