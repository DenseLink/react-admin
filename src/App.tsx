import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import KanbanBoard from "./components/KanbanBoard/Column";
import Home from "./pages";
import SignIn from "./pages/signin";

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={SignIn} path="/signin" />
        <Route component={KanbanBoard} path="/kanban" />
      </Switch>
    </Router>
  );
};

export default App;
// tutorial here: https://www.youtube.com/watch?v=Nl54MJDR2p8
