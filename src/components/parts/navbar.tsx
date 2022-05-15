import { Col, Container, Row } from "reactstrap";

function Navbar() {
    return ( 
        <div className="navbarDiv">
            <Container>
                <Row>
                    <Col md={10}>
                    <h1>SUPER NEWS</h1>
                    </Col>
                    <Col md={2}>
                    <p className="mail">user@mail.com</p>
                    <img src="" alt="" />
                    </Col>
                   
                </Row>
            </Container>
            
            
           
        </div>
     );
}

export default Navbar;