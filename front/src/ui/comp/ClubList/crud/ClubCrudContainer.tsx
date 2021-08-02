
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import { ClubService, ClubsService } from '../../../../service';
import ClubCrudView from './clubView/ClubCrudView';
import { TravelClub } from '../../../../model';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toJS } from 'mobx';
interface Props extends RouteComponentProps{
  //
  clubService?: ClubService;
  clubsService? : ClubsService;
  onSuccess : Function;
  
}
@inject(ClubService.instanceName , ClubsService.instanceName)
@autobind
@observer
class ClubCrudContainer extends React.Component<Props> {
  //

  lengthCondition(name : string, intro : string){
    if(name.length < 3){
      window.alert('이름은 3자 이상');
      return;
    }else if(intro.length < 10){
      window.alert('소개는 10자 이상');
      return;
    }
  }

  async setClub(name : string, intro : string){
    
    this.lengthCondition(name,intro);

    this.props.clubService?.setClub(new TravelClub(name, intro));
    await this.props.clubService?.registerClub(this.props.clubService.club!);
    window.alert('클럽이 추가되었습니다~');
    // this.props.flagSwitch();
    this.props.onSuccess();
  }
  
  updateClub(name : string, intro : string){
    this.props.clubsService?.findClubsByName(name).then((res) => { if(res[0] == null){
      window.alert('해당 클럽이 존재하지 않습니다.');
      this.props.onSuccess();
    }});
    let club = new TravelClub(name,intro);
    this.props.clubService?.modifyClub(club);

  }
  render() {
    //
     return (
      <ClubCrudView
      setClub={this.setClub}
      updateClub = {this.updateClub}
      />
    );
  }
}

export default withRouter(ClubCrudContainer);
