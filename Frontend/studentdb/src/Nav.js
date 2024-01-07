import React from 'react'
import { Link } from 'react-router-dom'
function Nav({active , setActive}) {
  return (
    <div style={{}}>
        <ul style={{listStyleType : "none" , backgroundColor:"#d3d3d3",display : "flex" , flexDirection:"row", padding:" 0 ", margin:"0" }}>
            <li onClick={()=>{
              setActive(false);
            }} style={{width:"50%" }} className={active?"":"dark"}> <Link to="/" className={active?"":"dark"} style={{textDecoration:"none"}}> <h3>Home</h3> </Link></li>
           
            <li onClick={()=>{setActive(true)}} style={{width:"50%"}} className={active?"dark":""}> <Link to="/add" className={!active?"":"dark"} style={{textDecoration:"none" }}><h3>Add data</h3> </Link>  </li>

        </ul>
    </div>
  )
}

export default Nav