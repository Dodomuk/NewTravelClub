import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Save, Update, Delete } from '@material-ui/icons';
import { AddButton, TrashButton } from '../../../resource/ButtonColor';

interface Props{
  setClub : Function
}
interface State{
  name : string,
  intro : string
}
@autobind
@observer
class ClubCrudView extends React.Component<Props,State> {
  //
  state : State ={
    name : '',
    intro : ''
  }

  render() {
    const {setClub} = this.props;
    const {name,intro} = this.state;
    

    return (
      <>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="name"
                helperText="아이디를 입력해주세요"
                required
                variant="standard"
                value={name}
                onChange={(event) => this.setState({name : event.target.value})}
                onKeyPress={e => {if(e.charCode === 13){setClub(name,intro)}}}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin="normal"
                id="outlined-basic"
                label="intro"
                helperText="ENTER 입력시 클럽 추가"
                variant="standard"
                value={intro}
                onChange={(event) => this.setState({intro : event.target.value})}
                onKeyPress={e => {if(e.charCode === 13){setClub(name,intro)}}}
              />
            </Grid>
            <Grid item lg={6}></Grid>
            <Grid item xs={4}>
              <AddButton
                variant="contained"
                color="primary"
                startIcon={<Save />}
                onClick={() => {setClub(name,intro)}}
              >
                Add
              </AddButton>
              &nbsp;&nbsp;
              <TrashButton
                variant="contained"
                color="default"
                startIcon={<Update />}
              >
                Update
              </TrashButton>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                color="default"
                startIcon={<Delete />}
              >
                Delete
              </Button>
              &nbsp;&nbsp;
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}
export default ClubCrudView;
