import './styles/navbar.css'

export function Navbar() {
    return (

        <header className='nav_header'>
            <div className="container nav_container">
                <h4 className=" nav_logo">Settings</h4>

                <nav className='nav_nav' >
                    <ul className='nav_list'> 
                        <li className='nav_list_item'><a href="#">Perfil</a></li>
                        <li className='nav_list_item'><a href="#">Preferencias Visuales</a></li>
                        
                        
                    </ul>
                </nav>
            </div>
        </header>
    )

}