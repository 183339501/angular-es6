/**
 * Created by py on 2016/6/2.
 */
 export default class SProgramDetailController {
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
        },err=>{
            alert("查询失败");
        })
    }

    getMergeProgram (mProgramId) {
        var promise = this.httpService.sendRequest("get",`v1/mPrograms/${mProgramId}`);
        promise.then(data=>{
            this.merge = data;
        });
    }


    //新节目
    newItem () {
        var paramProgram = angular.copy(this.program);
        paramProgram.mProgramId = paramProgram.sProgramId;
        delete  paramProgram.sProgramId;
        var promise = this.httpService.sendRequest("post","v1/mPrograms",paramProgram);
        promise.then(data=>{
            alert("保存新节目成功");
        },err=>{
            alert("保存新节目失败");
        });
    }

    //暂不处理
    unresovle () {

    }

}
SProgramDetailController.$inject = ["$scope","HttpService","$stateParams"];