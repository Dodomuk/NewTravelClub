import React from "react";
import autobind from "autobind-decorator";
import { inject, observer } from "mobx-react";
import { ClubService, ClubsService } from "../../../../service";
import ClubCrudView from "./clubView/ClubCrudView";
import { TravelClub } from "../../../../model";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { toJS } from "mobx";
import { update } from "lodash";
interface Props extends RouteComponentProps {
  //
  clubService?: ClubService;
  clubsService?: ClubsService;
  onSuccess: Function;
}
interface State {
  clubs : TravelClub[] | undefined,
  name : string,
  intro : string
}
@inject(ClubService.instanceName, ClubsService.instanceName)
@autobind
@observer
class ClubCrudContainer extends React.Component<Props, State> {

  state: State = {
    clubs : undefined,
    name : '',
    intro : ''
  }
  
   nameLengthCondition(name: string) {
    if (name.length < 3) {
      window.alert("이름은 3자 이상");
    }
  }

   introLengthCondition(intro: string) {
   if (intro.length < 10) {
     window.alert("소개는 10자 이상");
    }
  }

  async duplicationCheck(name: string) : Promise<number> {
   
    //이름 중복시 1 , 아닐시 0
    let nameExists = 0;

    await this.props.clubsService?.findAllClubs().then((club) => {
      [...club].map((club) => {
        if (club.name === name) {
          nameExists = 1;
        }
      });
    });
    return nameExists;
  }

  async setClub(name: string, intro: string) {
    this.nameLengthCondition(name);
    this.introLengthCondition(intro);

    const nameExists : number = await this.duplicationCheck(name);

    if (nameExists === 0) {
      
      this.props.clubService?.setClub(new TravelClub(name, intro));
     
      await this.props.clubService?.registerClub(this.props.clubService.club!);

       window.alert('클럽이 추가되었습니다~');

       this.props.onSuccess();

    } else {

      window.alert("중복되는 이름의 클럽이 존재합니다.");

    }
  }

  //  update(name : string, intro : string){
  //     return new Promise(function(resolve,reject){
  //       this.props.clubService?.modifyClub(res[0].id,new TravelClub(name,intro));
  //  })};

  async findClubs(name: string,intro?:string) {

     this.nameLengthCondition(name);


    if(intro != null){
     this.introLengthCondition(intro);
    }

    //name으로 밖에 찾을수 없어 받은 배열 값의 제일 앞을 가져옴
    const foundClub =  await this.props.clubsService?.findClubsByName(name);
     if(foundClub != null){
     this.setState({clubs : foundClub});
    }else{
      window.alert('클럽을 찾을수 없습니다.');
    }
    }


  async updateClub(name: string, newIntro: string) {

    await this.findClubs(name);

    if (this.state.clubs![0]) {
      await this.props.clubService?.modifyClub(this.state.clubs![0].id, new TravelClub(name, newIntro))
      .catch(() =>window.alert("해당 이름을 가진 클럽이 존재하지 않습니다.") )
      .finally(()=> window.alert("클럽이 수정되었습니다!"));
    } else {
      window.alert("해당 이름을 가진 클럽이 존재하지 않습니다.");
    }

    this.props.onSuccess();
  }


  async deleteClub(name: string) {
   
    await this.findClubs(name);
 
    if(this.state.clubs != null){
       await this.props.clubService?.removeClub(this.state.clubs[0].id)
       .finally(() => window.alert("삭제가 완료되었습니다!"));
      }

    this.props.onSuccess();
  }

  render() {
    //
    return (
      <ClubCrudView
        setClub={this.setClub}
        updateClub={this.updateClub}
        deleteClub={this.deleteClub}
      />
    );
  }
}

export default withRouter(ClubCrudContainer);
