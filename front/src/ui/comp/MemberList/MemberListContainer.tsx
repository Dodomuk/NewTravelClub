
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import { MembersService } from '../../../service';
import MemberListView from './view/MemberListView';


interface Props {
  //
  membersService?: MembersService;
   
  keyword?: string;
}
@inject(MembersService.instanceName)
@autobind
@observer
class MemberListContainer extends React.Component<Props> {
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
    const { membersService, keyword } = this.props;

    if (keyword) {
      membersService!.findMembersByName(keyword);
        }
    else {
     membersService!.findAllMembers();

    }
  }

  render() {
    //
    const {members} = this.props.membersService!;

    return (
      <MemberListView
      members={members}
      />
    );
  }

  
}

export default MemberListContainer;
