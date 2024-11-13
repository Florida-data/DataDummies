import { Form } from "./Form.jsx";
import { useState, useEffect } from "react";
import { Button } from './Button.jsx';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, redirect } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { Login } from "./actions/Auth.jsx";
import { useDispatch } from 'react-redux'



const classnames = ["login_labels", "login_inputs", "login_form", "login_div"];

export function FormChanger({isAuthenticated }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const names = isLogin ? ['email', 'password'] : ['name', 'email', 'password', 're_password']

    const labels = isLogin ? ["Email", "Contraseña"] : ["Usuario", "Email", "Contraseña", "Confirmar Contraseña"];
    const types = isLogin ? ["email", "password"] : ["text", "email", "password", "password"];
    const title = isLogin ? "Login" : "Registrate";
    const textButton = isLogin ? "Login" : "Registro";
    const toggleText = isLogin ? "Cambia a Registro" : "Cambia a Login";

    const toggleForm = () => {

        resetForm()
        navigate(isLogin ? "/signup" : "/login");
    };

    const [formData, setFormData] = useState(
        isLogin ? { email: '', password: '' } : { name: '', email: '', password: '', re_password: '' }
    )
    const [errors, setErrors] = useState({});
    const { email, password, name, re_password } = formData;

    useEffect(() => {
        resetForm(); 
    }, [isLogin]);


    const resetForm = () => {
        setFormData(isLogin ? { email: '', password: '' } : { name: '', email: '', password: '', re_password: '' });
        setErrors({});
    };



    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };


    const validateForm = () => {
        const newErrors = {};


        if (!isLogin) {
            if (!name.trim()) newErrors.name = "El nombre es requerido.";
            if (password !== re_password) newErrors.re_password = "Las contraseñas no coinciden.";
        }


        if (!email.trim()) {
            newErrors.email = "El email es requerido.";
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                newErrors.email = "El formato del email es inválido.";
            } else {

                const [localPart, domain] = email.split('@');
                if (domain === 'gmail.com' && localPart.includes('.')) {
                    newErrors.email = "El formato de Gmail no es válido. No uses puntos en la parte local.";
                }

                const domainParts = domain.split('.');
                if (new Set(domainParts).size !== domainParts.length) {
                    newErrors.email = "El dominio del email no es válido.";
                }
            }
        }


        if (!password) {
            newErrors.password = "La contraseña es requerida.";
        } else if (password.length < 8) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "La contraseña debe contener al menos una letra mayúscula.";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "La contraseña debe contener al menos un número.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }



    const onSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
            const emailNormalized = email.toLowerCase(); 
            console.log("Formulario enviado con éxito:", formData);
            if (isLogin) {
                dispatch(Login(emailNormalized, password));
            } else {
                axios.post("http://127.0.0.1:8000/auth/users/", formData)
                    .then(response => {
                        console.log("Registro exitoso:", response);
                    })
                    .catch(error => {
                        console.error("Error en el registro:", error.response?.data || error.message);
                        setErrors({ ...errors, ...error.response?.data });
                    });
            }
        } else {
            console.log("Formulario inválido.");
        }


    }
    if(isAuthenticated){
        navigate('/home')
    }
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
                    onChangeFunction={onChange}
                    onSubmit={onSubmit}
                    names={names}
                    errors={errors}
                    formData={formData}
                />
                <Button
                    class_button="login_button mt-3 mb-4 text-light"
                    text={toggleText}
                    cols={'col-md-5'}
                    functionClick={toggleForm}
                />
            </motion.div>
        </section>
    ); 
}
const mapStateToProps = state => {
    isAuthenticated: state.auth.isAuthenticated
}

export default connect(mapStateToProps , { Login })(FormChanger);