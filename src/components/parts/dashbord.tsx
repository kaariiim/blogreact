import { BrowserRouter, BrowserRouter as router , Route, Router} from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Education from "../pages/education";
import Loisire from "../pages/loisire";
import Politic from "../pages/politic";
import Sport from "../pages/sport";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

    

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
                <BrowserRouter>
                    <Route path="/" element={Home}/>
                    <Route path="/sport" element={Sport}/>
                    <Route path="/education" element={Education}/>
                    <Route path="/politic" element={Politic}/>
                    <Route path="/loisire" element={Loisire}/>
                </BrowserRouter>
               </Col>
           </Row>
       </Container>
     );
}
const Home=() => {
    <div>
        <h1>home page</h1>
    </div>
}


export default Dashbord;