import { Route, Routes } from "react-router-dom";
import Education from "../pages/education";
import Loisire from "../pages/loisire";
import Politic from "../pages/politic";
import Sport from "../pages/sport";

function Content() {
    return ( 
        <div className="contentDiv">
                    <Routes>
        <Route path="/" element={<Sport />} />
        <Route path="sport" element={<Sport />} />
       
        <Route path="/education" element={<Education />} />
        <Route path="/politic" element={<Politic />} />
        <Route path="/loisure" element={<Loisire />} />
      
      </Routes>

        </div>
     );
}

export default Content;