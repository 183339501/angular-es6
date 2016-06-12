/**
 * Created by py on 2016/6/2.
 */
 export default class SProgramEditController {
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
        });
    }

    getMergeProgram (mProgramId) {
        var promise = this.httpService.sendRequest("get",`v1/sPrograms/${mProgramId}`);
        promise.then(data=>{
            this.merge = data;
        });
    }

    remove (index,tag) {
       if(confirm("确定删除吗？")){
           this.program[tag].splice(index,1);
       }
    }

    btnAdd (model,tag) {
        if(model)
            this.program[tag].push(model)
    }
    enterAdd(model,e,tag){
        if(model&&e.keyCode===13){
            this.program[tag].push(model);
        }
    }

    save(e) {
        var target = $(e.target);
        target.button('loading')
        var promise = this.httpService.sendRequest("put","v1/sPrograms",this.program);
        promise.then(data=>{
            target.button('reset');
            alert("保存成功")
        },err=>{
            target.button('reset');
            alert("保存失败");
        })
    }

}
SProgramEditController.$inject = ["$scope","HttpService","$stateParams"];