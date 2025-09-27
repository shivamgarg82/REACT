import React,{useState} from "react";

function Component(){
    const [fruit,setFruit] = useState(["apple","mango","guava"]);

    

    function handleChangename(){
      let newfood = document.getElementById('input').value
      document.getElementById('input').value = ""
        setFruit(fruit => [...fruit,newfood])
      }
      
      function handlechangeremove(index){
        
        setFruit(fruit.filter((_,i) => i!==index))
        
      
    }

    return (
      <>
        <h1>Fruit</h1>
        <ol>
          {fruit.map((fruits,index) => <li key={index} onClick={() => handlechangeremove(index)}>{fruits}</li>)}
        </ol>
        <input  id="input" autoFocus/>
        <button onClick={handleChangename}>Add</button>
        
      </>
    );
}
export default Component