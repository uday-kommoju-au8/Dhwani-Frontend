import React from "react"
import {Link} from "react-router-dom"
import Nav from "./navbar"
import DataTable from "./data"
const Home=()=>{
    return(
        <div>
        
            <Nav/>
            <h1>FRONTEND</h1>
            <Link to="/about">
            <button>Go to Pie chart</button>
            </Link>
            <DataTable/>       
        </div>

    )

}
    


export default Home;