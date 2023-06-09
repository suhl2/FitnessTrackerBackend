import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
                const response = await axios.post('/api/users/login', {username: userName, password: password});
                if(response.data.message === "you're logged in!") {
                    window.localStorage.setItem("Fitness-Trackr-Login", response.data.token);
                    setMessage("Login Successful");
                    navigate("/");
                    window.location.reload(false);
            }
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div id="register-form">
            <form>
                <label>Username <input type="text" onChange={event => setUserName(event.target.value)} /></label>
                <label>Password <input type="text" onChange={event => setPassword(event.target.value)}/></label>
                <button onClick={handleLogin}>Log In</button>
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login;