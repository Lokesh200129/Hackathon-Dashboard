import { Container, Row, Col } from 'react-bootstrap';
import AiIcon from '../assets/icons/Group 1000002515.svg';
import ScientistsIcon from '../assets/icons/Group 1000002516.svg';
import HostIcon from '../assets/icons/Group 1000002518.svg';
import '../CSS/StatsSection.css'

function StatsSection() {
    return (
        <Container fluid className="py-5 custom-bg-dark text-light">
            <Row className="justify-content-center">
                <Col md={3} className="d-flex align-items-center border-end border-3">
                    <figure className="mb-0 me-3">
                        <img src={AiIcon} alt="AI Icon" className="img-fluid" />
                    </figure>
                    <figcaption>
                        <h2 className="mb-0">100K+</h2>
                        <p>AI model submissions</p>
                    </figcaption>
                </Col>
                <Col md={3} className="d-flex align-items-center border-end border-3">
                    <figure className="mb-0 me-3">
                        <img src={ScientistsIcon} alt="Scientists Icon" className="img-fluid" />
                    </figure>
                    <figcaption>
                        <h2 className="mb-0">50K+</h2>
                        <p>Data Scientists</p>
                    </figcaption>
                </Col>
                <Col md={3} className="d-flex align-items-center">
                    <figure className="mb-0 me-3">
                        <img src={HostIcon} alt="Host Icon" className="img-fluid" />
                    </figure>
                    <figcaption>
                        <h2 className="mb-0">100+</h2>
                        <p>AI Challenges hosted</p>
                    </figcaption>
                </Col>
            </Row>
        </Container>
    );
}

export default StatsSection;
