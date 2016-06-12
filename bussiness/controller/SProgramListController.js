/**
 * Created by py on 2016/6/2.
 */
export default class SProgramListController {
    constructor($scope,HttpService,$stateParams) {
        this.scope = $scope;
        this.currentPage = 1;
        var category = $stateParams.category;
        this.query = {
            sourceName:"",
            merge :"",
            status : "",
            order : "updated_at",
            sort : "-1",
            title : "",
            pageNo : this.currentPage,
            category : category
        };
        this.httpService = HttpService;
        this.scope.$watch("list.query",()=>{
            this.queryData();
        },true)
    }

    queryData(){
        const query = {};
        for(var i in  this.query){
            if(this.query[i]){
                query[i] = this.query[i]
            }
        }
        var promise = this.httpService.sendRequest("get","v1/sPrograms",query);
        promise.then(data =>{
            this.sum = data.sum;
            this.programList = data.data;
            this.currentPage = data.pageNo;
        },e =>{
            alert("查询失败")
        })
    }

    sortTable (arg) {
        this.reverse = (this.orderStyle === arg) ? !this.reverse : false;
        if(this.orderStyle === arg) {
            this.direction = -this.direction;
        } else {
            this.direction = -1;
            this.orderStyle = arg;
        }
    };

    pageSelect(pageNo){
        this.query.pageNo = this.currentPage;
        this.queryData();
    }
}
SProgramListController.$inject = ["$scope","HttpService","$stateParams"];
