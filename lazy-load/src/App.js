import { Switch, Route, Link } from "react-router-dom";

// Component
import { Home, Product, About } from "./pages";
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/list-product" component={Product} />
    </Switch>
  );
}

export default App;
