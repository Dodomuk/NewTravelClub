import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@material-ui/core';

import { CommunityMember } from '../../../../model';
import { RouteComponentProps , withRouter ,BrowserRouter as Router,  Link} from 'react-router-dom';
import { AddButton } from '../../../resource/ButtonColor';
import { Save } from '@material-ui/icons';

interface Props extends RouteComponentProps{
  //
  members: CommunityMember[];
}


@autobind
@observer
class MemberListView extends React.Component<Props> {
  //
  render() {
    //
    const { members } = this.props;

    return (
     <>
      {/* <Router>
      <Grid item xs={4}>
        <AddButton variant="contained" color="primary" startIcon={<Save />}>
          <Link to="/memberJoin">JOIN</Link>
        </AddButton>
      </Grid>
    </Router> */}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Name / NickName</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">PhoneNumber</TableCell>
            <TableCell align="center">BirtyDay</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { members.length ? members.map((communityMember: CommunityMember, index: number) => (
            <TableRow
              key={communityMember.id}
              hover
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{communityMember.name}</TableCell>
              <TableCell align="center">{communityMember.email}</TableCell>
              <TableCell align="center">{communityMember.phoneNumber}</TableCell>
              <TableCell align="center">{communityMember.birthDay}</TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} align="center">데이터가 없습니다.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      </>
    );
  }
}

export default withRouter(MemberListView);
