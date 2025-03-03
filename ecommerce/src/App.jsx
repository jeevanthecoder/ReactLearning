import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Button from "./Button";
import MyComponent from "./MyComponent";
import Login from "./Login";
/*
    React hook = Special function that allows functional components 
                 to use React features without writing class components (React v16.8)
                 (useState, useEffect, useContext, useReducer, useRef)

    useState = React hook that allows the creation of a stateful variable
               And a setter function to update its value in the Virtual DOM.

    onChange = event handler used primarily with the form elements 
                ex. <input>, <textarea>, <select>, <radio>
                Triggers a function every time the value of the input changes.

    updater function = Function that allows the modification of the stateful variable
                       in the Virtual DOM.
                       A function passed as an argument to setState() usually 
                       ex. setYear(arrow function)
                       Allow for safe updates based on the previous state 
                       Used with multiple state updates and synchronous functions
                       Good practice to user updater function instead of the state variable
*/
function App() {
  return (
    <>
    <MyComponent></MyComponent>
    <Header></Header>
    <Student name="John" age="ads"></Student> 
    {/* This uses props */}
    <UserGreeting isLoggedIn={false} userName="Safesend"></UserGreeting>
    <Button></Button>
    <List></List>
    <Card></Card>
    <Footer></Footer>
    <Login></Login>
    
    

    
    </>
  );
}

export default App
