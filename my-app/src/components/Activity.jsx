import React, { useState,useEffect } from "react";
import ActivityDetail from "./ActivityDetail.jsx";
// import { BsTelephoneInboundFill } from "react-icons/bs";

import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link,
  useHistory

} from "react-router-dom";


export default function Activity(props) {
    const history = useHistory();
  const { id,created_at,direction, from, to, duration, call_type} = props;

    let data= new Date(created_at);
    const time = data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    console.log("time",time);
    const date = data.toDateString().slice(4);
    console.log("date",date);

  return (
   
   <div > 
     <center>{date} </center>
    
     {/* <Link to="/ActivityDetail">Click to login</Link> */}
    <div className="card">
        <div className="card-body">
            <p className="card-text">
            
              {/* {call_type === "missed" &&
              <BsTelephoneInboundFill/> }
           */}
            <Router>
              <span>
              {/* <a href="/ActivityDetail">
               {from}
                </a> */}
                  {/* <button id={id} onClick={() => history.push("/ActivityDetail")}>{from}</button> */}
              <Link 
                to={{
                  pathname: "/ActivityDetail",
                  state: { id }
                }} 
                 > {from} </Link>
              </span>
              {/* <Switch>
                <Route path="/ActivityDetail"><ActivityDetail/></Route>
              </Switch> */}
            </Router>
          
            <span className="right">{time} </span>
             </p>
             
        </div>    
      </div> 
    </div>
  );
}