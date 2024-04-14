import "./App.css";
import Data from "./components/Data";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <Stats />
      <hr className="border-gray-600 my-4" />
      <Data />
      <hr className="border-gray-600 my-4" />
      <footer className="flex flex-col items-center justify-center text-center text-gray-500 text-sm mt-4 p-5">
        <hr className="w-full mb-4 border-gray-600" />
        <div className="w-full flex justify-between ">
          <p className="mb-2 font-bold text-white">Copyright © 2019 HodlInfo.com</p>
          <a href="/support" className="no-underline text-white font-bold">Support</a>
        </div>
        <hr className="w-full mb-4 border-gray-600" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          Add HodlInfo to Home Screen
        </button>
      </footer>
    </div>
  );
}

export default App;
