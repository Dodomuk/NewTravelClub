import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Save, Update, Delete } from '@material-ui/icons';
import { AddButton, TrashButton } from '../../../resource/ButtonColor';
import TravelClub from '../../../../model/club/TravelClub';

interface Props{
    updateClub : () => void
}
@autobind
@observer
class ClubUpdateView extends React.Component<Props> {
    //

    render() {
        const {updateClub} = this.props;

        return (
            <span>
                            <TrashButton
                                variant="contained"
                                color="default"
                                startIcon={<Update />}
                                onClick={updateClub}
                            >
                                Update
                            </TrashButton>
                            &nbsp;&nbsp;
            </span>
        );
    }
}
export default ClubUpdateView;
