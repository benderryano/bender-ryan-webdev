(function () {
    angular
        .module('WAM')
        .factory('pageService', pageService);
    
    function pageService() {

        var pages = [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ]


        return {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            updatePage: updatePage,
            deletePage: deletePage,
            findAllPagesForWebsite: findAllPagesForWebsite
        };
        
        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            page.created = new Date();
            page.updated = new Date();
            page.push(page);
        }
        
        function updatePage(pageId, page) {
            
        }
        
        function deletePage(pageId) {
            var page = pages.find(function (page) {
                return page._id === pageId;
            });
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }

        function findPageByWebsiteId(websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            });
        }

        function findAllPagesForWebsite(websiteId) {
            var resultSet = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    resultSet.push(pages[p]);
                }
            }
            return resultSet;
        }

    }
})();