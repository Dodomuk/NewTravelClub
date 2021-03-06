import React from "react";
import autobind from "autobind-decorator";
import { RouteComponentProps, withRouter } from "react-router";
import { Grid } from "@material-ui/core";

import { ClubList, ClubCrud, SearchBox } from "../../comp";

interface Props extends RouteComponentProps {}

interface State {
  //
  keyword: string;
}

@autobind
class ClubsMainContainer extends React.Component<Props, State> {
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

  // flagSwitch() {
  //   let flag = !this.state.flag;
  //   this.setState({ flag });
  // }

  render() {
    //
    const { keyword } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ClubCrud onSuccess={this.onSuccess}/>
          <SearchBox keyword={keyword} onChange={this.onChange} />
          <ClubList keyword={keyword} />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(ClubsMainContainer);
