import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
// import TouristCard from './TouristCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  // const dataInfo = useLoaderData();
  return (
    <div>
      <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
              <br className="sm:hidden" />50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free Airport drop and Pickup! Use code:</span>
              <span className="font-bold text-lg">UnitedTrip</span>
            </div>
            <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Book Now</a>
          </div>
        </div>
      </div>
      <div>
        <div className=" carousel mt-5">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/25H9YwpT/5-south-east-asian-countries.jpg" className="ml-48 mt-20 p-35 h-2/4 w-2/3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/76QX2Ymk/best-places-to-visit-in-southeast-asia-ang-thong-national-marine-park-thailand-1024x670.jpg" className="ml-48 mt-20 p-35 h-2/4 w-2/3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/vBtR5nCV/65c4dfd7f485f6001d076163.jpg" className=" ml-48 mt-20 p-35 h-2/4 w-2/3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.postimg.cc/7ZfBqzVN/32-FTXi-Zs-Ho-AWXDGUT6-Xf-PTLRBb-YW7-TUFp-RSTArz-Foa-EZEd1tue6wov-NSKwu-Chdjsbjh77-WT7-TAdq-RCnbsu5k-HL9-HWWLCCbf1x-T44.webp" className="ml-48 mt-20 p-35 h-2/4 w-2/3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        </div>
             
        {/* <div>
        {
          dataInfo.map((data) => (
            <TouristCard key={data._id} data={data}></TouristCard>
          ))
        }
        </div> */}
      
      </div>

      );
};

      export default Home;