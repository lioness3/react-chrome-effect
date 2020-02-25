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
    {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return(
          <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        timeOpen={ticket.timeOpen}
        key={ticket.id}/>)
    })}
    </div>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
