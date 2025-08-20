import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to My App</h1>
        <p className="text-lg">A modern React + Tailwind CSS application</p>
      </header>

      {/* Grid Section */}
      <main className="flex-1 container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Fast</h3>
            <p className="text-gray-600">
              Optimized React components with Tailwind CSS styling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Responsive</h3>
            <p className="text-gray-600">
              Works seamlessly on mobile, tablet, and desktop.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple structure, easy to extend and customize.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
