/**
 * Created by py on 2016/6/2.
 */
 export default class MergeDetailController {
    constructor ($scope,HttpService,$stateParams) {
        this.scope = $scope;
        this.httpService = HttpService;
        this.pid = $stateParams.pid;
        this.fid = $stateParams.fid;
        this.initData();
    }

    initData () {
        this.getSourceProgram(this.pid);
        this.getMergeProgram(this.fid)
    }
    getSourceProgram (sProgramId) {
        var promise = this.httpService.sendRequest("get",`/v1/sPrograms/${sProgramId}`);
        promise.then(data=>{
            this.sProgram = data;
        },err=>{
            alert("查询失败");
        });
    };

    getMergeProgram (mProgramId) {
        var promise = this.httpService.sendRequest("get",`v1/mPrograms/${mProgramId}`);
        promise.then(data=>{
            this.mProgram = data;
        },err=>{
            alert("查询失败");
        });
    }

    submit () {
        var promise = this.httpService.sendRequest("patch","v1/mPrograms",this.sProgram);
        promise.then(data=>{
            alert("保存成功");
            history.go(-1);
        },err=>{
            alert("保存失败");
        });
    }
}

MergeDetailController.$inject = ["$scope","HttpService","$stateParams"];