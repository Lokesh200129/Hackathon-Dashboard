import Dropdown from 'react-bootstrap/Dropdown';
import {Form} from 'react-bootstrap';
function SearchAndFiltersection() {
    return (
        <>
            <h1>Explore Challenges</h1>
            <div>
                <input type="text" placeholder="search" />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Divider />
                        <Dropdown.Item > 
                            <Form.Check 
                                type={'radio'}
                                label={`item`}
                            />
                        </Dropdown.Item>
                        <Dropdown.Item >All</Dropdown.Item>
                        <Dropdown.Item >Active</Dropdown.Item>
                        <Dropdown.Item >Upcoming</Dropdown.Item>
                        <Dropdown.Item >Past</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item >Level</Dropdown.Item>
                        <Dropdown.Item >Easy</Dropdown.Item>
                        <Dropdown.Item >Medium</Dropdown.Item>
                        <Dropdown.Item >Hard</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}
export default SearchAndFiltersection;