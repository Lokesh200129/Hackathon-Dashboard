import { Button, Card, Alert } from 'react-bootstrap';
import CorrectIcon from '../assets/icons/Correct_icon.png';
function HackathonCard({name, startDate, endDate, description, image }) {
   
    return (

        <Card className="text-center text-dark mb-4 shadow-sm h-25 w-70 border border-1 rounded-top">
            <Card.Img variant="top" src={image} alt="Image" className='bg-transparent' />
            <Card.Body className='bg-white rounded-bottom text-center '>
                <Alert variant="success" className="mb-3 p-1 w-75">Success</Alert>
                <Card.Text >
                    <p className="mb-1"><b> {name}</b></p>
                    <p className="mb-1"><b>  {startDate}</b></p>
                    <p className="mb-1"><b> {endDate}</b></p>
                    <p className="mb-1"><b>{description}</b></p>
                  

                </Card.Text>
                <Button variant="success">
                    <img src={CorrectIcon} alt="Icon" className="me-2" />
                    Participate Now
                </Button>
            </Card.Body>
        </Card>
    );
}
export default HackathonCard;
