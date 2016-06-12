/**
 * Created by py on 2016/6/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from "angular-ui-bootstrap";
import routes from './routes';
import SProgramListController from './controller/SProgramListController';
import SProgramDetailController from "./controller/SProgramDetailController";
import MProgramListController from "./controller/MProgramListController";
import MProgramDetailController from "./controller/MProgramDetailController";
import SProgramEditController from "./controller/SProgramEditController"
import HttpService from "./service/httpService";


export default angular.module('app.program', [uiRouter,uiBootstrap,HttpService])
    .config(routes)
    .controller('SProgramListController', SProgramListController)
    .controller("SProgramDetailController",SProgramDetailController)
    .controller("MProgramListController",MProgramListController)
    .controller("MProgramDetailController",MProgramDetailController)
    .controller("SProgramEditController",SProgramEditController)
    .filter("arrToString",function (){
        return function (val) {
            return val?val.toString():"";
        }
    })
    .filter("mergeFilter",function (){
        return function (val) {
            var mergeStr = "";
            switch (val){
                case 0:
                    mergeStr = "自动判断";
                    break;
                case 1:
                    mergeStr = "需要人工判断";
                    break;
                case 2 :
                    mergeStr = "已合并";
                    break;
            }
            return mergeStr
        }
    })
    .filter("orderClass",function () {
        return function (direction) {
            if (direction === -1)
                return "glyphicon-chevron-down";
            else
                return "glyphicon-chevron-up";
        }
    })
    .name;