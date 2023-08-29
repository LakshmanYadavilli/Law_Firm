import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Body from "./Components/Body/Body";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <HeroSection />
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

export default App;
