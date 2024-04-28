import React from 'react';

const AddTouristSpot = () => {
    return (
        <div>
            <h1>added new  tourist spot</h1>
            <section className=" p-6 bg-gray-800 text-gray-50">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className=" grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			{/* <div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div> */}
			<div className=" grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="imageurl" className="text-sm">Image Url</label>
					<input id="imageurl" type="text" placeholder="Image Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Tourists Spot Name</label>
					<input id="touristspotname" type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="countryname" className="text-sm">Country Name</label>
					<input id="country_name" type="email" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="location" className="text-sm">Location</label>
					<input id="location" type="name" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
			
				{/* <div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div> */}
        <div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Short Description</label>
					<textarea id="bio" placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"></textarea>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="cost" className="text-sm">Average Cost</label>
					<input id="cost" type="text" placeholder="Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="season" className="text-sm">Seasonality</label>
					<input id="season" type="text" placeholder="summer/winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
        <div className="col-span-full sm:col-span-3">
					<label htmlFor="time" className="text-sm">Travel Time</label>
					<input id="time" type="text" placeholder="Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="visitor" className="text-sm">Travel visitor Per Year</label>
					<input id="visitor" type="text" placeholder="like-10000" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="name" className="text-sm">User Name</label>
					<input id="name" type="name" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
        <div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">User Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
        <div className="col-span-full">
					<button className=" btn btn-primary text-sm">Add Tourist Spot</button>
				
				</div>
			</div>
		</fieldset>
		{/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"></textarea>
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 bg-gray-500 rounded-full bg-gray-700" />
						<button type="button" className="px-4 py-2 border rounded-md border-gray-100">Add </button>
					</div>
				</div>
			</div>
		</fieldset> */}
	</form>
</section>
        </div>
    );
};

export default AddTouristSpot;

