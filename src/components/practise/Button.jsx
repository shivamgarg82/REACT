import React,{ useState } from "react";
function Button(){
    const [name,setName] =useState("guest"); 
    const [age,setAge] =useState(0); 
    const [text,setText] =useState(); 
    const [item,setItem] = useState("Post");
    const [payment,setPayment] = useState("Visa");
    const [count,setCount] = useState(0);
 
     let handlerChangeName = (event) =>{
        setName(event.target.value)
     }

     let handlerChangeAge = (event) =>{
        setAge(event.target.value)

     }  
     let handlerChangeText = (event) =>{
        setText(event.target.value)

     }
     let handlerChangeItem = (event) =>{
        setItem(event.target.value)
     }
     let handlerChangePayment = (event) =>{
        setPayment(event.target.value)
     }

      let increment = () =>{
         setCount( p => p+1)
         setCount( p => p+1)
         
         
         
      }
      let decrement = () =>{
         setCount(count-1)
      }
    return (
      <>
        <input onChange={handlerChangeName} type="text" />
        <h1>Age: {name}</h1>

        <input onChange={handlerChangeAge} type="number" />
        <h1>Age: {age}</h1>

        <textarea
          onChange={handlerChangeText}
          placeholder="Enter Your Message"
        ></textarea>
        <h1>Message : {text}</h1>
        <label>Post</label>
        <input
          type="radio"
          value="Post"
          checked={item === "Post"}
          onChange={handlerChangeItem}
        />
        <br />
        <label>Deliver</label>
        <input
          type="radio"
          value="Deliver"
          checked={item === "Deliver"}
          onChange={handlerChangeItem}
        />
        <h1>ItemType : {item}</h1>

        <select onChange={handlerChangePayment}>
          <option>Select Payment</option>
          <option>Visa</option>
          <option>MasterCard</option>
          <option>GPay</option>
        </select>
        <h1>Payment Type : {payment}</h1>

        <h1>count : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
    );
    
}

export default Button