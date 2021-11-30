import "./App.css";
import { CountButton } from "./components/itemCount/itemCount.js";
import { Navbar } from "./components/Navbar/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <CountButton stock={8} initial={1} />
    </>
  );
}

export default App;
