import { readFromLS, writeToLS } from "./ls.js"
import {qs, onClick} from "./utilities.js"

let todoList = [];
    
export default class Todos {
    constructor() {
        this.ul = document.querySelector("#toDoCard");
        this.key = "toDoList";
      }

    addTodo(){
        let todo = document.querySelector("#toDo"); 
        saveTodo(todo.value, this.key);

        //Update list
        this.listTodos();

        // clear input of text
        todo.value = "";
    }

    removeTodo(number){
        const complete = todoList.find(({ id }) => id == number);
        let index = todoList.indexOf(complete);
        todoList.splice(index,  1);

        //Update list
        this.listTodos();

        

        //write todoList array to local storage.
        writeToLS(this.key, todoList);
    }


    completeTodo(number){
        let li = document.getElementById(number);
        li.classList.toggle("complete");

        const todo = todoList.find(({ id }) => id == number);
        if( todo.completed == 1)
            todo.completed = 0;
        else
            todo.completed = 1;

        //Update list    
        this.listTodos();

        //write todoList array to local storage.
        writeToLS(this.key, todoList);
    }

    listTodos(){
        renderTodoList(todoList, this.ul);
    }

    filterTodos(state){
        switch(state) {
            //Display all uncomplete todos
            case 1:
                this.removeHideClass();
                //add hide class to all complete todos
                let list1 = todoList.filter(todo => todo.completed == 1);
                list1.forEach(todo=>{
                    let li = document.getElementById(todo.id);
                    li.classList.toggle("hide");
                });
              break;
            //Display all complete todos
            case 2:
                this.removeHideClass();
                //add hide class to all uncomplete todos
                let list2 = todoList.filter(todo => todo.completed == 0);
                list2.forEach(todo=>{
                    let li = document.getElementById(todo.id);
                    li.classList.toggle("hide");
                });
              break;
              //Display all todos
              case 0:
                this.removeHideClass();
                break;
        }
    }

    removeHideClass(){
        //clear hide class
        todoList.forEach(todo=>{
            let li = document.getElementById(todo.id);
            if(li.classList.contains('hide'))
                li.classList.toggle("hide");
        });
    }
}

/*
In the Todos.js module, but not in the Todos class create the following function
check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects
*/

function getTodos(key) { 
    if (todoList.length == 0 && localStorage.getItem(key) !== null ){
        let ls = JSON.parse(readFromLS(key))
   
        ls.forEach( todo =>{
            todoList.push(todo);
        });
        todos.listTodos();
    }
    todos.listTodos();
}

/*
In the Todo.js module, but not in the Todos class, create the following function
build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.

const currentDate = new Date();
const timestamp = currentDate.getTime();
*/

function saveTodo(task, key) { 
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const todo = { "id" : timestamp, "content": task, "completed": 0}

    //add todo object to todoList array.
    todoList.push(todo);

    //write todoList array to local storage.
    writeToLS(key, todoList);
}


function renderTodoList(list, element) { 
    //clear all elements
    while (element.firstChild) {
        element.firstChild.remove()
    }

    list.forEach(todo =>{
        //creating new elements for todo
        let li = document.createElement("li");
        let input = document.createElement("input");
        let p = document.createElement("p");
        let button = document.createElement("button");

        // Setting todo element attributes
        p.textContent = todo.content;

        input.setAttribute("type", "checkbox");
        input.setAttribute("id", `${todo.id}i`);

        button.textContent = "X"
        button.setAttribute("id", `${todo.id}b`);

        if (todo.completed == 1){
            li.setAttribute("class", "toDoItem complete");
            input.checked = true;
        }else{
            li.setAttribute("class", "toDoItem");
        }
        li.setAttribute("id", todo.id);

        //Appending todo elements
        li.appendChild(input);
        li.appendChild(p);
        li.appendChild(button);
        element.appendChild(li);

        //Adding button event listeners
        onClick(input, todos.completeTodo.bind(todos), `${todo.id}`);
        onClick(button, todos.removeTodo.bind(todos), `${todo.id}`);
       
    })

    //creating menu elements
    let li = document.createElement("li");
    let p = document.createElement("p");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");

    //caulating remanding todos 
    let listCount = todoList.filter(todo => todo.completed == 0);
    let count = listCount.length;

    // Setting menu element attributes
    p.textContent = `${count} tasks left`;
    btn1.textContent = "active";
    btn2.textContent = "complete";
    btn3.textContent = "all";
    li.setAttribute("id", "toDoBtn");

    //Appending menu elements
    li.appendChild(p);
    li.appendChild(btn1);
    li.appendChild(btn2);
    li.appendChild(btn3);
    element.appendChild(li);

    //Adding event menu listeners
    onClick(btn1, todos.filterTodos.bind(todos), 1);
    onClick(btn2, todos.filterTodos.bind(todos), 2);
    onClick(btn3, todos.filterTodos.bind(todos), 0);


}


const todos = new Todos();
getTodos(todos.key);
onClick(qs("#addtoDo"), todos.addTodo.bind(todos));




