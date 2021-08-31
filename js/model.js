class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.currentId = 0;
  }

  setView(view) {
    this.view = view;
  };

  getTodos() {
    return this.todos;
  };

  addTodo(title, description) {
    const todo ={
        id: this.currentId++,
        title, 
        description, 
        completed: false, 
    };
    this.todos.push(todo);
    console.log(this.todos);
    return {...todo};
  };

  findTodo(id){
    return this.todos.findIndex((todo) => todo.id === id);
  }

  toggleCompleted (id) {
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    console.log();
  }

  removeTodo(id){
      const index = this.findTodo(id);
      this.todos.splice(index, 1); 
  };
};

export default Model;
