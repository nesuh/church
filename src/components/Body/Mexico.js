import React from 'react';
import { Link } from 'react-router-dom';
import church_three from './Assets/church_three.png';

const Mexico = () => {
  return (
    <div>
      <div className="m-16 border-2 border-red-600 p-10">
        <div className="border-2 border-gray-500 p-2 mb-2 w-[300px] h-[241px] mx-10">
          <img src={church_three} alt="church_three" className="w-[267px] h-[149px] mr-2" />
          <div className="w-5 h-5 bg-customYellow border-black rounded-full shadow-lg"></div>
          <div className="bg-customGreen w-[268px] h-[65px]">
            <h1 className='text-center pt-3'>Kidane Mehret</h1>
            <h3>I. Church Leader Melake Sigone</h3>
            <h3>II. Kesis</h3>
            <h3>III. Merigeta</h3>
            <h3>IV. Diakon</h3>
          </div>
          <Link to="/" className="items-center my-6 text-white font-serif text-lg">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mexico;
