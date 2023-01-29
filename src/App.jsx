import AddTodo from './Components/AddTodo';
import TodoItem from './Components/Todoitem';

import './App.css';

function App() {
  const todos = [];

  function newTodo(todo){
    todos.push(todo);
    console.log(todos);
  }

  return (
    <div className="App">
      <ul className='todos'>
        <TodoItem task="Buy Coffie" done={ true}/>
        <TodoItem task="Buy Cake" done={ false}/>
        <TodoItem task="Drink Coffie" done={ false}/>
        <TodoItem task="Eat cake" done={ false}/>
      </ul>
      <AddTodo newTodo={ newTodo }/>
    </div>
  )
}

export default App
