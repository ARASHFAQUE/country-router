import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = ( props ) => {

    const { name, flag } = props.country;
    return (
        <div  className="container">
            <img style={{ width: '200px'}} src={ flag } alt=""/>
            <h2>Name: { name }</h2>
            <Link to={`/country/${name}`}>More Details Of {name}</Link>
        </div>
    );
};

export default Country;