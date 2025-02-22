import React, { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest"); // Here guest is a default name
    const [age, setAge] = useState(0);

    const updateName = (e) => {
        setName(document.getElementById("inputName").value);
    }

    const updateAge = (e) => {
        setAge(age+1);
    }
    return (
        <div>
            {/* <input type="text" onChange={(e) => setName(e.target.value)}></input> */}
            <input type="text" id="inputName"></input>
            <p>Name : {name}</p>
            <button onClick={(e) => updateName(e)}>SetName</button><br />

            <input type="number" id="inputAge"></input>
            <p>Name : {age}</p>
            <button onClick={(e) => updateAge(e)}>SetAge</button>
        </div>
    );

}
export default MyComponent;