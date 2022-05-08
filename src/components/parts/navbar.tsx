import { Col, Container, Row } from "reactstrap";

function Navbar() {
    return ( 
        <div className="navbarDiv">
            <Container>
                <Row>
                    <Col md={8}>
                    <h1>Our blog</h1>
                    </Col>
                    <Col md={2}>
                    <p>maile@mail.com</p>
                    </Col>
                    <Col md={2}>
                    <img src="" alt="" />
                    </Col>
                </Row>
            </Container>
            
            
           
        </div>
     );
}

export default Navbar;