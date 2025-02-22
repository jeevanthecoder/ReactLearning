import React, { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest"); // Here guest is a default name
    const [age, setAge] = useState(0);

    //OBJECTS in state
    const [car, setCar] = useState({
        make: "Toyota",
        model: "Corolla"
    });

    const [food, setFood] = useState(["Pizza", "Burger", "Pasta"]);

    function AddFoods() {
        setFood(f => [...f, "Sandwich"]);
    }

    function handleMakeChange() {
        setCar(c => ({ ...c, make: "Ford" })); // Spread operator
    }

    const updateName = (e) => {
        setName(document.getElementById("inputName").value);
    }

    const updateAge = (e) => {
        // Updater function - here using previous state to calculate the current state
        // Takes the pending state to calculate the current state
        setAge(age => age + 1);
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

            <div>
                <h2>List of foods</h2>
                <ul>
                    {food.map((f, index) => (
                        <li key={index}>{f}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
export default MyComponent;