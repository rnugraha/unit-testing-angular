
describe('TodoService', function () {
  var todos;
  var todoService;
  var fakeQ, httpBackend, fakeHttp;

  beforeEach(function () {
    todos = [initialTodo];
  });

  beforeEach(inject(function (_$q_, _$httpBackend_, _$http_) {
    fakeQ = _$q_;
    httpBackend = _$httpBackend_;
    fakeHttp = _$http_;
    todos = [initialTodo];
    todoService = new TodoService(fakeHttp, fakeQ);
  }));

  it('should add a todo to the list', function () {
    var res = todoService.addTodo('Hello', todos);
    expect(res.length).toEqual(2);
    expect(res[0].id).toEqual(1);
  });

  it('should complete a todo', function () {
    var res = todoService.completeTodo(0, todos);
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(true);
  });

  it('should delete a todo', function () {
    var res = todoService.deleteTodo(0, todos);
    expect(res.length).toEqual(0);
  });

  it('should edit a todo', function () {
    var res = todoService.editTodo(0, 'Changed it', todos);
    expect(res.length).toEqual(1);
    expect(res[0].text).toEqual('Changed it');
  });

  it('should complete all todos', function () {
    var res = todoService.addTodo('Hello', todos);
    res = todoService.completeAll(res);
    res.forEach(function (todo) {
      expect(todo.completed).toEqual(true);
    });
  });

  it('should clear all completed todos', function () {
    var res = todoService.addTodo('Hello', todos);
    res = todoService.completeTodo(0, res);
    res = todoService.clearCompleted(res);
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(false);
  });

  describe('::loadTodoJSON', function () {

    var flushHttoBackend = function () {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    };

    it ('should failed', function () {
      httpBackend.when('GET', 'data/todoJSON.json').respond(404);
      spyOn(todoService.$http, 'get').and.callThrough();
      todoService.loadTodoJSON().then(function (res) {
        expect(res).toEqual(undefined)
      }, function (e) {
        expect(e).toEqual('Error loading todoJSON.')
      });

      flushHttoBackend();
    });

    it ('should responds data', function () {
      var _res = 'alo';
      httpBackend.when('GET', 'data/todoJSON.json').respond(_res);
      spyOn(todoService.$http, 'get').and.callThrough();
      todoService.loadTodoJSON().then(function (res) {
        expect(res.data).toEqual('alo');
      }, function (e) {
        expect(e).toEqual(undefined)
      });

      flushHttoBackend();
    });


  });

});
