/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor()
    {
      this.list = []; 
      this.index=0;
    }
    add(todo)
    {
      list[index] = todo;
      index++;
    }
    remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.list.length) {
        this.list.splice(indexOfTodo, 1);
      }
    }
    update(todo,indexTask)
    {
      if(todoIndex>=0&&todoIndex<index)
      list[indexTask] = todo;
      else{
        throw new Error("Index Out of bound");
      } 
    }
    getAll(){
      return this.list;
    }
}
module.exports = Todo;
