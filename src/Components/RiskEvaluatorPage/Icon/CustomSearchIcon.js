import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const CustomSearchIcon = ({ onClick }) => {
    return (
        <SearchIcon onClick={onClick} style={{ cursor: 'pointer' }} />
    );
};

export default CustomSearchIcon;