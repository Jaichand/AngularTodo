(function(){
  var app = angular.module('app', []);
  app.controller('todoController',function(){
    var self = this;
    self.todoList = [{todo:"jaysamriya", date: new Date()}];
    self.addTodo = function(){
      self.todoList.push({todo: self.todo, date: new Date()}); 
      self.todo = '';
    }; 
    self.remove = function(task){
      self.todoList = self.todoList.filter(function(data){
        return data.todo !== task.todo;
      });
    }
  }); 
})();

