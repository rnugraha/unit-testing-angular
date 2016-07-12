
describe('service::TodoService', function () {
    var todos;
    var todoService;

    beforeEach(function () {
        todos = [initialTodo];
        todoService = new TodoService();
    });

    describe('function::addTodo', function () {
        it('should add a todo to the list', function () {
            var res = todoService.addTodo('Hello', todos);
            expect(res.length).toEqual(2);
            expect(res[0].id).toEqual(1);
        });
    });

    // it should complete a todo

    // it should delete a todo

    // it should edit a todo

    // it should complete all todos

    // it should clear all completed todos

    // it should load todoJSON


});
