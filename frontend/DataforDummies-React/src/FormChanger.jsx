import { Form } from "./Form.jsx";
import { useState } from "react";
import { Button } from './Button.jsx';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const classnames = ["login_labels", "login_inputs", "login_form", "login_div"];

export function FormChanger() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === "/login";

    const onChangeFunctions = isLogin
        ? [(e) => setEmail(e.target.value), (e) => setPassword(e.target.value)]
        : [
            (e) => setName(e.target.value),
            (e) => setEmail(e.target.value),
            (e) => setPassword(e.target.value),
            (e) => setPasswordConfirm(e.target.value)
        ];

    const submit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:8000/api/${isLogin ? 'login' : 'register'}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(isLogin ? { email, password } : { name, email, password })
            });

            if (response.ok) {
                navigate(isLogin ? "/home" : "/login");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.detail || 'Error desconocido'}`);
            }
        } catch (error) {
            console.error("Network Error:", error);
            alert("Error de red, intenta más tarde.");
        }
    };

    const labels = isLogin ? ["Email", "Contraseña"] : ["Usuario", "Email", "Contraseña", "Confirmar Contraseña"];
    const types = isLogin ? ["email", "password"] : ["text", "email", "password", "password"];
    const title = isLogin ? "Login" : "Registrate";
    const textButton = isLogin ? "Login" : "Registro";
    const toggleText = isLogin ? "Cambia a Registro" : "Cambia a Login";

    const toggleForm = () => {
        navigate(isLogin ? "/register" : "/login");
    };

    return (
        <section className='login_section vh-100 w-100 d-flex align-items-center justify-content-center flex-column'>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-12 col-sm-10 col-md-6 col-lg-4 div_login d-flex flex-column align-items-center"
            >
                <div className="blur"></div>
                <Form
                    labels={labels}
                    types={types}
                    classnames={classnames}
                    title_class={"login_title mt-5"}
                    class_button="login_button text-light"
                    textButton={textButton}
                    title={title}
                    onChangeFunctions={onChangeFunctions}
                    onSubmit={submit}
                />
                <Button
                    class_button="login_button mt-3 mb-4 text-light"
                    text={toggleText}
                    functionClick={toggleForm}
                />
            </motion.div>
        </section>
    );
}
