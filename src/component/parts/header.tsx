import { Collapse,Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from "reactstrap";

export default function Header (){
    return(
   
  <Navbar className="va"
    color="faded"
    light
  >
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      reactstrap
    </NavbarBrand>
    
  
  </Navbar>

    
 );
}
    