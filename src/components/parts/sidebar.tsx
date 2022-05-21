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
            <li><link rel="stylesheet" href="../pages/sport.tsx" />sport</li>
            <li> <link rel="stylesheet" href="../pages/education.tsx" /> education</li>
            <li> <link rel="stylesheet" href="../pages/politic.tsx" /> politic</li>
            <li><link rel="stylesheet" href="../pages/loisire.tsx" /> loisire</li>
        </ul>

        


        </div>
     );
}

export default Sidebar;