import React from "react";
import PropTypes from "prop-types";

function Ticket(props){

let content = {
 textAlign: 'center',
 border: '5px solid #ADD2CC',
 margin: '10px 100px',
 backgroundColor: 'lightgrey',
 borderRadius: '70px',
 boxShadow:'5px 5px 10px black',
 marginTop: '50px',
 padding:"30px"
}
let hrStyle = {
padding:"10px",
borderRadius:"5px",


}

  return (
    <div>
    <div style={content}>

    <h3>{props.location} - {props.names}</h3>
    <hr style={hrStyle}/>
    <p><em>{props.issue}</em></p>

    </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};
export default Ticket;
