import React from 'react';
import Swal from 'sweetalert2';

const TouristCard = ({data}) => {


    // const {image,country,spotname,location,cost,description,seassionality,traveltime,
    // visitor,name,email} = touristspots ;
    const {_id,image,country,spotname,location,cost,description,seassionality,traveltime,
    visitor,name,email} = data ;
	// console.log("touristspot",touristspots);
	console.log("touristspot",data);
	const handleDelete=_id=>{
console.log(_id);
Swal.fire({
	title: "Are you sure?",
	text: "You won't be able to revert this!",
	icon: "warning",
	showCancelButton: true,
	confirmButtonColor: "#3085d6",
	cancelButtonColor: "#d33",
	confirmButtonText: "Yes, delete it!"
  }).then((result) => {
	if (result.isConfirmed) {
	
	fetch(`https://travel-tourism-server.vercel.app/touristspot/${_id}`,{
		method:'DELETE'
		
	})
	.then(res=> res.json())
	.then(data=>{
		// console.log(data);
		if(data.deletedCount > 0){
			Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success"
				  })
		}
	})
	}
  });
	}
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
			<div className="flex items-center text-xs gap-2">
				<span><button className='btn btn-primary'>Add</button></span>
				<span><button className='btn btn-block'>Update</button></span>
				{/* <span><Link to={`/update/${_id}`}><button className='btn btn-block'>Update</button></Link></span> */}
				<span><button
				onClick={()=>handleDelete(_id)}
				 className='btn btn-error'>Delete</button></span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400">{description}</h3>
			</a>
			
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
			<a rel="noopener noreferrer" href="#">Name:{name}</a>
			<a rel="noopener noreferrer" href="#">Email:{email}</a>
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