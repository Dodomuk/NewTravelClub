import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Save, Update, Delete } from '@material-ui/icons';
import { AddButton, TrashButton } from '../../../resource/ButtonColor';
import TravelClub from '../../../../model/club/TravelClub';

interface Props{
    registerClub : () => void
}
@autobind
@observer
class ClubRegisterView extends React.Component<Props> {
    //

    render() {
        const {registerClub} = this.props;

        return (
            <span>
                            <AddButton
                                variant="contained"
                                color="primary"
                                startIcon={<Save />}
                                onClick={registerClub}
                            >
                                Add
                            </AddButton>
                            &nbsp;&nbsp;
                </span>
        );
    }
}
export default ClubRegisterView;
