import { Container, Row, Col } from 'react-bootstrap';
import NotebookIcon from '../assets/icons/carbon_notebook-reference.svg';
import PeopleIcon from '../assets/icons/Vector.svg';
import RobotIcon from '../assets/icons/Robot.svg';
import IdentificationIcon from '../assets/icons/IdentificationCard.svg';

function ObjectiveSection() {
    return (
        <Container fluid className="py-5">
            <h1 className="text-center mb-5">Why Participate in AI Challenges?</h1>
            <Row className="justify-content-center">
                <Col md={5} className="mb-4">
                    <div className=" align-items-center p-3 border rounded">
                        <figure className="mb-0 me-3">
                            <img src={NotebookIcon} alt="Prove Your Skills" className="img-fluid" />
                        </figure>
                        <figcaption>
                            <h3>Prove Your Skills</h3>
                            <p>Demonstrate your AI expertise by tackling real-world challenges.</p>
                        </figcaption>
                    </div>
                </Col>
                <Col md={5} className="mb-4">
                    <div className="align-items-center p-3 border rounded">
                        <figure className="mb-0 me-3">
                            <img src={PeopleIcon} alt="Learn From Community" className="img-fluid" />
                        </figure>
                        <figcaption>
                            <h3>Learn From Community</h3>
                            <p>Collaborate and learn from a vibrant community of AI enthusiasts.</p>
                        </figcaption>
                    </div>
                </Col>
                <Col md={5} className="mb-4">
                    <div className=" align-items-center p-3 border rounded">
                        <figure className="mb-0 me-3">
                            <img src={RobotIcon} alt="Challenge Yourself" className="img-fluid" />
                        </figure>
                        <figcaption>
                            <h3>Challenge Yourself</h3>
                            <p>Push your limits by solving complex AI problems.</p>
                        </figcaption>
                    </div>
                </Col>
                <Col md={5} className="mb-4">
                    <div className=" align-items-center p-3 border rounded">
                        <figure className="mb-0 me-3">
                            <img src={IdentificationIcon} alt="Earn Recognition" className="img-fluid" />
                        </figure>
                        <figcaption>
                            <h3>Earn Recognition</h3>
                            <p>Gain visibility and recognition in the AI community.</p>
                        </figcaption>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ObjectiveSection;
