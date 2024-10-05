import { Navbar, Container, Figure } from 'react-bootstrap';
import NavbarLogo from '../assets/icons/Navbar_logo.svg';

function CustomNavbar() {
    return (
        <Navbar variant="light" className="shadow-sm">
            <Container className="d-flex align-items-center">
                <Navbar.Brand href="#">
                    <Figure className="d-flex align-items-center mb-0">
                        <Figure.Image
                            width={80}
                            height={80}
                            src={NavbarLogo}
                            alt="DPhi Logo"
                            className="mr-2"
                        />  
                    </Figure>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default CustomNavbar;
