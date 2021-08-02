import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Grid, TextField } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { AddButton } from '../../../../resource/ButtonColor';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import yearsToMonths from 'date-fns/yearsToMonths/index.js';

interface Props {
  setMember : Function
}
interface State{
  name : string,
  email : string,
  phoneNumber : string,
  birthDay : Date
}
@autobind
@observer
class MemberJoin extends React.Component<Props,State> {
  //
  state : State ={
    name : '',
    email : '',
    phoneNumber : '',
    birthDay : new Date()
  }

  render() {
    const {setMember} = this.props;
    const {name,email,phoneNumber,birthDay} = this.state;
    

    return (
      <>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="email"
                helperText="이메일을 입력해주세요"
                required
                variant="standard"
                value={email}
                onChange={(event) => this.setState({email : event.target.value})}
                onKeyPress={e => {if(e.charCode === 13){setMember(email,name,phoneNumber)}}}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="name"
                variant="standard"
                value={name}
                onChange={(event) => this.setState({name : event.target.value})}
                onKeyPress={e => {if(e.charCode === 13){setMember(email,name,phoneNumber)}}}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="PhoneNumber"
                variant="standard"
                value={phoneNumber}
                onChange={(event) => this.setState({phoneNumber : event.target.value})}
                onKeyPress={e => {if(e.charCode === 13){setMember(email,name,phoneNumber)}}}
              />
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="BirthDay"
                format="yyyy-MM-dd"
                value={birthDay}
                onChange={(event : any) => this.setState({birthDay : event.valueOf()})}
                KeyboardButtonProps={{
                  'aria-label' : 'change date'
                }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={10}>
              <AddButton
                variant="contained"
                color="primary"
                startIcon={<Save />}
                onClick={() => {setMember(email,name,phoneNumber,birthDay)}}
              >
                멤버 추가
              </AddButton>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}
export default MemberJoin;
