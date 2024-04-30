// import React from 'react';
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
		const handleAddtouristSpot= event =>{
			event.preventDefault();

		
		

		const form = event.target;
		const image=form.image.value;
		const country=form.country.value;
		const spotname=form.spotname.value;
		const location=form.location.value;
		const cost=form.cost.value;
		const description=form.description.value;
		const seassionality=form.seassionality.value;
		const traveltime=form.traveltime.value;
		const visitor=form.visitor.value;
		const name=form.name.value;
		const email=form.email.value;

		const newTouristSpot={image,country,spotname,location,cost,description,seassionality,traveltime,
			visitor,name,email}
			console.log(newTouristSpot);
//send data to server
fetch('http://localhost:5000/touristspot',{
	method:'POST',
	headers:{
		'content-type' : 'application/json'
	},
	body: JSON.stringify(newTouristSpot)
})
.then(res=>res.json())
.then(data =>{
	console.log(data);
	if(data.insertedId){
		Swal.fire({
			title: 'Success!',
			text: 'user adeded Succesfully',
			icon: 'success',
			confirmButtonText: 'Cool'
		  })
	}
})

		}
    return (
     
<div className="bg-[rgb(243,244,240)] p-24">
<h2 className="text-3xl font-extrabold">Add Tourist Spot</h2>
<form onSubmit={handleAddtouristSpot} >
	{/* form name and quantity row */}
	<div className="mb-8">
		<div className="form-control w-full">
			<label className="label">
				<span className="label-text">Image URL</span>
			</label>
			<label className="input-group">
				<input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	<div className="md:flex mb-8">
		<div className="form-control md:w-1/2">
			<label className="label">
				<span className="label-text">Country Name</span>
			</label>
			<label className="input-group">
				<input type="text" name="country" placeholder="like Bangladesh" className="input input-bordered w-full" />
			</label>
		</div>
		<div className="form-control md:w-1/2 ml-4">
			<label className="label">
				<span className="label-text">Tourists Spot Name</span>
			</label>
			<label className="input-group">
				<input type="text" name="spotname" placeholder="like coxs bazar" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	<div className="md:flex mb-8">
		<div className="form-control md:w-1/2">
			<label className="label">
				<span className="label-text">Location</span>
			</label>
			<label className="input-group">
				<input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
			</label>
		</div>
		<div className="form-control md:w-1/2 ml-4">
			<label className="label">
				<span className="label-text">Average Cost</span>
			</label>
			<label className="input-group">
				<input type="text" name="cost" placeholder="cost" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	<div className="mb-8">
		<div className="form-control w-full">
			<label className="label">
				<span className="label-text">Short Description</span>
			</label>
			<label className="input-group">
				<input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	
	<div className="md:flex mb-8">
		<div className="form-control md:w-1/2">
			<label className="label">
				<span className="label-text">Seassionality</span>
			</label>
			<label className="input-group">
				<input type="text" name="seassionality" placeholder="Summer/Winter" className="input input-bordered w-full" />
			</label>
		</div>
		<div className="form-control md:w-1/2 ml-4">
			<label className="label">
				<span className="label-text">Travel Time</span>
			</label>
			<label className="input-group">
				<input type="text" name="traveltime" placeholder="like 7 days 10days" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	{/* form supplier row */}
	<div className="md:flex mb-8">
		<div className="form-control md:w-1/2">
			<label className="label">
				<span className="label-text">Travel visitor Per Year</span>
			</label>
			<label className="input-group">
				<input type="text" name="visitor" placeholder="like 10000" className="input input-bordered w-full" />
			</label>
		</div>
		<div className="form-control md:w-1/2 ml-4">
			<label className="label">
				<span className="label-text">User Name</span>
			</label>
			<label className="input-group">
				<input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	{/* form category and details row */}
	<div className="mb-8">
		<div className="form-control w-full">
			<label className="label">
				<span className="label-text">User Email</span>
			</label>
			<label className="input-group">
				<input type="email" name="email" placeholder="email@gmail.com" className="input input-bordered w-full" />
			</label>
		</div>
	</div>
	{/* form Photo url row */}
	
	<input type="submit" value="Add Tourist Spot" className="btn btn-block" />

</form>
</div>
    );
};

export default AddTouristSpot;

