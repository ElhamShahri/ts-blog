import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pages from "./pages/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
