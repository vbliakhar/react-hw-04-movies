import { Route } from "react-router-dom";
import "./App.scss";
import Helper from "./components/Helper/Helper";
import Counter from "./components/Counter-useReducer/Counter";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage/HomePage";
// import Memo from "./components/Friends-useMemo/Memo";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/link" exact>
        <Helper />
      </Route>
      {/* <Route path=".link" component={Helper} /> */}

      {/* <Counter /> */}
      {/* <Memo /> */}
    </div>
  );
}

export default App;
