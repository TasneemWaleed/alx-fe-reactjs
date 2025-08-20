import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md rounded-lg sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
      />
      <h2 className="font-bold sm:text-lg md:text-xl mt-4">John Doe</h2>
      <p className="text-gray-600 sm:text-sm md:text-base">
        A passionate developer who loves React and Tailwind CSS.
      </p>
    </div>
  );
};

export default UserProfile;
