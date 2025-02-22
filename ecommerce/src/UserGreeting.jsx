
/*
Conditional rendering is used to render different UI based on certain conditions.
*/

function UserGreeting(props) {
    if(props.isLoggedIn){
        return <h1 className="welcome-message">Welcome back, {props.userName}</h1>
    }else{
        return <h1 className="login-message">Please sign up</h1>
    }
}
export default UserGreeting;