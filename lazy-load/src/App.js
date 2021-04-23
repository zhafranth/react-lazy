import { lazy, Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { LoadingPage } from "./components/Loading";

// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const News = lazy(() => import("./pages/News"));
function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/list-product" component={Product} />
        <Route path="/news" component={News} />
      </Switch>
    </Suspense>
  );
}

export default App;
