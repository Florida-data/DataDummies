import React from 'react';

export function  Footer  () {
    return (
        
            <footer className=" text-center text-lg-start text-white footer">
                <div className="container p-4">
                    <div className="row my-4 ">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                                <img src="/static/logodfdGrey.png" height="70" alt="DataforDummies Logo" loading="lazy" />
                            </div>
                            <p className="text-center">DataforDummies: Empoderamos y exponenciamos la informacion a traves de nuestros algoritmos.</p>
                            
                        </div>

                        

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About Us</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-info-circle pe-3"></i>Nuestra Mision</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-briefcase pe-3"></i>Nuestra Pagina Web</a>
                                </li>
                                
                            </ul>
                        </div>

                        
                    </div>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',
                marginTop:'50vh'
                 }}>
                    © 2024 DataforDummies
                    <a className="text-white mx-5" href="https://datafordummies.com">datafordummies.com</a>
                </div>
            </footer>
        
    );
};


