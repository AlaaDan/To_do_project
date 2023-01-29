function AddTodo(props){
    const{newTodo} = props
    let todo = '';

    return(
        <section>
            <input type="text" placeholder="What to do"
            //onChange is an event listner also but it's better than the onKeyup or onKeydown because 
            // If you try to past what you copied using mouse it will take the value where in onkeyup it won't.
            onChange={(event)=> {todo = event.target.value}}/>
            <button onClick={()=>{newTodo(todo)}}>Add it to the list</button>
        </section>
    )
}

export default AddTodo;