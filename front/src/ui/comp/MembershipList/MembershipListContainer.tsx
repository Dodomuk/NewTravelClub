
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import { MembershipsService } from '../../../service';
import MembershipListView from './view/MembershipListView';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps<{},{},{clubId :string}>{
  //
  membershipsService?: MembershipsService;
  keyword?: string;
  clubId? : string
}
@inject(MembershipsService.instanceName)
@autobind
@observer
class MembershipListContainer extends React.Component<Props> {
  //
  static defaultProps = {
    keyword: '',
  };

  componentDidMount() {
    //
    this.init();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
    //
    const { keyword: prevKeyword } = prevProps;
    const { keyword } = this.props;
    if (prevKeyword !== keyword ) {
    this.init();
    }
  }

  init() {
    //
    const { membershipsService, keyword } = this.props;
    if (keyword) {
        membershipsService!.findMembershipByMemberId(keyword);
        }
    else {
      membershipsService!.findMembershipByClubId(this.props.location.state.clubId);
      }
  }

  render() {
    //
    const {members} = this.props.membershipsService!;
    const {clubId} = this.props.location.state;

    return(
        <MembershipListView
        members={members}
        />
    );
  }

  
}

export default withRouter(MembershipListContainer);
