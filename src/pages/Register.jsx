import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister =(e) =>{
        e.preventDefault()
        // const name=e.target.name.value;
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,photo,email,password);
    }
    return (
        <div>
            <div className="hero min-h-screen mb-4 mt-4 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type='text' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name="photo" placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Already have account?</a>
            <Link to='/login' href="#" className="label-text-alt link link-hover">Please Login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
           {/* <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
	<h1 className="text-3xl font-semibold">Sign Up to your account</h1>
	<a className="text-sm dark:text-gray-600" href="/">Or start your free trial</a>
	<form noValidate="" className="space-y-4">
		<div className="flex flex-col">
			<label htmlFor="email" className="sr-only">Email address</label>
			<input id="email" type="email" placeholder="Email address" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
			<label htmlFor="password" className="sr-only">Password</label>
			<input id="password" type="text" placeholder="Password" className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
		</div>
		<div className="flex justify-between">
			<div className="flex items-center">
				
				<label htmlFor="remember" className="text-sm dark:text-gray-600">All ready have account</label>
			</div>
			<Link to='/login' className="text-sm dark:text-gray-600" >Please Login</Link>
		</div>
		<button type="button" className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
	</form>
</div> */}
        </div>
    );
};

export default Register;





// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../AuthProvider/AuthProvider';

// const Register = () => {

//     const {registerUser,setUser}=useContext(AuthContext)
//     const[error,setError]=useState("")

//     const [emailError,setEmailError]= useState("")
   

//     const handleRegister=(e)=>{
//         e.preventDefault()
//         const name=e.target.name.value;
//         const photo=e.target.photo.value;
//         const email=e.target.email.value;
//         const password=e.target.password.value;

//         if(!/gmail\.com$/.test(email)){
//             setEmailError("Email must end with @gmail.com")
//             return
//         }

// if(password.length<6){
//     setError("Password Must be 6 characters")
//     return
// }
// if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/
// .test(password)){
//     setError("Must have upper case and lower case in password")
//     return
// }
// setError('')
// setEmailError('')


// console.log(name,photo,email,password)
// registerUser(email,password)
// .then(result=>{
//   setUser(result.user)
// })
// .catch(error=>setError(error.message.split("/")[1]))
       

//     }
//     return (
//         <div>
//                 <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Register now!</h1>
//       <h5 className="text-5xl font-bold">Welcome to EMAAR</h5>
      
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form onSubmit={handleRegister} className="card-body">
//       <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">PhotoURL</span>
//           </label>
//           <input name='photo' type="text" placeholder="PhotoURL" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input name='email' type="email" placeholder="email" className="input input-bordered" required />
//         </div>
//         {emailError && <small className='text-red-800'>{emailError}</small>}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
//           <label className="label">
           
//             <a href="#" className="label-text-alt link link-hover">Already Register?</a>
//             <Link to="/login"  className="label-text-alt link link-hover">Login Now</Link>
//           </label>
//         </div>
//         {
//             // error  && <small className='text-red-800'>{error}</small>
//             error && <small className='text-red-800'>{error}</small>
//         }
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Register</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Register;