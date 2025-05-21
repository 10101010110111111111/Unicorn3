function UserGreeting(props) {

    if (props.isLoggedIn) {
        return (
            <div>
                <h1>Welcome back, {props.username}!</h1>
            </div>
        );
    }else {
        return (
            <div>
                <h1>Please log in.</h1>
            </div>
        );
    }
  return (
    <div>
      
    </div>
  );
}
export default UserGreeting;