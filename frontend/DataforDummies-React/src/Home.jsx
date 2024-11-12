import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFolder, FaPlus } from 'react-icons/fa';
import { motion } from "framer-motion";
import './styles/home.css';
import { Asidebar } from "./Asidebar";

export function Home() {
    const [projects, setProjects] = useState([
        { id: 1, name: "Proyecto 1", description: "Descripción del Proyecto 1" },
        { id: 2, name: "Proyecto 2", description: "Descripción del Proyecto 2" },
        { id: 3, name: "Proyecto 3", description: "Descripción del Proyecto 3" },
        { id: 4, name: "Proyecto 4", description: "Descripción del Proyecto 4" },
        { id: 5, name: "Proyecto 5", description: "Descripción del Proyecto 5" },
    ]);

    return (
        <Asidebar>
            <Container fluid className="home-container">
                <div className="content-wrapper">
                    <div className="header-section">
                        <motion.h1 
                            className="welcome-text"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Bienvenido, Usuario
                        </motion.h1>
                        
                        <div className="search-section">
                            <input
                                type="search"
                                placeholder="Buscar proyectos..."
                                className="search-input"
                                aria-label="Buscar"
                            />
                        </div>
                    </div>

                    <div className="projects-section">
                        <div className="projects-header">
                            <h2>Tus Proyectos Más Recientes</h2>
                            <button className="new-project-btn">
                                <FaPlus /> Nuevo Proyecto
                            </button>
                        </div>

                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="project-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div className="project-icon">
                                        <FaFolder />
                                    </div>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <button className="open-project-btn">
                                        Abrir Proyecto
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Asidebar>
    );
}