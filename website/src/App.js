import Header from "./features/header/header.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Toys from "./features/products/toys/toys-component";
import Gifts from "./features/products/gifts/gifts";
import Beauty from "./features/products/beautyproducts/beauty";
import Main from "./features/main/main.component";
import SignIn from "./registration/sign-in/sign-in";
function App() {
  return (
    <div>
      <Header />
      <Route>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signin" component={SignIn} />
          <Route path="/Toys" component={Toys} />
          <Route path="/Gifts" component={Gifts} />
          <Route path="/Beauty" component={Beauty} />
        </Switch>
      </Route>
    </div>
  );
}
export default App;
