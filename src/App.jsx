import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BeatList from "./components/BeatList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <BeatList />
      <Footer />
    </div>
  );
}

export default App;
