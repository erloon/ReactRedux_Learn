import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className='jumbotron'>
            <h1>Administracja</h1>
            <p>Aplikacja w React + Redux + ES6</p>
            <Link to='about' className='btn btn-primary btn-lg'>Więcej</Link>
            </div>
        );
    }
}

export default HomePage;