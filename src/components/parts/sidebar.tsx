import { Route, Routes } from "react-router-dom";
import Education from "../pages/education";
import Loisire from "../pages/loisire";
import Politic from "../pages/politic";
import Sport from "../pages/sport";


function Sidebar() {
    return ( 
        <div className="sidebarDiv"> 
        <h2>Cathegories</h2>
        <ul>
            <li>sport</li>
            <li>education</li>
            <li>politic</li>
            <li>loisire</li>
        </ul>

        


        </div>
     );
}

export default Sidebar;