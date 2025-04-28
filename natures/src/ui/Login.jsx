import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";

function Login() {
    const [token, setToken] = useState(null);
    const [email, setEmailForm] = useState("");
    const [password, setPasswordForm] = useState("");

    useEffect(() => {
        const savedToken = localStorage.getItem("authToken");
        if (savedToken) {
            setToken(savedToken);
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/users/login",
                {
                    email,
                    password
                }
            );
            const token = response.data.token;
            localStorage.setItem("authToken", token);
            setToken(token);
        } catch (error) {
            console.error(
                "Login failed:",
                error.response?.data || error.message
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmailForm(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPasswordForm(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        </form>
    );
}

export default Login;
