import { Asidebar } from "./Asidebar";
import { Navbar } from "./Navbar";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import './styles/settings.css'


export function Settings() {
    return (
        <Asidebar >
            <Navbar />

            <section className="d-flex flex-column settings_container mt-5 ms-5 ">
                <h3 className="mt-4 h4 ">
                    Perfil
                </h3>
                <div className="mt-2 d-flex img_container align-items-center ">

                    <img src="/static/defaultUserImage.jpg" alt="" width="80px" height="80px" className="img_profile " />
                    <div className="ms-3 d-flex text-img justify-content-between">
                        <h4>Nombre del usuario</h4>
                        <h5>Cambiar foto</h5>
                        <IoDocumentAttachOutline />

                    </div>

                    


                </div>
                <article className="mt-2 d-flex principal_content_settings flex-column ">
                        <h5 className="">
                            Nombre de usuario
                        </h5>
                        <div className="div_content_settings mt-2 d-flex justify-content-between align-items-center  mb-2 ">
                            <h6 className="ps-3     user_propierties">Usuario</h6>
                            <IoIosArrowForward className="pe-1" />
                        </div>
                        <h5 className="">
                            Correo Electronico
                        </h5>
                        <div className="div_content_settings mt-2 d-flex justify-content-between align-items-center  mb-2 ">
                            <h6 className="user_propierties ps-3">Correo Electronico</h6>
                            <IoIosArrowForward className="pe-1"  />
                        </div>
                        <h5 className="">
                            Contraseña
                        </h5>
                        <div className="div_content_settings mt-2 d-flex justify-content-between align-items-center  mb-2">
                            <h6 className="user_propierties ps-3">**************</h6>
                            <IoIosArrowForward className="pe-1"  />
                        </div>
                </article>
                <h3 className="mt-4 h4 ">
                    Preferencias de Visualizacion
                </h3>
                <article className="mt-2 d-flex principal_content_settings flex-column ">
                        <h5 className="">
                            Tema
                        </h5>
                        <div className="div_content_settings mt-2 d-flex justify-content-between align-items-center  mb-2 " >
                            <h6 className="user_propierties">Oscuro</h6>
                            <IoIosArrowForward  className="pe-1"  />
                        </div>
                </article>





            </section>

        </Asidebar>



    )
}