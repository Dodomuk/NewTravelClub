import React from "react";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { ClubsMainContainer, MainContainer } from "./ui/page";
import { Header } from "./ui/page/common";
import MembersMainContainer from "./ui/page/members/MembersMainContainer";

class Routes extends React.PureComponent {
  //
  render() {
    //

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect exact from="/" to="/main" />}
          />
          <Route exact path="/clubs" render={() => <ClubsMainContainer />} />
          <Route exact path="/members" render={() => <MembersMainContainer />} />
          <Route exact path="/main" render={() => <MainContainer />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
