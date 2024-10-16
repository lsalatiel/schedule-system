import React, { useState } from "react";
import "./styles/form.css";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    // Handler functions for input changes
    const handleNameChange = (e:any) => {
        setName(e.target.value);
        validateForm(e.target.value, email, phone);
    };

    const handleEmailChange = (e:any) => {
        const emailInput = e.target.value;
        setEmail(emailInput);

        if (!emailInput.includes("@"))
            setError("O email deve conter @");
        else
            setError("");

        validateForm(name, emailInput, phone);
    };

    const handlePhoneChange = (e:any) => {
       const phoneInput = e.target.value;

        // Allow only numbers using regex
        if (/^\d*$/.test(phoneInput) || phoneInput == "") {
            setPhone(phoneInput);
            validateForm(name, email, phoneInput);
        }
    };

    const validateForm = (name: string, email: string, phone: string) => {
        if (name && email.includes("@") && phone)
            setIsFormValid(true);
        else 
            setIsFormValid(false);
    };

    // Function to handle form submission or accessing the values
    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (!isFormValid) return;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
    };

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input
                    className="user-input"
                    type="text"
                    // placeholder="Nome"
                    value={name}
                    onChange={handleNameChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    className="user-input"
                    type="text"
                    // placeholder="E-mail"
                    value={email}
                    onChange={handleEmailChange}
                />
                {error && <p className="error">{error}</p>}

                <label htmlFor="phone">Telefone:</label>
                <input
                    className="user-input"
                    type="text"
                    // placeholder="Telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                />

                <button
                    className="submit-button"
                    type="submit"
                    disabled={!isFormValid}
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
