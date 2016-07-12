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

    completeAll: function (todos) {
        var areAllMarked = todos.every(function (todo) {
            return todo.completed;
        });
        return todos.map(function (todo) {
            return Object.assign({}, todo, {completed: !areAllMarked});
        });
    },

    clearCompleted: function (todos) {
        return todos.filter(function (todo) {
            return todo.completed === false;
        });
    },

    loadTodoJSON: function (todos) {
        var deferred = this.$q.defer();
        this.$http.get('data/todoJSON.json').then(function (res) {
            deferred.resolve(res)
        }, function (err) {
            deferred.reject('Error loading todoJSON.')
        });
        return deferred.promise;
    }

};
