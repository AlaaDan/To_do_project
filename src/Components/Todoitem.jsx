import './Todoitem.css';

//props takes the data that has been sent to the component 
function TodoItem(props){
    const {task, done} = props
    let doneText = 'Not ready'

    if(done){
        doneText="Ready"
    }
    return(
        <li className={`todo-item ${ done ? 'done': ''}`}>{task} - {doneText}</li>
    )
}

export default TodoItem;