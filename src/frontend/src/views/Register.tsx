import React from "react";
import "./styles/register.css";
import Form from "../components/Form.tsx";

export default function Register() {
    const selectedDate = localStorage.getItem("selectedDate");
    const selectedTime = localStorage.getItem("selectedTime");

    return (
        <div className="register-content">
            <div className="date-info-container">
                <h2>{selectedDate}</h2>
                <h2>{selectedTime}</h2>
            </div>
            <div className="form-container">
                <h3>Por favor, preencha os campos abaixo:</h3>
                <h4>Você receberá uma mensagem de confirmação em seu Whatsapp.</h4>
                <Form />
            </div>
        </div>
    );
}
