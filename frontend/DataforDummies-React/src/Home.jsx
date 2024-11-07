import { useState } from "react";
import { SearchBar } from "./SearchBar";
import './styles/home.css';
import { Navbar } from "./Navbar";

export function Home() {
    
    const [projects, setProjects] = useState([
        { id: 1, name: "Proyecto 1", description: "Descripción del Proyecto 1" },
        { id: 2, name: "Proyecto 2", description: "Descripción del Proyecto 2" },
        { id: 3, name: "Proyecto 3", description: "Descripción del Proyecto 3" },
        { id: 4, name: "Proyecto 4", description: "Descripción del Proyecto 4" },
        { id: 5, name: "Proyecto 5", description: "Descripción del Proyecto 5" },

    ]);



    return (
        <>
            <Navbar>
                <section className="home-container">
                    <SearchBar />
                    <hr />

                    <div className="home_welcome">
                        <h4 className="text-light">Bienvenido Usuario</h4>
                    </div>

                    <div className="home-projects">
                        <h4 className="text-light mt-5">Tus Proyectos Más Recientes</h4>
                        <div className="projects-list">
                            {projects.map(project => (
                                <div key={project.id} className="project-card">
                                    <h3 className="project-title">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <button className="btn btn-primary">Abrir Proyecto</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Navbar>
        </>
    );
}
