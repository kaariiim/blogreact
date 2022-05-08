import { Col, Container, Row } from "reactstrap";
import Content from "../parts/content";
import Navbar from "../parts/navbar";
import Sidebar from "../parts/sidebar";

    

function Dashbord() {
    return ( 
       <Container fluid>
           <Row>
               <Col md={12}>
                   <Navbar></Navbar>
               </Col>
               <Col md={3}>
                   <Sidebar></Sidebar>
               </Col>
               <Col md={9}>
                   <Content></Content>
               </Col>
           </Row>
       </Container>
     );
}

export default Dashbord;