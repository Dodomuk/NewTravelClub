import React from "react";
import autobind from "autobind-decorator";
import { RouteComponentProps, withRouter } from "react-router";
import { Grid } from "@material-ui/core";

import { MemberList, MemberCrud, SearchBox } from "../../comp";

interface Props extends RouteComponentProps {}

interface State {
  //
  keyword: string;
}

@autobind
class MembersMainContainer extends React.Component<Props, State> {
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
          <MemberCrud onSuccess={this.onSuccess}/>
          <SearchBox keyword={keyword} onChange={this.onChange} />
          <MemberList keyword={keyword} />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(MembersMainContainer);
