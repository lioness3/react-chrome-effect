import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList(){
  let bg={
    backgroundColor: '#269382',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
    minHeight:"1100px",
    minWid:"1100px",
    borderTop: "10px outset"
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  }
  return (
    <div style={bg}>
    <hr/>
    {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
    )}
    </div>
  );
}

export default TicketList;
