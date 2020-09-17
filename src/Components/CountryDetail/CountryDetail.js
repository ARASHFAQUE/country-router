import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
    const { countryName } = useParams();
    const [ country, setCountry ] = useState({});
    // const [ ...cntry ] = country;

    // console.log(cntry);
    // let name = country.map( property => property.name);
    // console.log(country);
    useEffect( () => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then( res => res.json())
        .then( data => {
            data.map( property => setCountry(property))
            // const [ ...country ] = data;
            // setCountry( data );
            // console.log(data);
        })
    }, [])
    return (
        <div  className="container">
            <h1>This is {countryName}</h1>
            <h3>Capital: {country.capital}</h3>
            <h4>Population: {country.population}</h4>
            <h4>Area: {country.area} km</h4>
            <br/>
            <img src={country.flag} alt=""/>
        </div>
    );
};

export default CountryDetail;