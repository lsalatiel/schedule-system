import React from "react";

export default function Register() {
    const selectedDate = localStorage.getItem("selectedDate");
    const selectedTime = localStorage.getItem("selectedTime");

    return (
        <div>
            <div className="date-info-container">
                <h2>{selectedDate}</h2>
                <h2>{selectedTime}</h2>
            </div>
            <div className="inputs-container">
                <h3>Por favor, preencha os campos abaixo:</h3>
                <h4>Você receberá uma mensagem de confirmação em seu Whatsapp.</h4>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Telefone" />
                <button>Finalizar agendamento</button>
            </div>
        </div>
    );
}
