import Image from "next/image";

export default function Home() {
  return (
    
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Shaniba</h1>
          <p className="text-lg text-gray-600 mt-2">
        MSc Computer Science Graduate from Calicut University
          </p>
        </header>
        <main className="text-center">
          <p className="text-gray-700 mb-4">
        Welcome to my portfolio! Explore my projects and skills below.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        View My Work
          </button>
        </main>
        <footer className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Shaniba. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
