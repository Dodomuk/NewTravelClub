
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import { ClubService, ClubsService } from '../../../service';
import ClubCrudView from './view/ClubCrudView';
import { TravelClub } from '../../../model';
import { RouteComponentProps, withRouter } from 'react-router-dom';
interface Props extends RouteComponentProps{
  //
  clubService?: ClubService;
  flagSwitch : Function;
}
@inject(ClubService.instanceName)
@autobind
@observer
class ClubCrudContainer extends React.Component<Props> {
  //

  setClub(name : string, intro : string){
    if(name.length < 3){
      window.alert('이름은 3자 이상');
      return;
    }else if(intro.length < 10){
      window.alert('소개는 10자 이상');
      return;
    }
    
    this.props.clubService?.setClub(new TravelClub(name, intro));
    this.props.clubService?.registerClub(this.props.clubService.club!);
    window.alert('클럽이 추가되었습니다~');
    this.props.flagSwitch();
    // this.props.history.go(0);
  }
  
  render() {
    //
     return (
      <ClubCrudView
      setClub={this.setClub}
      />
    );
  }
}

export default withRouter(ClubCrudContainer);
