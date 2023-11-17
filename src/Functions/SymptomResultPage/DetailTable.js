
import React, {useContext} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AuthContext} from "../../AuthContext";

const DetailTable = () => {

    const { diseaseData } = useContext(AuthContext);

    // Convert diseaseData object to an array of row objects
    const rows = Object.entries(diseaseData).map(([disease, percentage], index) => ({
        id: index + 1,
        disease: disease,
        percentage: `${(percentage * 100).toFixed(2)}%` // Assuming the probability is a decimal
    }));

    const theme = createTheme({
        typography: {
            fontFamily: 'Lexend, sans-serif',
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} sx={{ marginTop: '2rem', backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: '0' }}>
                <Table sx={{
                    marginTop: '2rem',
                    backgroundColor: 'transparent',
                    width: '73%',
                    margin: 'auto',
                    fontFamily: 'Lexend, sans-serif',
                }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{fontFamily: 'Lexend, sans-serif'}}>
                            <TableCell>Index</TableCell>
                            <TableCell>Name of Disease</TableCell>
                            <TableCell align="right">Percentage Chance</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.disease}</TableCell>
                                <TableCell align="right">{row.percentage}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="primary" size={"small"} sx={{
                                        backgroundColor: 'rgba(77, 177, 147, 0.45)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(77, 177, 147, 0.65)', // Optional: Slightly darker on hover
                                        },
                                    }}>
                                        Read More
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

export default DetailTable