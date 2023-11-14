import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeleteIcon = ({ onClick }) => {
    return (
        <DeleteOutlineIcon onClick={onClick} style={{ cursor: 'pointer' }} />
    );
};

export default DeleteIcon;
