import React, { useState } from 'react';
import './styles/Asidebar.css'
import { FaHome, FaProjectDiagram, FaChartBar, FaCog, FaBars } from 'react-icons/fa';

export function Navbar({ children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
            if (isExpanded){
                setTimeout(()=>{
                    setIsExpanded(!isExpanded);
                },10)
                
            } else{
                setIsExpanded(!isExpanded);
            }
            
        
        
    };



    return (
        <div className="d-flex">
            <aside className={`sidebar bg-dark text-white ${isExpanded ? 'expanded' : 'collapsed'}`}
                onMouseEnter={toggleSidebar}
                onMouseLeave={toggleSidebar}
            >

                <nav>

                    <div className='d-flex flex-column align-items-center mt-5' id='div_img_user' s>
                        <img src="/static/defaultUserImage.jpg" className='img-responsive img_user'
                        width={isExpanded ? "100px" : '0px'} alt="" />
                        <h5 className='h4 mt-2 mb-4' >{isExpanded ? "Usuario" : ''}</h5>
                    </div>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FaHome />
                                {isExpanded && <span>Inicio</span>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FaProjectDiagram />
                                {isExpanded && <span>Proyectos</span>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FaChartBar />
                                {isExpanded && <span>Estadísticas</span>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FaCog />
                                {isExpanded && <span>Configuración</span>}
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                {children}
            </main>

            <style >{`
        .d-flex {
          display: flex;
          min-height: 90vh;
        }
        
        .sidebar {
          height: 100vh;
          transition: width 0.3s;
          overflow-x: hidden;
          width: ${isExpanded ? '250px' : '45px'};
          position: fixed;
          left: 0;
          top: 0;
        }
        
        .main-content {
          flex: 1;
          margin-left: ${isExpanded ? '250px' : '60px'};
          transition: margin-left 0.3s;
          padding: 20px;
        }
        
        .sidebar.collapsed .nav-link span {
          display: none;
        }
        
        .toggle-btn {
          width: 100%;
          text-align: left;
          padding: 10px;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          padding: 10px;
          color: white;
          text-decoration: none;
        }
        
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .nav-link svg {
          margin-right: 10px;
          font-size: 1.2em;
        }
      `}</style>
        </div>
    );
}