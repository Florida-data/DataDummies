import React, { useState } from 'react';
import './styles/ConfirmPasswordReset.css';

export function ConfirmPasswordReset() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            setMessage('Tu contraseña ha sido restablecida exitosamente.');
            // Lógica para confirmar la nueva contraseña en el backend
        } else {
            setMessage('Las contraseñas no coinciden. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="password-reset-confirmation-container">
            <div className="password-reset-confirmation-card">
                <h1 className="password-reset-confirmation_title">Restablecer Contraseña</h1>
                <p className="password-reset-confirmation_text">Ingresa tu nueva contraseña para restablecer tu acceso.</p>
                {message && <p className="confirmation-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="newPassword" className="password-reset-confirmation_card_text">Nueva Contraseña</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className=".password-reset-confirmation_card_text">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="password-reset-confirmation_button_container">
                        <button type="submit" className="password-reset-confirmation_mainPage_b">
                            Restablecer Contraseña
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


