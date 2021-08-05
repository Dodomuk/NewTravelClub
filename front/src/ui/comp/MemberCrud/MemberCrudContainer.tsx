
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import { MemberService } from '../../../service';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CommunityMember } from '../../../model';
import MemberCrudView from './view/MemberCrudview';

interface Props extends RouteComponentProps{
    //
    memberService?: MemberService;
    onSuccess : Function;
}
@inject(MemberService.instanceName)
@autobind
@observer
class MemberCrudContainer extends React.Component<Props> {
    //

    lengthCondition(name : string , email : string){
        if(name.length < 3){
            window.alert('이름은 3자 이상');
            return;
        }else{
            let pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if(!pattern.test(email)){
                window.alert('이메일 형식이 맞지 않습니다.');
                return;
            }
        }
    }

    async setMember(email : string, name : string, phoneNumber : string , birthDay : Date){

        this.lengthCondition(name,email);

        let stringBirth = JSON.stringify(new Date(birthDay)).slice(1,11);

        this.props.memberService?.setMember(new CommunityMember(email,name,phoneNumber,stringBirth));
        await this.props.memberService?.registerMember(this.props.memberService.member!);
        window.alert('멤버가 추가되었습니다~');
        // this.props.flagSwitch();
        this.props.onSuccess();
    }

    render() {
        //
        return (
            <MemberCrudView
                setMember={this.setMember}
            />
        );
    }
}

export default withRouter(MemberCrudContainer);
