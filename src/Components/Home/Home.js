import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {

    const [countries, setCountries] = useState([]);

    // const first10 = countries.slice(0, 10); 

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            {
                countries.map(country => <Country key={country.alpha3Code} country={country}></Country>)
            }
        </div>
    );
};

export default Home;