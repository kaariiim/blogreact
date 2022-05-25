import { Link} from "react-router-dom";



function Sidebar() {
    return ( 
        <div className="sidebarDiv"> 
        <h2>Cathegories</h2>
        <ul>
            <li><Link to ="/sport"/>sport</li>
            <li><Link to ="/education"/>education</li>
            <li><Link to ="/politic"/>politic</li>
            <li><Link to ="/loisire"/>loisire</li>
        </ul>

        


        </div>
     );
}

export default Sidebar;