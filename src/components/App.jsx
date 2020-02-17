import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';
function App(){

  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={TicketList} />
      <Route exact path='/newticket' component={NewTicketControl} />
      <Route component={Error404} />
    </Switch>
  </div>
  );
}

export default App;
