import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';


function TicketList(props){
  let bg={
    backgroundColor: '#269382',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
    minHeight:"1100px",
    minWid:"1100px",
    borderTop: "10px outset"

  }
  console.log(props.ticketList);
  return (
    <div style={bg}>
    <hr/>
    {props.ticketList.map((ticket) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={ticket.id}/>
    )}
    </div>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
