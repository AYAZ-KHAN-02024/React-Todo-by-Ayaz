import React, { useEffect, useState } from 'react'

function Todo() {
    useEffect(()=>{
        alert("This Todo list application_ allows users to_ add, edit, and remove tasks_ with tasks persistently stored_ in the browser's localStorage_. Users can input tasks_ via a text input field_ and press Enter or click submit_ to add them to the list_. Tasks can be edited_ directly within the list_ by clicking on them_, and changes are saved automatically_. Each task has a delete button (x)_ for removal_, and the input field_ is automatically focused_ for quick task entry_.")
    },[])

    const  SetData=()=> {
        const todoData = localStorage.getItem('todo');

        const data =JSON.parse(todoData);

        if (!Array.isArray(data)){
            return []
        }
        else{
            return  data
        }
           
    }
   
    
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState(SetData())


    function ClickEnter(e) {

        if (e.key === 'Enter' && task.trim() !== '') {
            setTodo([...todo, task]);
            setTask('');

        }

    }

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));

    }, [todo]);


  


    

    function EditTask(index,textValue){
        const EditedTodo=[...todo]
        EditedTodo[index]=textValue;
        setTodo(EditedTodo)

    }


    function remove(id) {
        setTodo(
            todo.filter((val, index) => {
                return index !== id
            })
        )
    }

    return (
        <div className='main'>
            <h1>Todo-List</h1>
            <div className="input">
                <input type="text"
                    value={task}
                    onChange={(e) => { setTask(e.target.value) }}
                    placeholder='enter task'
                    onKeyPress={(e) => ClickEnter(e)}
                    autoFocus
                />
                <button onClick={() => {
                    1 <= task.length ? setTodo([...todo, task], setTask('')) : null;
                }}>submit</button>
            </div>


            {todo && todo.map((val, index) => {
                return (
                    <div key={index} className='list'>
                        <h4 
                        contentEditable
                        onBlur={(e)=>{EditTask(index,e.target.innerText)}}
                        suppressContentEditableWarning={true}
                        >{val}
                        </h4>
                        <span>
                            <i className="fa-solid fa-delete-left" onClick={() => remove(index)} ></i></span>
                    </div>
                )
            })
            }

            { todo.length >= 1 &&  <button onClick={()=>setTodo([])}>Delete-all</button>}

        </div>
    )
}

export default Todo
