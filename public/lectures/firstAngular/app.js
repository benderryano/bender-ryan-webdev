/**
 * Created by Ryan on 5/10/17.
 */


(function () { //IIFE Function (Immediately-invoked function expression)
    angular
        .module("TodoApp", []) // with one argument - it's a get. with two it's a set
        .controller("TodoListController", TodoListController);

    function TodoListController($scope) {

        $scope.todo = {title: "initial title"}
        $scope.todos = [];
        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;


        function removeTodo(todo) { //index) { //used to take in an index, now takes in a whole todo and gets its index
            var index = $scope.todos.indexOf(todo);
            $scope.todos.splice(index, 1);

        }


        function addTodo(todo) {

            var newTodo = {
                title: todo.title
            };



            $scope.todos.push(newTodo);

            console.log($scope.todos);
        }
    }


})();