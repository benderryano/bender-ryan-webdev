(function () {
    angular
        .module('WAM')
        .controller('pageNewController', pageNewController);
    
    function pageNewController($routeParams,
                                  pageService,
                                  $location) {

        var model = this;
        model.pageId = $routeParams['pageId'];
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];

        // event handlers
        model.createPage = createPage;

        function init() {
            model.pages = pageService.findAllPagesForWebsite(model.websiteId);
        }
        init();

        // implementation
        function createPage(websiteId, page) {
            pageService.createPage(websiteId, page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }
    }
})();