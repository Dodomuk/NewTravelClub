import React from "react";
import autobind from "autobind-decorator";
import { inject, observer } from "mobx-react";
import { MembershipService } from "../../../service";
import { RouteComponentProps, withRouter } from "react-router-dom";
import MembershipCrudView from "./view/MembershipCrudView";
interface Props extends RouteComponentProps {

}
interface State {
  clubId : string,
  memberId : string
}
@inject(MembershipService.instanceName)
@autobind
@observer
class MembershipCrudContainer extends React.Component<Props, State> {

  state: State = {
    clubId : '',
    memberId : ''
  }

//   async confirmationStatus(clubId : string, memberId : string) {
   
//   }

//   async addMembership() {

//     const membershipExists 
//     = await this.confirmationStatus(this.state.clubId,this.state.memberId);

//        window.alert('하이~');

//        this.props.onSuccess();
//   }

  render() {
    //

    return (
      <MembershipCrudView
      
    // addMembership={this.addMembership}
      />
    );
  }
}

export default withRouter(MembershipCrudContainer);
