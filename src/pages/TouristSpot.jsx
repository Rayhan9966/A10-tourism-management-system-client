import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from './TouristCard';



const TouristSpot = () => {
    const touristspots=useLoaderData();

    return (
        <div >
            <h1>All touristspt:{touristspots.length}</h1>
           <div className='grid md:grid-cols-3 gap-2 '>
           {

touristspots.map(tspot=> <TouristCard>
    key={tspot._id}
    tspot={tspot}
</TouristCard>)
}
           </div>
        </div>
    );
};

export default TouristSpot;