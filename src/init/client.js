import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import createStore from '../views/store';
import routes from '../routes';

require('offline-plugin/runtime').install();

ReactDOM.render(
    <Provider store={ createStore() }>
      <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept(
        <Router routes={routes} history={browserHistory}/>,
        document.getElementById('app')
    );
}
