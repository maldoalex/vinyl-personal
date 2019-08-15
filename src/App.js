import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import RegisterAndLoginPage from "./pages/RegisterAndLoginPage/RegisterAndLoginPage";
import Header from "./components/Header/Header";
import VinylCatalogPage from "./pages/VinylCatalogPage/VinylCatalogPage";
import OrderPage from "./pages/OrderPage/OrderPage";

import "./App.scss";

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 300);
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 300);
//   }
// };

// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;

//main parent component where children reside, set up routes to different pages
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={VinylCatalogPage} />
          <Route path="/inventory" component={InventoryPage} />
          <Route path="/login" component={RegisterAndLoginPage} />
          <Route path="/order" component={OrderPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
