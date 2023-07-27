import React,{useState} from "react";
import "../index.css";

export default function Data() {
    const [user, setUser] = useState({
        fname: "",
        lname: ""
    });
const inputEvent = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
}

    return (
       <div className="main">
            <h1>Hello {user.fname} {user.lname}</h1>
            <form className="myform">
            <input type="text" name="fname" placeholder="Enter userName" onChange={(e)=>inputEvent(e)} />
            <input type="text" name="lname" placeholder="Enter LastName" onChange={(e)=>inputEvent(e)}/>
            <button type="submit">submit</button>
            </form>
       </div>
    )
}