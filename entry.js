/**
 * Created by py on 2016/5/31.
 */
import angular from "angular";
import uiRouter from  "angular-ui-router"
import "bootstrap-webpack";
import "./style.css";
import bussiness from './bussiness';

/**menu*/
$(".accordion-toggle").on("click",function (e) {
    var $this = $(this);
    var expand = $this.attr("aria-expanded");
    if(expand==="true"){
        $this.siblings('i').removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
    }else {
        $this.siblings('i').removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
    }
    $this.parent("li").siblings("li").find("ul").removeClass("in");
});
var app = angular.module("app",[bussiness]);
app.config(['$urlRouterProvider','$locationProvider',function ($urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/?category=1');
}]);
