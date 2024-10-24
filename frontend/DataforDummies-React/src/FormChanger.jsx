import { Form } from "./Form.jsx";
import { useState } from "react";
import { Button } from './Button.jsx';
import { motion } from 'framer-motion';

const classnames = ["login_labels", "login_inputs", "login_form", "login_div"];

export function FormChanger() {
    const [form, setForm] = useState("login");

    const toggleForm = () => {
        setForm(form === "login" ? "registro" : "login");
    };

    const isLogin = form === "login";

    const labels = isLogin ? ["Email", "Contraseña"] : ["Usuario", "Email", "Contraseña", "Confirmar Contraseña"];
    const types = isLogin ? ["email", "password"] : ["text", "email", "password", "password"];
    const title = isLogin ? "Login" : "Registrate";
    const textButton = isLogin ? "Login" : "Registro";
    const toggleText = isLogin ? "Cambia a Registro" : "Cambia a Login";

    return (
        <motion.div
            layout
            className="col-12 col-sm-10 col-md-6 col-lg-4 div_login d-flex flex-column align-items-center"
        >
            <div className="blur"></div>
            <Form
                labels={labels}
                types={types}
                classnames={classnames}
                title_class={"login_title mt-5"}
                class_button="login_button"
                textButton={textButton}
                title={title}
            />
            <Button
                class_button="login_button mt-3 mb-4"
                text={toggleText}
                functionClick={toggleForm}
            />
        </motion.div>
    );
}
