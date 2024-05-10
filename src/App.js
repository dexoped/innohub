import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import Incubators from "./components/Incubators";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/Incubators" element={<Incubators />} />
      </Routes>
    </Router>
  );
}

export default App;