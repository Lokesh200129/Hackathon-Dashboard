import { Container, Row, Col, Dropdown, Form } from 'react-bootstrap';
import '../CSS/SearchAndFilter.css'
function SearchAndFiltersection({setSearch}) {
    return (
        <Container fluid className="py-5 custom-bg-dark text-light  ">
            <h1 className="text-center mb-4">Explore Challenges</h1>
            <Row className="align-items-center justify-content-center">
                <Col md={8} lg={6} className="mb-3 mb-md-0">
                    <Form.Control 
                        type="text" 
                        placeholder="Search" 
                        className="mb-2 mb-md-0"
                        onChange={(e)=> setSearch(e.target.value)}
                    />
                </Col>
                <Col md={3} lg={2}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="w-100">
                            Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>All</Dropdown.Item>
                            <Dropdown.Item>Active</Dropdown.Item>
                            <Dropdown.Item>Upcoming</Dropdown.Item>
                            <Dropdown.Item>Past</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item><b>Level</b></Dropdown.Item>
                            <Dropdown.Item>Easy</Dropdown.Item>
                            <Dropdown.Item>Medium</Dropdown.Item>
                            <Dropdown.Item>Hard</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchAndFiltersection;
