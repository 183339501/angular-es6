/**
 * Created by py on 2016/6/2.
 */
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('slist', {
            url: '/?category',
            template: require('./template/sprogram-list.html'),
            controller: 'SProgramListController',
            controllerAs: 'list'
        })
        .state("sdetail",{
            url:"/sdetail/:pid",
            template:require("./template/sprogram-detail.html"),
            controller:"SProgramDetailController",
            controllerAs:"sdetail"
        })
        .state("sedit",{
            url:"/sedit/:pid",
            template:require("./template/sprogram-edit.html"),
            controller:"SProgramEditController",
            controllerAs:"sedit"
        })
        .state("mlist",{
            url:"/mlist?category",
            template:require("./template/mprogram-list.html"),
            controller:"MProgramListController",
            controllerAs:"mprogram"
        })
        .state("mdetail",{
            url:"/mdetail/:pid",
            template:require("./template/mprogram-detail.html"),
            controller:"MProgramDetailController",
            controllerAs:"mdetail"
        })
}