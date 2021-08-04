import autobind from "autobind-decorator";
import { action } from "mobx";
import React from "react";
import { Component } from "react";
import { TravelClub } from "../../../model";
import { ClubService } from "../../../service";

interface Props{
  clubService? : ClubService,
  club : TravelClub,
  onSuccess? : Function
}
@autobind
class Register extends Component<Props>{

    @action 
    async registerClub(){
      const {club} = this.props;
          this.props.clubService?.setClub(club);
         
          await this.props.clubService?.registerClub(this.props.clubService.club!);
    
           window.alert('클럽이 추가되었습니다~');
    
           this.props.onSuccess!();
    
        } 
        // else {
    
        //   window.alert("중복되는 이름의 클럽이 존재합니다.");
    
        // }
}

export default Register;