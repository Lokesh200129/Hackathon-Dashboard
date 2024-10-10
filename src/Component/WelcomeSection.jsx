import { Button, Container, Row, Col } from 'react-bootstrap';
import mainIcon from '../assets/icons/PicsArt_04-14-04.42 1.svg';
import '../CSS/WelcomeSection.css'
import { Link } from 'react-router-dom';
function WelcomeSection() {
    return (
        <>
            <Container fluid className="text-center text-white py-5 custom-bg-light w-auto">
                <Row className="align-items-center ms-sm-5 ms-1 ps-sm-5 ps-1  ">
                    <Col md={6} className="text-start  ">
                        <h1>
                            Accelerate Innovation 
                        </h1>
                        <h1>With Global AI Challenge</h1>
                        <p className="my-4">
                            AI Challenge at DPHI simulates real-world problems. It is a great place to put your AI/Data science skills to test on diverse datasets, allowing you to accelerate learning through competitions.
                        </p>
                        <Link to='/create'>
                            <Button variant="light">Create Challenge</Button>

                        </Link>
                    </Col>
                    <Col md={6}>
                        <figure className="text-center">
                            <img src={mainIcon} alt="Icon" className="img-fluid" />
                        </figure>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default WelcomeSection;