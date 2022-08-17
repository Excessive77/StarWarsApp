import React, { useEffect, useState } from 'react';
import People from '../People/People';

const PeopleList = () => {
    const [data, setData] = useState([]);

    const getPeople = async () => {
        const res = await fetch('https://swapi.dev/api/people/');
        const people = await res.json();
        // console.log(people.results);
        setData(people.results);
    };

    useEffect(() => {
        getPeople(setData);
    }, []);
    return (
        <div className="container">
            <div className="row">
                {data.map(item => (
                    <div className="col-md-4" key={item.name}>
                        <People item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleList;
