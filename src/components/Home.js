import React from 'react';
import { Link } from 'react-router-dom';
import church_three from './Assets/church_three.png';

const Home = () => {
  return (
    <div>
      <div className='border-2 border-blue-600'>
        <div className="flex m-16 border-2 border-red-600 p-10">
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className="border-2 border-gray-500 p-2 mb-2 w-[300px] h-[241px] mx-10">
              <Link to="/mexico" className="items-center my-6 text-white font-serif text-lg">
                <img src={church_three} alt="church_three" className="w-[267px] h-[149px] mr-2" />
                <div className="bg-customGreen w-[268px] h-[65px]">
                  <h1 className='text-center pt-3'>Mexico</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
