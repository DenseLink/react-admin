import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

// eslint-disable-next-line import/extensions
import Home from "./pages";

const App = (): JSX.Element => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
