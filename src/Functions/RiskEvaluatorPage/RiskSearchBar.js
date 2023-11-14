import React, {useRef, useState} from 'react'
import SearchButton from '../../Components/RiskEvaluatorPage/Img/SearchButton.svg'
import RiskEvaluData from '../../data/RiskEvalu.json'
import {Dialog, DialogContent, DialogTitle, InputAdornment, Popper, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "../../Components/RiskEvaluatorPage/Icon/DeleteIcon";
import AddIcon from "../../Components/RiskEvaluatorPage/Icon/AddIcon";
import SearchIcon from "@mui/icons-material/Search";

const RiskSearchBar = ({  userSymptomsList, setUserSymptomsList  }) => {
    const [searchValue, setSearchValue] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const searchBarRef = useRef(null);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const triggerSearch = () => {
        if (searchValue.length > 0) {
            search(searchValue);
            setOpenDialog(true);
        }
    };

    const search = (query) => {
        const results = [];
        Object.values(RiskEvaluData).forEach(item => {
            item.detail.forEach(detail => {
                if (detail.toLowerCase().includes(query.toLowerCase())) {
                    results.push(detail);
                }
            });
        });
        setSearchResults(results);
    };

    const addToUserSymptomsList = (symptom) => {
        if (!userSymptomsList.includes(symptom)) {
            setUserSymptomsList([...userSymptomsList, symptom]);
        }
    };

    const removeFromUserSymptomsList = (symptom) => {
        setUserSymptomsList(userSymptomsList.filter(item => item !== symptom));
    };

    return (
        <div ref={searchBarRef}>
            <TextField
                className='riskSearchInput'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => triggerSearch()}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& label.Mui-focused': {
                        color: '#4DB294',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#4DB294',
                        },
                    },
                }}
            />
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: '50vh' } }}>
                <DialogTitle>Search Results</DialogTitle>
                <DialogContent>
                    {searchResults.map((result, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <span>{result}</span>
                            <IconButton onClick={() => userSymptomsList.includes(result) ?
                                removeFromUserSymptomsList(result) : addToUserSymptomsList(result)}>
                                {userSymptomsList.includes(result) ? <DeleteIcon /> : <AddIcon />}
                            </IconButton>
                        </div>
                    ))}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RiskSearchBar;
