var initialTodo = {
  text: 'Use AngularJS',
  completed: false,
  id: 0
};

/** @ngInject */
function TodoService($http, $q) {
    this.$http = $http;
    this.$q = $q;
}

TodoService.prototype = {
  addTodo: function (text, todos) {
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text: text
      }
    ].concat(todos);
  },

  completeTodo: function (id, todos) {
    return todos.map(function (todo) {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  },

  deleteTodo: function (id, todos) {
    return todos.filter(function (todo) {
      return todo.id !== id;
    });
  },

  editTodo: function (id, text, todos) {
    return todos.map(function (todo) {
      return todo.id === id ?
        Object.assign({}, todo, {text: text}) :
        todo;
    });
  },

    /**
     * Complete all todos
     * @param todos
     */
    completeAll: function (todos) {
        window.alert('it should complete all todos');
        return todos;
    },

    /**
     * Clear only completed todos
     * @param todos
     */
    clearCompleted: function (todos) {
        window.alert('it should clear completed todos');
        return todos;
    },

    /**
     * Load todos from JSON file (todoJSON.json)
     * Hint: use $q and $http
     */
    loadTodoJSON: function (todos) {
        window.alert('it should load todos from JSON file');
    }

};
