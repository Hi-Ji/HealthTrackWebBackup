import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddIcon = ({ onClick }) => {
    return (
        <AddCircleOutlineIcon onClick={onClick} style={{ cursor: 'pointer' }} />
    );
};

export default AddIcon;