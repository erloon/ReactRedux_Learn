import 'babel-polyfill';
import React  from 'react';
import {render} from 'react-dom';
import {browserHistory,Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadCourses} from './actions/courseActions';

const store = configureStore(); //możemy tutaj wstrzyknąć stan pocztkowy. Teraz mamy w reducerze
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('app')
);
