
import { Button } from "./Button";



export function Welcome(){
    return(
        <>
        
        <div className="d-flex flex-column welcome_fdiv">
            
            <div className="d-flex justify-content-between container-fluid welcome_f1div">
                <img src="/src/static/logodfd.png" alt="" className="img-reponsive welcome_logodfd"/>
                <h1 className="text-light mt-5 h1 welcome_title ">
                    Data For Dummies
                </h1>
                
                <div></div>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column container welcome_sdiv">
                
                
                    <p className="text-light mb-5 mt-5">
                        ¡Analiza tus datos con un solo click!
                    </p>
                    <div className="container d-flex flex-column align-items-center mt-3 col-lg-5 rounded-2">
                        <h4 className="text-light my-5">
                            Bienvenido, dummie
                        </h4>
                        <Button text={"Empezar"} class_button={"text-dark col-lg-2 bg-light mb-5"}/>
                    </div>
                    
                
            </div>
            
        </  div>
        </>
    )
}