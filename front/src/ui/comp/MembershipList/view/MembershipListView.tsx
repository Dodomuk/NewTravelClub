import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@material-ui/core';

import { Membership } from '../../../../model';
import { RouteComponentProps , withRouter ,BrowserRouter as Router,  Link} from 'react-router-dom';

interface Props extends RouteComponentProps{
  //
  members: Membership[];
}


@autobind
@observer
class MembershipListView extends React.Component<Props> {
  //
  render() {
    //
    const { members } = this.props;

    return (
     <>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">MemberId</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">JoinDate</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { members.length ? members.map((membership: Membership) => (
            <TableRow
              key={membership.id}
              hover
            >
              <TableCell align="center">{membership.memberId}</TableCell>
              <TableCell align="center">{membership.role}</TableCell>
              <TableCell align="center">{membership.joinDate}</TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={3} align="center">데이터가 없습니다.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      </>
    );
  }
}

export default withRouter(MembershipListView);
