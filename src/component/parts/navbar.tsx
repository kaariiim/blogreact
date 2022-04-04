import react from "react"
import { Col, Container, Row } from "reactstrap";
import './navbar.css';

const Navba=() =>{
return (
    <div className="container">
        <div className="row">
            <div className="col-md-2  a1">left header
            </div>
            <div className="col-md-10 a2">right header

            </div>
            <div className=" col-md-2 r2 a3"> left contenet
            </div>
            <div  className=" col-md-10 r2 a4"> contenent
                
            </div>

        </div>

    </div>

)
}
export default Navba;