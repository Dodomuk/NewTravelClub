import React from "react";
import autobind from "autobind-decorator";
import {inject, observer} from "mobx-react";
import {
    Grid,
    Paper,
    FormControlLabel,
    Switch,
    Zoom,
    FormControl,
    Select,
    MenuItem,
    InputLabel, Theme, RadioGroup, Radio, FormLabel
} from "@material-ui/core";
import {MembershipRegisterButton} from "../../../resource/ButtonColor";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {CommunityMember, TravelClub} from "../../../../model";
import {ClubsService} from "../../../../service";
import {toJS} from "mobx";

const useStyles = ((theme: Theme) => {
        formStyle : {
            margin : theme.spacing(2)
        }
    }
)

interface Props
    extends RouteComponentProps <{}, {}, {
        memberId: CommunityMember,
        memberName: CommunityMember,
        memberEmail: CommunityMember,
        memberPhoneNumber: CommunityMember,
        memberBirth: CommunityMember
    }> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectRole : (event: React.ChangeEvent<HTMLInputElement>) => void;
    clubsService?: ClubsService;
    addMembership?: () => void;
    clubs?:TravelClub[];
    useStyles?: {
        formStyle: string
    };
}

@inject(ClubsService.instanceName)
@autobind
@observer
class MembershipCrudView extends React.Component<Props> {
    //
    render() {

        const {onChange}: any = this.props as unknown as string;

        const communityMember = this.props.location.state;

        return (
            <>
                <Grid container spacing={8}>
                    <Paper style={{margin: "80px 0 0 500px"}}>
                        <Grid item xs={12}>
                            <h2>회원 프로필</h2>
                            <Grid item xs={12}>
                                <span> 이름 : {communityMember.memberName} </span>
                                <div> 이메일 : {communityMember.memberEmail}</div>
                                <div> 번호 : {communityMember.memberPhoneNumber}</div>
                                <div> 생년월일 : {communityMember.memberBirth}</div>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Grid style={{margin: "80px 0 0 50px"}}>
                        <h4>클럽 선택</h4>
                        {/*<FormControl className={this.props.useStyles?.formStyle} style={{width:"150px"}}>*/}
                        {/*    <InputLabel className="label" style={{width:"500px"}}> select Clubs! </InputLabel>*/}
                        {/*    <Select name={communityMember.memberId as unknown as string} onChange={onChange}>*/}
                        {/*        {this.props.clubs!.map((club) => (*/}
                        {/*            <MenuItem value={club.name}>*/}
                        {/*                {club.name!}*/}
                        {/*            </MenuItem>*/}
                        {/*        ))}*/}
                        {/*    </Select>*/}
                        {/*</FormControl>*/}

                        <FormControl style={{marginLeft:"80px"}}>
                            <FormLabel>
                                Role
                            </FormLabel>
                            <RadioGroup onChange={this.props.selectRole}>
                            <FormControlLabel value="Member" control={<Radio/>} label="Member"/>
                            <FormControlLabel value="President" control={<Radio/>} label="President"/>
                            </RadioGroup>
                        </FormControl>

                    </Grid>

                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <MembershipRegisterButton
                            variant="contained"
                            style={{margin: "30px 0 0 55%"}}
                            onClick={() => {
                                this.props.addMembership!()
                            }}
                        >
                            멤버십 가입
                        </MembershipRegisterButton>
                        &nbsp;&nbsp;
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withRouter(MembershipCrudView);
