import Nav from "./Components/Nav/Nav";
import Menu from "./Components/Menu/Menu";
import Hero from "./Components/Hero/Hero";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Menu />
      <span className="tag">{"<About Me>"}</span>
      <Hero />
      <span className="tag">{"</About Me>"}</span>
    </div>
  );
}

export default App;
