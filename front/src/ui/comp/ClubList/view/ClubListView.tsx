import React from "react";
import autobind from "autobind-decorator";
import { observer } from "mobx-react";
import moment from "moment";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { TravelClub } from "../../../../model";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps{
  //
  clubs: TravelClub[];
}
@autobind
@observer
class ClubListView extends React.Component<Props> {
  //
  
  render() {
    //
    const { clubs } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Intro</TableCell>
            <TableCell align="center">Foundation Time</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {clubs.length ? (
            clubs.map((travelClub: TravelClub, index: number) => (
              <TableRow key={travelClub.id} hover onClick={() => 
              this.props.history.push({pathname : '/membership',state:{clubId : travelClub.id}})}>
                <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{travelClub.name}</TableCell>
                <TableCell align="center">{travelClub.intro}</TableCell>
                <TableCell align="center">
                  {moment(travelClub.foundationTime).format("YYYY-MM-DD")}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default withRouter(ClubListView);
