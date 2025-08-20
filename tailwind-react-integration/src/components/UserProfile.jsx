import React from "react";

function UserProfile() {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-4 md:p-8 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg md:text-xl font-bold mb-2">Jane Doe</h2>
      <p className="text-sm md:text-base text-gray-600">
        Frontend Developer | Passionate about creating beautiful and responsive user interfaces with React and Tailwind CSS.
      </p>
    </div>
  );
}

export default UserProfile;
