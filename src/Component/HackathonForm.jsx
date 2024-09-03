import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function HackathonForm (){

    return (
        <>
        
            <h1>Challenge Details</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Challenge Name</Form.Label>
                <Form.Control type="text" placeholder="Add challenge name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="Add start date" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="Add end date" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Add description" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="image" />
              </Form.Group>
        
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </>    
    )

}

export default HackathonForm