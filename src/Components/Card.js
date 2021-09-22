import React  from "react";
// import logo from '../Images/avatar.jpg'

function Card (props){
    return (
        <>
        <div className="container">
        <div className="card">
              <img src = {props.imgsrc} alt = {props.title}/>
             <div className = "header">
             <h1>{props.title}</h1>
                  <p>{props.Distributor}</p>
                  <p>Collection:{props.collection}</p>

             </div>

             </div>
        </div>
        </>
    
    
    )
}

export default Card;