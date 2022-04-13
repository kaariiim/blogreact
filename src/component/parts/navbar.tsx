import react from "react"
import categorys from "./category";
import Contenet from "./contenent";
import Header from "./header";


import './navbar.css';
import Sidebar from "./sidebar";
const onSelect=()=>{

}

const Navba=() =>{
return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-md-12  a1">
        <Header/>  
            </div>
   
            <div className=" col-md-2 r2 a3"> 
            <Sidebar 
            categorys={categorys}
            oncategoryselection={onSelect}
            ></Sidebar>
            </div>
            <div  className=" col-md-10 r2 a4"> 
            <Contenet></Contenet>
                
            </div>

        </div>

    </div>
    </div>

)
}
export default Navba;