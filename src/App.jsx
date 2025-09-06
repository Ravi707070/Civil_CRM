import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leads from "./pages/Leads";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </Router>
  );
}

export default App;
