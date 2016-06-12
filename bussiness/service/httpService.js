/**
 * Created by py on 2016/6/2.
 */
import angular from "angular";
class HttpService {
    constructor($q,$http) {
        this.q = $q;
        this.http = $http;
    }

    sendRequest(method,url,params) {
        var def = this.q.defer();
        var config = {
            method:method,
            url:url,
            data : params
        }
        if(method ==="get"){
            config = {
                method:method,
                url:url,
                params : params
            }
        }
        this.http(config).success(function (data) {
            def.resolve(data);
        }).error(function (e) {
            def.reject(e);
        });
        return def.promise;
    }
}

HttpService.$inject = ["$q","$http"];
export default angular.module('app.services', [])
    .service('HttpService', HttpService)
    .name;