
import './styles/searchbar.css'
export function SearchBar() {


    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">    
                <form className="form-inline my-2 my-lg-0 d-flex">
                    <input className="form-control mr-sm-2 mx-3" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <img src="/static/search.png" alt="" />
                        </button>
                    
                </form>
            </div>
        </nav>
    )
}