
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { ClubsService } from '../../../service';
import ClubListView from './view/ClubListView';


interface Props {
  //
  clubsService?: ClubsService;
   
  keyword?: string;
  flag : boolean;
}
@inject(ClubsService.instanceName)
@autobind
@observer
class ClubListContainer extends React.Component<Props> {
  //
  static defaultProps = {
    keyword: '',
    flag : false
  };

  componentDidMount() {
    //
    this.init();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
    //
    const { keyword: prevKeyword , flag: prevFlag} = prevProps;
    const { keyword , flag } = this.props;
    if (prevKeyword !== keyword || flag !== prevFlag) {
    this.init();
    }
  }

  init() {
    //
    const { clubsService, keyword } = this.props;
    if (keyword) {
      clubsService!.findClubsByName(keyword);
        }
    else {
      clubsService!.findAllClubs();
    }
  }

  render() {
    //
    const { clubs } = this.props.clubsService!;
    return (
      <>
      <ClubListView
        clubs={clubs}
      />
      </>
    );
  }

  
}

export default ClubListContainer;
