import { Option } from "antd/lib/mentions";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row } from "reactstrap";

export default function Header (){
    return(
     
        <div>
  <Nav pills>
    <NavItem>
      <NavLink
        active
        href="#"
      >
        Link
      </NavLink>
    </NavItem>
    <Dropdown
      nav
      toggle={function noRefCheck(){}}
    >
      <DropdownToggle
        caret
        nav
      >
        Dropdown
        <Option>
          sport

        </Option>
        <Option>
          Economie
        </Option>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>
          Header
        </DropdownItem>
        <DropdownItem disabled>
          Action
        </DropdownItem>
        <DropdownItem>
          Another Action
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Another Action
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <NavItem>
      <NavLink href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        Another Link
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        disabled
        href="#"
      >
        Disabled Link
      </NavLink>
    </NavItem>
  </Nav>
</div>
    
 );
}
    