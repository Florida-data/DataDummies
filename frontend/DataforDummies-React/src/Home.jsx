import { useState } from "react";
import { SearchBar } from "./SearchBar";
import './styles/home.css'; // Asegúrate de tener este archivo CSS para los estilos

export function Home() {
    // Estado para los proyectos
    const [projects, setProjects] = useState([
        { id: 1, name: "Proyecto 1", description: "Descripción del Proyecto 1" },
        { id: 2, name: "Proyecto 2", description: "Descripción del Proyecto 2" },
        { id: 3, name: "Proyecto 3", description: "Descripción del Proyecto 3" },
        { id: 4, name: "Proyecto 4", description: "Descripción del Proyecto 4" },
        { id: 5, name: "Proyecto 5", description: "Descripción del Proyecto 5" },
        
    ]);

    

    return (
        <section className="home-container">
            <SearchBar />
            <hr />
            
            <div className="home_welcome">
                <h4 className="h1 text-light">Bienvenido Usuario</h4>
            </div>

            <div className="home-projects">
                <h4 className="text-light mt-5">Tus Proyectos Mas Recientes</h4>
                <div className="projects-list">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <h5 className="project-title">{project.name}</h5>
                            <p className="project-description">{project.description}</p>
                            <button className="btn btn-primary">Abrir Proyecto</button>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}
