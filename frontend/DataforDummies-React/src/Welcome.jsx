import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { motion } from 'framer-motion';
import { useState } from "react";

const variants = {
    exit: {
        opacity: 0,
        x: -1000,
        transition: { duration: 1 }
    }
};

export function Welcome() {
    const navigate = useNavigate();
    const [exit, setExit] = useState(false);

    const toggleToForm = () => {
        setExit(true);
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <div className="login_section">
            
            <motion.div 
                animate={exit ? 'exit' : ''}
                variants={variants}
                className="d-flex flex-column welcome_fdiv"
            >
                <div className="blur"></div>
                
                <div className="d-flex justify-content-between container-fluid welcome_f1div">
                    <img src="/static/logodfd.png" alt="" className="img-responsive welcome_logodfd" />
                    <h1 className="text-light mt-5 h1 welcome_title">
                        Data For Dummies
                    </h1>
                    <div></div>
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column container welcome_sdiv">
                    <p className="mb-5 mt-5 welcome_text_1">
                        ¡Analiza tus datos con un solo click!
                    </p>
                    <div className="container d-flex flex-column align-items-center mt-3 col-lg-5 rounded-2 welcome_div_text">
                        <h4 className="text-light my-5 welcome_text">
                            Bienvenido, dummie
                        </h4>
                        <Button text={"Empezar"} class_button={"col-lg-2 mb-5 welcome_button"} functionClick={toggleToForm} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
