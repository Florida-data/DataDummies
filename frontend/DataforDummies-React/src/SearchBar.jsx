import './styles/searchbar.css';

export function SearchBar() {
    return (
        <nav className="navbar  searchbar-navbar">
            <form className="form-inline d-flex  vh-10">
                <input
                    className="form-control mx-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    style={{ width: '100%', maxWidth: '300px' }}
                />
                <button className="btn btn-outline-success" type="submit">
                    <img src="/static/search.png" alt="Buscar" />
                </button>
            </form>
        </nav>
    );
}
