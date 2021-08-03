import React from "react";
import autobind from "autobind-decorator";
import { RouteComponentProps, withRouter } from "react-router";
import { Grid } from "@material-ui/core";

import { MembershipList , SearchBox } from "../../comp";

interface Props extends RouteComponentProps {}

interface State {
  //
  keyword: string;
}

@autobind
class MembershipListContainer extends React.Component<Props, State> {
  //
  state: State = {
    keyword: "",
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const keyword = event.target.value;

    this.setState({ keyword });
  }

  onSuccess() {

    this.props.history.go(0);

  }

  render() {
    //
    const { keyword } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBox keyword={keyword} onChange={this.onChange} />
           <MembershipList/>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(MembershipListContainer);
