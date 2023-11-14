import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";
import React from "react";


const SignUpDialog = ({title, content, buttonText, dialogOpen, setDialogOpen, isLoading}) => {

    return (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} sx={{
            '& .MuiDialog-paper': {
                borderRadius: '16px', // Adjust the value for desired roundness
                fontFamily: "'Lexend, sans-serif'" // Make sure the Lexend font is loaded in your project
            }
        }}>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ErrorOutlineIcon color="warning" sx={{ fontSize: '30px' }} />
                {isLoading ? (
                    <div className="wrapper">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                    </div>
                ) : (
                    <div>
                        {title}
                    </div>
                )}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={() => setDialogOpen(false)}>{buttonText}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default SignUpDialog