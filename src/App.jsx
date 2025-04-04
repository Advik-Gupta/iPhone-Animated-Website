import Navbar from "./components/navbar/navbar.component";
import Highlights from "./components/highlights/highlights.component";
import Hero from "./components/hero/hero.component";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
