import Navbar from "./components/navbar/navbar.component";
import Highlights from "./components/highlights/highlights.component";
import Hero from "./components/hero/hero.component";
import Model from "./components/3d-model/model.component";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default App;
