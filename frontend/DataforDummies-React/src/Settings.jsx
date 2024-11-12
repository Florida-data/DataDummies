import { Asidebar } from "./Asidebar";
import { Navbar } from "./Navbar";

import './styles/settings.css'


export function Settings() {
    return (
        <Asidebar >
            <Navbar />

            <section className="d-flex flex-column settings_container">

                <div className="d-flex  container container_backgroundimage">
                    <img src="/static/backgroundUser1.jpg" className="backgroundimage" alt="" />
                </div>
                <img src="/static/defaultUserImage.jpg" alt="" 
                    className="settings_image_user" />

                


            </section>

        </Asidebar>



    )
}