import React,{useState} from "react";
function Car(){
    const [car,setCar] = useState('');
    const [year,setYear] = useState();
    const [name,setName] = useState();
    const [model,setModel] = useState();

    function handlechangeyear(event){
        setYear(event.target.value)
    }
    function handlechangename(event){
        setName(event.target.value)
    }
    function handlechangemodel(event){
        setModel(event.target.value)
    }
    function add(){
        setCar(
            car.map(car => <li>{year}{name}{model}</li>)
        );
        setYear("");
        setName("");
        setModel("");
    }
    return(
        <>
     <h1>CAR is : {car}</h1>
    <input type="number" onChange={handlechangeyear}  placeholder="year"/>
    <input type="text" onChange={handlechangename}  placeholder="name"/>
    <input type="text" onChange={handlechangemodel}  placeholder="model"/>
    <button onClick={add}>Add</button>
    </>
    )
}
export default Car