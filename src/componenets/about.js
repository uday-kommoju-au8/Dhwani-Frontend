import React from "react"
import {Link} from "react-router-dom"
import Piec from "./pie"
import Nav from "./navbar"
const About=()=>{
    return(
        <>
        <Nav/>
        <br></br>
        <Link to="/">
        <button>
            Go to Home page
        </button>
        </Link>
        <Piec/>
        </>
    )
}

export default About