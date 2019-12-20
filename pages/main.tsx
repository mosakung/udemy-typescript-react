//Package
import React from 'react'
import ReactDOM from 'react-dom';

//CSS
/* const css = require('../css/app.css'); */
/* import '../css/app.css'; */
import css from '../css/app.css';

const main = props => {
    return (
        <div className={css.person}>
            <h1>Max</h1>
            <p>Your Age: 28</p>
        </div>
    );
}

export default main
