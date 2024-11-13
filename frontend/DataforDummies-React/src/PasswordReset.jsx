import React, { useState } from 'react';
import './styles/PasswordReset.css';

export function PasswordReset() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí pondrías la lógica para enviar la solicitud de restablecimiento
        setMessage('Se ha enviado un enlace de restablecimiento a tu correo electrónico.');
    };

    return (
        <div className="password-reset-container">
            <div className="password-reset-card">
                <h1 className="password-reset-card_title">Restablecer Contraseña</h1>
                <p className="password-reset-card_text">Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
                {message && <p className="success-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="card_text">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="password-reset-card-button_container">
                        <button type="submit" className="password-reset-card_Button">
                            Enviar enlace de restablecimiento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


