import React from 'react';

const Footer = () => {
  return (
    <>
    <hr 
    className="mt-8"
    />
    <footer className=" py-10 border-t-5 ">
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h4 className=" mb-2">Home</h4>
            <ul className="">
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h4 className="mb-2">Login</h4>
            <ul >
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h4 className="mb-2">Search</h4>
            <form className="flex" action="#" method="GET">
              <input type="text" name="search" placeholder="Search..." className="py-2 px-3 rounded-l-md focus:outline-none  " />
              <button type="submit" className="py-2 px-4 rounded-r-md  focus:outline-none ">Go</button>
            </form>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 flex flex-col md:items-end">
  <h4 className="mb-2">Courses</h4>
  <div
  
  >

  <ul className='flex flex-col md:items-end'>
    <li><a href="#" className="">All Courses</a></li>
    <li><a href="#" className="">Featured Courses</a></li>
  </ul>
  </div>
</div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 ">
            <h4 className="mb-2">Portal</h4>
            <ul className="">
              <li><a href="#" className="">Dashboard</a></li>
              <li><a href="#" className="">My Account</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-6">© 2024 How To Abroad. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
