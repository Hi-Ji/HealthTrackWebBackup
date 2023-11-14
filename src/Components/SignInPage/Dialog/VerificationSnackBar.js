import Button from "@mui/material/Button";
import {Stack} from "@mui/system";
import {Snackbar} from "@mui/base";
import {Alert, Grow} from "@mui/material";
import React from "react";
import Slide from '@mui/material/Slide';

const VerificationSnackBar = ({setOpen, isRight, open}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar TransitionComponent={Grow} open={open} autoHideDuration={6000} onClose={handleClose}>
            {isRight ?
                (
                    <Alert onClose={handleClose} severity="info" sx={{ width: '90%'}}>
                        Account Creation Success
                    </Alert>) : (
                    <Alert onClose={handleClose} severity="error" sx={{ width: '90%' }}>
                        Incorrect Verification Code
                    </Alert>
                )}
        </Snackbar>
    );
}

export default VerificationSnackBar