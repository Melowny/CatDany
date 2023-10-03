angular.module('Cards', ['ngSanitize'])
    .directive('card', function () {
        return {
            restrict: 'E',
            template: '<div ng-class="color">' +
                '<div class="ellipse"></div>' +
                '<div class="content" ng-class="color" ng-bind-html="content"></div>' +
                '<div class="small-content" ng-class="color" ng-bind-html="smallContent"></div>' +
                '<div class="small-content-reverse" ng-class="color" ng-bind-html="smallContent"></div>' +
                '</div>',
            scope: {
                type: '@',
                content: '@',
                smallContent: '@',
                color: '@'
            },
            link: function (scope, element, attrs, controller) {
                if (scope.type === 'reverse') {
                    scope.color = scope.color || 'black';
                    scope.content = $('#reverse-template').html();
                    scope.smallContent = scope.smallContent || scope.content;
                }
            }
        };
    });
