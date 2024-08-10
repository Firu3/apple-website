import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import Faisal from "./FaisalFile/Faisal";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Faisal/>
    </main>
  );
};

export default App;
