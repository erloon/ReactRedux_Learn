import 'babel-polyfill';
import React  from 'react';
import {render} from 'react-dom';
import {browserHistory,Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorsActions';
import '../node_modules/toastr/build/toastr.min.css';

 //możemy tutaj wstrzyknąć stan pocztkowy. Teraz mamy w reducerze
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('app')
);
