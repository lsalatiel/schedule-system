import { useState } from "react";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { ptBR } from "date-fns/locale";
import "./root.css";
import { useNavigate } from "react-router-dom";

export default function Root() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedTime, setSelectedTime] = useState<string | undefined>();
    const navigate = useNavigate();

    const availableTimes = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
    ]

    return (
        <div className="calendar-container">
            <div className="calendar-inside-container">
                <DayPicker
                    locale={ptBR}
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>

            {selectedDate && (
                <div className="time-selection">
                    <h3>Selecione um horário:</h3>
                    <ul className="time-options">
                        {availableTimes.map((time) => (
                            <li key={time}>
                                <button
                                    className={`time-button ${selectedTime === time ? "selected" : ""}`}
                                    onClick={() => {
                                            setSelectedTime(time);
                                            localStorage.setItem("selectedDate", selectedDate.toLocaleDateString("pt-BR"));
                                            localStorage.setItem("selectedTime", time);
                                            navigate("/cadastro");
                                        }
                                    }
                                >
                                    {time}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
