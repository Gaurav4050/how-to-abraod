import React from 'react';

const PortalPage = () => {
  return (
    <div className="bg-black-50  py-12 h-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold  mb-4">Welcome to HowToAbroad Portal</h2>
          <p className="text-lg  mb-8">Your gateway to finding courses and managing your journey abroad!</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10">
          <div className="max-w-lg mx-auto md:mr-4 mb-8 md:mb-0">
            <img src="https://howtoabroad.com/wp-content/uploads/2021/09/cropped-HTA-logo_No-BG.png" alt="Portal" className="rounded-lg" />
          </div>
          <div className="max-w-lg mx-auto md:ml-4">
            <h3 className="text-xl font-semibold  mb-4">Explore and Manage Your Journey</h3>
            <p className=" mb-4">With HowToAbroad Portal, you can:</p>
            <ul className="">
              <li className="mb-2">Search for courses and educational opportunities abroad</li>
              <li className="mb-2">Access personalized recommendations based on your interests and preferences</li>
              <li className="mb-2">Track your application process and manage your documents</li>
              <li className="mb-2">Connect with other students and professionals</li>
              <li className="mb-2">And much more!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalPage;
