import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
