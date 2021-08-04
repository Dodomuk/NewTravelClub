import React from "react";
import autobind from "autobind-decorator";
import { observer } from "mobx-react";
import {
  Grid,
  Paper,
  FormControlLabel,
  Switch,
  Zoom,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import { Save, Update, Delete } from "@material-ui/icons";
import { MembershipRegisterButton } from "../../../resource/ButtonColor";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { CommunityMember } from "../../../../model";
import {Theme} from '@material-ui/core/styles';

interface Props
  extends RouteComponentProps<
    {},
    {},
    {
      memberName: CommunityMember;
      memberEmail: CommunityMember;
      memberPhoneNumber: CommunityMember;
      memberBirth: CommunityMember;
    }
  > {
  classes?: {
    root: string;
    paper: string;
  };
}
interface State {
  checked: boolean;
}
@autobind
@observer
class MembershipCrudView extends React.Component<Props, State> {
  //
  state: State = {
    checked: false,
  };

  setChecker(flg: any) {
    this.setState({ checked: flg });
  }

  handleChange = () => {
    this.setChecker((prev: any) => !prev);
  };

  render() {
    // const {addMembership} = this.props;
    const { checked } = this.state;
    return (
      <>
        <Grid container spacing={6}>
          <Paper style={{ margin: "80px 0 0 500px" }}>
            <Grid item xs={12}>
              <h2>회원 프로필</h2>
              <Grid item xs={12}>
                <span> 이름 : {this.props.location.state.memberName} </span>
                <div> 이메일 : {this.props.location.state.memberEmail}</div>
                <div> 번호 : {this.props.location.state.memberPhoneNumber}</div>
                <div> 생년월일 : {this.props.location.state.memberBirth}</div>
              </Grid>
            </Grid>
          </Paper>
          <Grid>
            <h4>클럽 선택</h4>
            <FormControl style={{minWidth:120,maxWidth:300}}>
              <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
              <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  multiple
                  value={clubs}
                  onChange={handleChange}
                  MenuProps={MenuProps}
              >
                {names.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                      {name}
                    </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={8}>
            <MembershipRegisterButton
              variant="contained"
              style={{ margin: "30px 0 0 55%" }}
              // onClick={() => {addMembership}}
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
