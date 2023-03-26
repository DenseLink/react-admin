import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import KanbanBoard from "./components/KanbanBoard";
import Home from "./pages";
import SignIn from "./pages/signin";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<KanbanBoard />} path="/kanban" />
      </Routes>
    </Router>
  );
};

export default App;
// tutorial here: https://www.youtube.com/watch?v=Nl54MJDR2p8
