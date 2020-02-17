import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';


function Header(){

  return (
    <div>
    <div className='chrome'>
    <h1>Help Queue</h1>
    </div>
<Link to="/">Home</Link> | <Link to="/newticket" style={{position:'relative', zIndex:'500'}}>Create Ticket</Link>
    </div>
  );
}

export default Header;
