import React from "react";
import autobind from "autobind-decorator";
import {inject, observer} from "mobx-react";
import {
    Grid,
    Paper,
    FormControlLabel,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    RadioGroup,
    Radio,
    FormLabel, TextField
} from "@material-ui/core";
import {MembershipRegisterButton} from "../../../resource/ButtonColor";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {CommunityMember, TravelClub} from "../../../../model";
import {ClubsService} from "../../../../service";
import {toJS} from "mobx";

interface Props
    extends RouteComponentProps <{}, {}, {
        memberId: CommunityMember,
        memberName: CommunityMember,
        memberEmail: CommunityMember,
        memberPhoneNumber: CommunityMember,
        memberBirth: CommunityMember
    }> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectRole: (event: React.ChangeEvent<HTMLInputElement>) => void;
    clubsService?: ClubsService;
    addMembership?: () => void;
    clubs?: TravelClub[];
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
                <form>
                    <Grid container xs={10} spacing={6}>
                        <Paper style={{margin: "80px 0 0 200px"}}>
                            <Grid item xs={12}>
                                <h2>회원 프로필</h2>
                                <Grid item xs={12}>
                                    <TextField label="이름"
                                               defaultValue={communityMember.memberName}
                                               inputProps={{readOnly: true}}>
                                    </TextField>
                                    <TextField label="이메일"
                                               defaultValue= {communityMember.memberEmail}
                                               inputProps={{readOnly: true}}>
                                    </TextField>
                                    <TextField label="번호"
                                               defaultValue={communityMember.memberPhoneNumber}
                                               inputProps={{readOnly: true}}>
                                    </TextField>
                                    <TextField label="생년월일"
                                               defaultValue={communityMember.memberBirth}
                                               inputProps={{readOnly: true}}>
                                    </TextField>
                                </Grid>

                                <h4>클럽 선택</h4>
                                {/*<FormControl style={{width:"150px"}}>*/}
                                {/*    <InputLabel className="label" style={{width:"500px"}}> select Clubs! </InputLabel>*/}
                                {/*    <Select name={communityMember.memberId as unknown as string} onChange={onChange}>*/}
                                {/*        {this.props.clubs!.map((club) => (*/}
                                {/*            <MenuItem value={club.name}>*/}
                                {/*                {club.name!}*/}
                                {/*            </MenuItem>*/}
                                {/*        ))}*/}
                                {/*    </Select>*/}
                                {/*</FormControl>*/}

                                <FormControl style={{marginLeft: "80px"}}>
                                    <FormLabel>
                                        Role
                                    </FormLabel>
                                    <RadioGroup onChange={this.props.selectRole}>
                                        <FormControlLabel value="Member" control={<Radio/>} label="Member"/>
                                        <FormControlLabel value="President" control={<Radio/>} label="President"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                        </Paper>
                    </Grid>
                </form>

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
