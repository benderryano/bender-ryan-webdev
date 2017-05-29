(function () {
    angular
        .module('WAM')
        .controller('pageEditController', pageEditController);
    
    function pageEditController($routeParams,
                                  pageService,
                                  $location) {

        var model = this;
        model.pageId = $routeParams['pageId'];
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];

        // event handlers
        model.createPage = createPage;
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        function init() {
            model.pages = pageService.findAllPagesForWebsite(model.websiteId);
        }
        init();

        // implementation
        function createPage(page) {
            pageService.createPage(page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }

        function updatePage(page) {
            pageService.updatePage(page);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }
    }
})();