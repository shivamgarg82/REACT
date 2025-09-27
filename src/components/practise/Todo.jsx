import React,{useState} from 'react';
function Todo(){
 const [task,setTask] = useState();
 const [newtask,setNewTask] = useState([]);


    function handlechangeinput(event){
        setTask(event.target.value);
      
        
    }
    
    function handlechangeadd(){
        
        setNewTask([...newtask,task]);
        console.log(newtask)
        
    }
    function handlechangeremove(index){
        let updatetask = (newtask.filter((_,i) => i!==index))
        setNewTask(updatetask)
        console.log(newtask)
        
    }
    function handlechangeup(index){
       let updatetask = 
        [updatetask(index),updatetask(index-1)] = [updatetask(index-1),updatetask(index)];
      }
      
      function handlechangedown(index){
      let updatetask = 
       [updatetask(index),updatetask(index+1)] = [updatetask(index+1),updatetask(index)];


    }

    return (
      <>
        <h1>Todo App</h1>
        <input type="text" id='input' onChange={handlechangeinput} />
        <button onClick={handlechangeadd}>Add</button>

        <div className="output">
          <ol>
            {newtask.map((newtask, index) => (
              <li key={index}>
                {newtask}

                <button onClick={() => handlechangeremove(index)}>
                  Delete
                </button>
                <button onClick={() => handlechangeup(index)}>☝</button>
                <button onClick={() => handlechangedown(index)}>👇</button>
              </li>
            ))}
          </ol>
        </div>
      </>
    );
}
export default Todo 