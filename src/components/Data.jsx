import React,{useState} from "react";
import "../index.css";

export default function Data() {
    const [inputtext, setInputext] = useState();
    const [items, setItems] = useState([]);

const inputEvent = (e) => {
    setInputext(e.target.value);
}
const addItems = () => {
    setItems((oldItems) => {
        return [...oldItems, inputtext];
    });
    setInputext("");
}
console.log(inputtext);

    return (
       <div className="main">
            <h1>To-Do-List </h1>
            <div className="myform">
            <input type="text" value={inputtext} placeholder="Enter Tasks" onChange={inputEvent} />
            <button className="mybutton" onClick={addItems}><span>Add</span></button>
            </div>
            <div className="itemsList">
                <ul>
                    {items.map(todoItem => <li>{todoItem}</li>)}
                </ul>
            </div>
       </div>
    )
}