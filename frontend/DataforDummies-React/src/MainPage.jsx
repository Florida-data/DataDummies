import './styles/mainPage.css'
import { Button } from './Button';
import { Footer } from './Footer';
import { FaChartBar } from "react-icons/fa";
import { IoStatsChart, IoPieChart } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export function MainPage() {

    const navigate = useNavigate()
    return (
        <section className="vh-100 w-100 mainPage_section ">
            <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-light">
                <div className="container">
                    <a className="navbar-brand d-flex" href="#">
                        <img src="/static/logodfd.png" alt="" width="40px" className='mx-3' />
                        <h4 className='text-light'>DataForDummies</h4>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">


                            <Button text={'Login'} class_button={'mainPage_button mainPage_b_1 '} cols={'col-md-7'} 
                            functionClick={(e) =>navigate('/login')}
                            />


                            <Button text={'Registrate'} class_button={'mainPage_button mainPage_b_2'} cols={'col-md-12'} id={'mainPage_b_2'}
                            functionClick={(e) =>navigate('/signup')}
                            />

                        </ul>
                    </div>
                </div>
            </nav>

            <section className='image_container vw-60  d-flex'>
                <img src="/static/image1.png" alt="" className='mt-5 ms-5' />
                <div>
                    <h1 className='image_title mt-5 ms-5 text-light h1 me-5'>Simplificando el Análisis de Datos</h1>
                    <p className='image_text ms-5 text-light'>DataForDummies es la manera más fácil de analizar tus datos. No se requiere codificación ni conocimientos de matemáticas. Simplemente arrastra y suelta tus datos, y deja que nuestro algoritmo te guíe en la creación de análisis poderosos.</p>
                </div>
            </section>
            <section className='first_section vw-60 d-flex flex-column'>
                <h4 className='h1 text-light'>
                    Explora Nuestra Aplicacion
                </h4>
                <p className='first_section_text ms-5 text-light'>Descubre el inmenso poder de los datos de forma sencilla y sin complicaciones. En DataForDummies, te guiamos paso a paso a través del análisis de datos de manera intuitiva, amigable y accesible, permitiéndote aprovechar al máximo la información para tomar decisiones informadas y mejorar tus resultados sin esfuerzos complejos.</p>

                <div className='d-flex justify-content-center align-items-center  cards_container'>
                    <div className='d-flex justify-content-center align-items-center flex-column card_container'>
                        <IoStatsChart className={'m-3 card_icon'} />
                        <h4 className='mt-3 m-4 card_text'>
                            Visualizaciones Claras
                        </h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-column card_container'>
                        <IoPieChart className={'m-3 card_icon'} />
                        <h4 className='mt-3 m-4 card_text'>
                            Análisis Simplificado
                        </h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-column card_container'>
                        <FaChartBar className={'m-3 card_icon'} />
                        <h4 className='mt-3 m-4 card_text'>
                            Tendencias Faciles
                        </h4>
                    </div>
                </div>


            </section>



            <Footer />


        </section>


    );
}
