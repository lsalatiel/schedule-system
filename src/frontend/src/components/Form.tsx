import React, { useState } from "react";
import "./styles/form.css";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Handler functions for input changes
    const handleNameChange = (e:any) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e:any) => {
        setPhone(e.target.value);
    };

    // Function to handle form submission or accessing the values
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
    };

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit}>
                <input
                    className="user-input"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    className="user-input"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    className="user-input"
                    type="text"
                    placeholder="Telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
}
