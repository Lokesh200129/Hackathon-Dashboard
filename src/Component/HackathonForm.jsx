import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function HackathonForm() {

  return (
    <>

      <h1>Challenge Details</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Challenge Name</Form.Label>
          <Form.Control type="text" placeholder="Add challenge name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" placeholder="Add start date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" placeholder="Add end date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicdescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Add description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="image" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLevel">
          <Form.Label>Level Type</Form.Label>
          <Form.Control as="select" custom>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )

}

export default HackathonForm