import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux'
import {addChallenge} from '../feature/challengeSlice'
import { useNavigate } from 'react-router-dom';
function HackathonForm() {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate =  useNavigate();

  const handleResponse = (data) => {
    
    dispatch(addChallenge(data))
    // console.log(data);
    navigate('/')
  }
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setValue("image", base64String);
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };
  return (
    <Container className="py-5 w-75">
      <h1 className="text-center mb-4">Challenge Details</h1>
      <Form onSubmit={handleSubmit(handleResponse)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Challenge Name</Form.Label>
          <Form.Control type="text" placeholder="Add challenge name" {...register("name")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" {...register("startDate")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" {...register("endDate")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Add description" {...register("description")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLevel">
          <Form.Label>Level Type</Form.Label>
          <Form.Control as="select" defaultValue="1" {...register("level")}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Form.Control>
        </Form.Group>

        <Button  variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default HackathonForm;

