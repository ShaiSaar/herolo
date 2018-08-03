import React from 'react';
import ReactDOM from 'react-dom';
import './CSS reset/cssReset.css';
import './index.css';
import App from './component/app/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {loadAll} from "./redux/general-actions";

store.dispatch(loadAll())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
