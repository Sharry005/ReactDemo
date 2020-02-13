import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreContext } from 'redux-react-hook';
import md5 from 'md5';
import moment from 'moment';
import store from './redux/Store';
import lodash from 'lodash';
import Start from './Start';

React.Component.prototype.$md5 = md5;
React.Component.prototype.moment = moment;
React.Component.prototype.lodash = lodash;

function Index() {
    return (
        <StoreContext.Provider store={store}>
            <Start />
        </StoreContext.Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();