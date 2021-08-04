import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Save, Update, Delete } from '@material-ui/icons';
import { AddButton, TrashButton } from '../../../resource/ButtonColor';
import TravelClub from '../../../../model/club/TravelClub';

interface Props{
    deleteClub: () => void;
}
@autobind
@observer
class ClubDeleteView extends React.Component<Props> {
    //

    render() {
        const {deleteClub} = this.props;

        return (
            <span>
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<Delete />}
                                onClick={deleteClub}
                            >
                                Delete
                            </Button>
                            &nbsp;&nbsp;
            </span>
        );
    }
}
export default ClubDeleteView;
