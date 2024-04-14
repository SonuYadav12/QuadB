import "./App.css";
import Data from "./components/Data";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <Stats />
      <Data />
    </div>
  );
}

export default App;
