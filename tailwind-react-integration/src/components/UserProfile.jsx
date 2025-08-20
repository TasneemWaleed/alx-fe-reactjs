export default function UserProfile() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-6 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h2>
        <p className="mt-2 text-gray-600">Software Engineer</p>
      </div>
    </div>
  );
}
