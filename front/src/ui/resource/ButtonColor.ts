import { Button, withStyles } from "@material-ui/core";
import { blueGrey, grey, lightGreen } from "@material-ui/core/colors";
 
export let AddButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[500],
        '&:hover': {
            backgroundColor: grey[700],
        },
    },
}))(Button);

export let TrashButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(lightGreen[500]),
        backgroundColor: lightGreen[500],
        '&:hover': {
            backgroundColor: lightGreen[700],
        },
    },
}))(Button);

export let MembershipRegisterButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(blueGrey[500]),
        backgroundColor: blueGrey[500],
        '&:hover': {
            backgroundColor: blueGrey[700],
        },
    },
}))(Button);
