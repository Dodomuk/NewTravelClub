import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Grid, TextField, Button } from '@material-ui/core';
import TravelClub from '../../../../model/club/TravelClub';

interface Props{
  club : TravelClub,
  stateOnChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
}
@autobind
@observer
class ClubTextInputView extends React.Component<Props> {
  //

  render() {
    const {club,stateOnChange} = this.props;

    return (
      <>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField
                margin="normal"
                id="name"
                label="name"
                helperText="아이디를 입력해주세요"
                required
                variant="standard"
                value={club.name}
                onChange={stateOnChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin="normal"
                id="intro"
                label="intro"
                helperText="ENTER 입력시 클럽 추가"
                variant="standard"
                value={club.intro}
                onChange= {stateOnChange}
              />
            </Grid>
            <Grid item lg={6}></Grid>
          </Grid>
        </form>
      </>
    );
  }
}
export default ClubTextInputView;
