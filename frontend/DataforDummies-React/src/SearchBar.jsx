
import { FaSearch } from 'react-icons/fa'
import { Form, InputGroup, Button } from 'react-bootstrap'
import './styles/searchbar.css'

export  function SearchBar() {
    return (
        <Form className="d-flex align-items-center justify-content-center form_search">
            <InputGroup>
                <Form.Control
                    placeholder="Buscar"
                    aria-label="Buscar"
                    className="bg-dark text-light border-dark input_search"
                    style={{
                        maxWidth: '300px',
                        height: '40px',
                        fontSize: '14px'
                    }}
                />
                <Button
                    variant="outline-secondary"
                    className="bg-dark button_searchbar"
                    style={{ height: '40px' }}
                >
                    <FaSearch className="text-light " />
                </Button>
            </InputGroup>
        </Form>
    )
}