import { Container, Row, Col, Dropdown , DropdownButton, Form } from 'react-bootstrap';
import '../CSS/SearchAndFilter.css'
function SearchAndFiltersection({setSearch, handleFilterChange, handleLevelChange}) {
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
                    <DropdownButton title="Filter">
                            <Dropdown.Item onClick={()=>handleFilterChange("all")}>All</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterChange("active")}>Active</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterChange("upcoming")}>Upcoming</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleFilterChange("past")}>Past</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item><b>Level</b></Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleLevelChange("easy")}>Easy</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleLevelChange("medium")}>Medium</Dropdown.Item> 
                            <Dropdown.Item onClick={()=>handleLevelChange("hard")}>Hard</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchAndFiltersection;
