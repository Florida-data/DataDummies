



import { Home } from "./Home";

export function Navbar() {
    return (
        <>
            <button className="btn float-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" role="button">
                <i className="bi bi-arrow-right-square-fill fs-3">
                    <img src="/static/menu.png" alt="" />
                </i>
            </button>
            <div className="offcanvas offcanvas-start w-25" tabIndex="-1" id="offcanvasMenu" data-bs-keyboard="false" data-bs-backdrop="false">
                <div className="offcanvas-header">
                    <h6 className="offcanvas-title d-none d-sm-block">Menu</h6>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-0">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-truncate">
                                <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
                                <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-truncate">
                                <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Customers</span>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link dropdown-toggle text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid" id="mainContent">
                <div className="row">
                    <div className="col min-vh-100 py-3">
                        <Home />
                        
                    </div>
                </div>
            </div>
        </>
    );
}
