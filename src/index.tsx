import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TopPage from './components/TopPage';

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <TopPage />
    </Provider>,
    document.getElementById('content'));
