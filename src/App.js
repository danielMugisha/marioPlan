import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SIgnIn";
import SIgnUp from "./components/auth/SignUp";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SIgnUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
