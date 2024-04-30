import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from './TouristCard';



const TouristSpot = () => {
    // const touristspots = useLoaderData();
    const dataInfo = useLoaderData();

    return (
        <div >
            <h1>All touristspt:{dataInfo.length}</h1>
            <div className='grid md:grid-cols-3 gap-2 '>
                {/* {

                    touristspots.map(touristspot => <TouristCard
                        key={touristspot._id}
                        touristspot={touristspot}>
                    </TouristCard>)
                } */}

{
dataInfo.map((data) => (
            <TouristCard key={data._id} data={data}></TouristCard>
          ))
          } 

            </div>
        </div>
    );
};

export default TouristSpot;