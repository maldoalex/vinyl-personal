import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/Header/Header";
import LibraryPage from "./pages/LibraryPage/Library";
import OrderPage from "./pages/OrderPage/OrderPage";

import "./App.scss";

//main parent component where children reside, set up routes to different pages
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/order" component={OrderPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
