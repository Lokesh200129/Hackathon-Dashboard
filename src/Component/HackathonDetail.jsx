import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap"
function HackathonDetail() {

    return (
        <>
            <div>
                <h1>Accelerate Innovation <span>With Global AI Challenge</span></h1>
                <p>AI Challenge at DPHI simulate real world problem. It is a great place to put your AI/Data science skills to test on diverse datasets allowing you to faster learning through competitions.</p>
                <Button variant='light' disabled>Easy</Button>
            </div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Overview</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Button variant='success'>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus minima, quia, ratione natus dicta voluptate perferendis animi neque ex maxime nulla quo similique. Recusandae temporibus natus autem obcaecati nam.
                Fugiat earum explicabo autem doloremque vero accusamus voluptates officia odio saepe eligendi. Dolorem dolore praesentium blanditiis cumque sequi placeat totam facilis in, nihil accusamus obcaecati quisquam! Excepturi obcaecati natus corrupti.
                Cupiditate nisi dolorem animi beatae facere blanditiis. Iste aperiam omnis aut dignissimos cumque dolorum. Iusto eligendi laudantium magnam, vero non laborum corrupti perspiciatis nihil repudiandae earum iure asperiores placeat delectus.

            </section>


        </>

    )

}
export default HackathonDetail