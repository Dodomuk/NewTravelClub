
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { ClubsService } from '../../../service';
import ClubListView from './view/ClubListView';
import '../../resource/ClubNavLinkStyle.css';

interface Props {
  //
  clubsService?: ClubsService;
   
  keyword?: string;
}
@inject(ClubsService.instanceName)
@autobind
@observer
class ClubListContainer extends React.Component<Props> {
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
