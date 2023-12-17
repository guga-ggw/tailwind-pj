import { useState } from 'react';
import './style.scss';
import mainImg from './assets/main-il.png';

function App() {
  return (
    <>
      <div className="w-screen bg-orange-50 h-fit mr-0 p-0 box-border overflow-y-scroll no-scrollbar">
        <nav className="w-full bg-red-800 h-fit pt-5 pb-5 flex items-center justify-around gap-1">
          <div className="w-1/5 h-20 bg-green-900"></div>
          {/* list*/}
          <div className="w-2/4 h-20 bg-red-300 flex justify-center items-center"></div>
          {/* registration*/}
          <div className="w-1/5 h-20 gap-5 bg-blue-600"></div>
        </nav>
        <div className="w-full h-[100vh] flex flex-row gap-5 p-20">
          <div className="w-1/2 h-2/5 mt-[140px] flex flex-col justify-around text-left relative">
            <h1 id="main_txt" className="pl-10 text-6xl font-bold w-5/6">
              Want anything to be easy with LaslesVPN.
            </h1>
            <p id="main_p" className="p-10 text-gray-900 w-5/6">
              Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.
            </p>
            <button
              id="main_btn"
              className="w-72 h-16 bg-red-600 rounded-xl text-white font-extrabold text-lg drop-shadow-xl absolute left-28 bottom-[-50px]"
            >
              <h2 id="button_txt" className="drop-shadow-7xl">
                Get Started
              </h2>
            </button>
          </div>
          <div className="w-1/2 h-3/4 flex justify-center items-center">
            <img className="w-2/3" src={mainImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
