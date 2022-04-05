import { Collapse,Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from "reactstrap";

export default function Header (){
    return(
     
        <div>
  <div>
  <Navbar
    color="faded"
    light
  >
    <NavbarBrand
      className="me-auto"
      href="/"
    >
      reactstrap
    </NavbarBrand>
    <NavbarToggler
      className="me-2"
      onClick={function noRefCheck(){}}
    />
    <Collapse navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
</div>
    
 );
}
    