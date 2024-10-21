import React, { useState } from "react";
import "./styles/login-form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (e:any) => {
        setUsername(e.target.value);
        validateForm(e.target.value, password);
    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
        validateForm(username, e.target.value);
    };

    const validateForm = (username: string, password: string) => {
        if (username && password)
            setIsFormValid(true);
        else 
            setIsFormValid(false);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (!isFormValid) return;

        if (username === "admin" && password === "admin")
            navigate("/admin");       
        else {
            setPassword("");
            setError("Usuário ou senha inválidos");
        }
    };

    return (
        <div>
            <form className="adm-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Login</label>
                <input
                    className="adm-input"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />

                <label htmlFor="password">Senha</label>
                <input
                    className="adm-input"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <button
                    className="submit-button"
                    type="submit"
                    disabled={!isFormValid}
                >
                    Enviar
                </button>
                {error && <p className="error">{error}</p>}

            </form>
        </div>
    );
}
