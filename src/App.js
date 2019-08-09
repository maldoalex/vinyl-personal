import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/Header/Header";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
