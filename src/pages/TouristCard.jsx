import React from 'react';

const TouristCard = ({data}) => {


    // const {image,country,spotname,location,cost,description,seassionality,traveltime,
    // visitor,name,email} = touristspots ;
    const {image,country,spotname,location,cost,description,seassionality,traveltime,
    visitor,name,email} = data ;
	// console.log("touristspot",touristspots);
	console.log("touristspot",data);
	// touristspot || {};
    return (
        // <div>{data?.country}</div>
		<div>
             <div>
            <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100">{location}</a>
		</div>
		<a rel="noopener noreferrer" href="#">{country}</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>{location}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400">{description}</h3>
			</a>
			<p className="leading-snug text-gray-400">{description}</p>
			<div>
			<div className='flex justify-between'>
			<a rel="noopener noreferrer" href="#">{spotname}</a>
			<a rel="noopener noreferrer" href="#">Price:{cost}</a>
			</div>
			<div className='flex justify-between'>
			<a rel="noopener noreferrer" href="#">Seasion{seassionality}</a>
			<a rel="noopener noreferrer" href="#">Travel time:{traveltime}</a>
			</div>
			<a rel="noopener noreferrer" href="#">Visitor:{visitor}</a>
			<div className='flex justify-between'>
			<a rel="noopener noreferrer" href="#">User Name:{name}</a>
			<a rel="noopener noreferrer" href="#">User Email:{email}</a>
			</div>
			</div>
		</div>
	</div>
</div>
        </div>
        </div>
    );
};

export default TouristCard;