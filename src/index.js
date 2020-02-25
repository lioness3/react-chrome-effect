import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
const store = createStore(reducer);



ReactDOM.render(
          <Provider store={store}>
              <HashRouter>
                <App/>
              </HashRouter>
            </Provider>,
document.getElementById('root'));
serviceWorker.unregister();
