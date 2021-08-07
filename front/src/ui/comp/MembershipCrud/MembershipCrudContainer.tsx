import React from "react";
import autobind from "autobind-decorator";
import {inject, observer} from "mobx-react";
import {ClubsService, MembershipService} from "../../../service";
import {RouteComponentProps, withRouter} from "react-router-dom";
import MembershipCrudView from "./view/MembershipCrudView";
import { MembershipCdo, RoleInClub, TravelClub} from "../../../model";

interface Props extends RouteComponentProps {
    membershipService?: MembershipService;
    ClubsService? : ClubsService;
}

interface State {
    clubs : TravelClub[],
    clubId: string,
    memberId: string,
    role : RoleInClub,
    membershipCdo : MembershipCdo
}
@inject(MembershipService.instanceName , ClubsService.instanceName)
@autobind
@observer
class MembershipCrudContainer extends React.Component<Props, State> {

    state: State = {
        clubs : [],
        clubId: '',
        memberId: '',
        role: RoleInClub.Member,
        membershipCdo: new MembershipCdo('','',RoleInClub.Member)
    }

     async componentDidMount() {
       await this.init();
    }

    async init(){
       const club = await this.props.ClubsService?.findAllClubs();
        this.setState({clubs : club!});
    }

    selectRole(event : React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;

        value === 'President' ?
            this.setState({membershipCdo :
                    {...this.state.membershipCdo,role : RoleInClub.President}})
        :
            this.setState({membershipCdo :
                    {...this.state.membershipCdo,role : RoleInClub.Member}});
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({membershipCdo :
                {...this.state.membershipCdo,clubId: value, memberId: name}});

    }

     addMembership() {
        const {membershipService} = this.props;
        const {membershipCdo} = this.state;

        console.log(this.state.membershipCdo);

        membershipService?.registerMembership(membershipCdo);

        window.alert('맴버십이 등록되었습니다.');

        this.props.history.go(-1);
    }

    render() {
        //

        const {clubs}=this.state;

        return (
            <MembershipCrudView
                onChange={this.onChange}
                selectRole={this.selectRole}
                addMembership={this.addMembership}
                clubs={clubs}
            />
        );
    }
}


export default withRouter(MembershipCrudContainer);
