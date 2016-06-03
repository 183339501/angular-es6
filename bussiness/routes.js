/**
 * Created by py on 2016/6/2.
 */
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            template: require('./template/program-list.html'),
            controller: 'MediaListController',
            controllerAs: 'list'
        })
        .state("check",{
            url:"/check/:pid",
            template:require("./template/check-program.html"),
            controller:"ProgramCheckController",
            controllerAs:"check"
        })
}