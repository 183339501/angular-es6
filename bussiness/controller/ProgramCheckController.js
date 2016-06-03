/**
 * Created by py on 2016/6/2.
 */
 export default class ProgramCheckController {
    constructor ($scope,HttpService,$stateParams) {
        this.scope = $scope;
        this.httpService = HttpService;
        this.pid = $stateParams.pid;
        this.initData();
    }

    initData () {
        var promise = this.httpService.sendRequest("get","/v1/sPrograms/"+this.pid);
        promise.then(data=>{
            this.program = data;
        })
    }

}
ProgramCheckController.$inject = ["$scope","HttpService","$stateParams"];