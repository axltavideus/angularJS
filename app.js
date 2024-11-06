// app.js
angular.module('demoApp', [])
    .controller('DemoController', function ($scope) {
        // Sample data for ng-repeat
        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        // For ng-show/ng-hide
        $scope.isVisible = true;

        // For ng-class
        $scope.isHighlighted = false;

        // For ng-style
        $scope.textColor = 'blue';

        // Example function for ng-click
        $scope.sayHello = function () {
            alert('Hello from ng-click!');
        };

        // For ng-submit
        $scope.submitForm = function () {
            alert('Form submitted!');
        };

        $scope.user = {
            role: 'guest' // Default role sebagai 'guest'
        };
    });
