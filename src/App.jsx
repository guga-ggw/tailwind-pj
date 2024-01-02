import { useState } from 'react';
import './style.scss';
import logo from './assets/logo.png'
import rating from './assets/star.png'

function App() {

  const[navbar, setnavbar] = useState(false)

  return (
    <>
    <div id='main-container' className="w-full h-[100vh] bg-red-900 ">
      {/* Modul */}
     {navbar &&  <div className="w-full h-full bg-black absolute top-0 left-0 z-30 bg-opacity-70 flex justify-center items-center">
      <div className="flex flex-column gap-20 w-[80%] h-[80%] opacity-100 justify-center items-center">
        <ul className='flex flex-col gap-20 text-rose-50 font-sans text-center text-[45px] font-semibold'>
          <li className=''>Home</li>
          <li>Order</li>
          <li>Contact us</li>
        </ul>
      </div>
      </div>
      }
      {/* Navbar */}
      <nav className="w-full h-20 flex justify-around items-center relative md:justify-between md:px-20">
        <div id="overlay" className='absolute left-0 top-0 w-full h-full bg-black'></div>
        <ul className='hidden md:flex md:gap-14 md:items-center text-white text-1xl font-medium z-50'>
          <li>Home</li>
          <li>Order</li>
          <li>Contact us</li>
        </ul>
        <img className='w-24 h-10 z-30' src={logo} alt="" />
       <div className='md:flex items-center gap-5 text-white hidden'>
       <i className="fa-solid fa-bag-shopping hidden md:block text-white z-30 text-3xl"></i>
       <h2 className='z-30 font-sans font-semibold'>Menu</h2>
       </div>
        <i className={`fa-solid fa-${navbar ? 'x' : "bars-staggered"} z-50 cursor-pointer md:hidden`}
        style={{color : "white", fontSize : "30px"}}
        onClick={() => setnavbar(navbar => !navbar)}
        id='nav-icon'
        ></i>
      </nav>
      {/* MainContent */}
        <div className="w-full h-5/6 flex flex-col items-center justify-center space-y-5 ">
          <h2 id='content_txt' className='text-white font-extrabold text-4xl'>Healthy ver outlet</h2>
          <div className="w-80 h-14 border-2 rounded-3xl flex items-center justify-between px-[2px] bg-black bg-opacity-30">
            <div id='loc-box' className="w-2/5 h-11 bg-green-700 flex items-center justify-around rounded-3xl text-white">
            <i className="fa-solid fa-location-dot"></i>
            <p className='text-xl'>Location</p>
            <i className="fa-solid fa-caret-down"></i>
            </div>
            <h2 className='text-white font-bold font-mono text-1xl'>Search</h2>
            <i className="fa-solid fa-magnifying-glass bg-orange-500 h-[90%] w-12 rounded-[50%] flex items-center justify-center"></i>
          </div>
          <div className="w-80 h-12  rounded-xl bg-black bg-opacity-60 flex items-center px-2">
            <img src={rating} alt="" />
          </div>
        </div>
      {/* Footer */}
    </div>
    </>
  );
}

export default App;
