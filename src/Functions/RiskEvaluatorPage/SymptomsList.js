import React, {Fragment, useState, useEffect, useRef, useContext} from 'react';
import {Menu} from '@mui/base/Menu';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import Button, { buttonClasses } from '@mui/material/Button';
import { Popper } from '@mui/base';
import { styled } from '@mui/system';
import { ListActionTypes } from '@mui/base/useList';
import List from '../../Components/RiskEvaluatorPage/Img/List.svg'
import RedCross from '../../Components/RiskEvaluatorPage/Img/RedCross.svg'
import Add from '../../Components/RiskEvaluatorPage/Img/Add.svg'
import Delete from '../../Components/RiskEvaluatorPage/Img/Delete.svg'
import {AuthContext} from "../../AuthContext";
import {SymptomFinderRequest} from "../../Http/SymptomFinderRequest";
import {useNavigate} from "react-router-dom";


export default function SymptomsList({User_Symptoms_List, setUser_Symptoms_List}) {

  const { auth, setAuth, isSymptomsSubmitted, setIsSymptomsSubmitted, token, setToken, setDiseaseData } = useContext(AuthContext);

  const [buttonElement, setButtonElement] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const menuActions = React.useRef(null);
  const preventReopen = React.useRef(false);

  const [temp_User_Symptoms_List, setTemp_User_Symptoms_List] = useState([]);

  const [inputItem, setinputItem] = useState([]);
  const navigate = useNavigate();

  const updateAnchor = React.useCallback((node) => {
    setButtonElement(node);
  }, []);

  const handleButtonClick = (event) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    setOpen((open) => !open);
  };

  const submit = () => {
    SymptomFinderRequest({ userSymptomsList: User_Symptoms_List, token }).then(response => {
      if(response.status === 403) {
        setAuth(false);
        setToken('');
      }
      if (response && response.data && !response.data.flag) {
        setAuth(false);
        setToken('');
      } else if (response && response.data) {
        setDiseaseData(response.data.data)
        setIsSymptomsSubmitted(true);
        setToken(response.data.token)
        navigate("/symptomresult");
      }
    }).catch(error => {
      if(error.response && error.response.status === 403){
        setAuth(false);
        console.log(auth)
        setToken('');
      }
    });

  }

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      setOpen(false);
      buttonElement?.focus();
    };
  };

  const userAdd = (detailItem) => {
    if (User_Symptoms_List.includes(detailItem)==false) {
      setUser_Symptoms_List([...User_Symptoms_List,detailItem])
    }
  };

  const userDelete = (detailItem) => {
    if (User_Symptoms_List.includes(detailItem)) {
      setUser_Symptoms_List(User_Symptoms_List.filter(item => item !== detailItem))
    }
  };

  // const symptoms_list_search=(search)=>{
  //   if(search==''){
  //     setUser_Symptoms_List([...temp_User_Symptoms_List])
  //   }
  //   else{
  //     setUser_Symptoms_List([...temp_User_Symptoms_List])
  //     const List = User_Symptoms_List.filter(
  //       (item) =>
  //       item.includes(search)
  //     );
  //     console.log(List)
  //     setUser_Symptoms_List([...List])
  //   }
  // }

  const symptoms_list_search=(search)=>{
    if(search==''){
      setTemp_User_Symptoms_List([...User_Symptoms_List])
    }
    else{
      setTemp_User_Symptoms_List([...User_Symptoms_List])
      const List = User_Symptoms_List.filter(
        (item) =>
        item.includes(search)
      );
      console.log(List)
      setTemp_User_Symptoms_List([...List])
    }
  }

  useEffect(() => {
    setTemp_User_Symptoms_List([...User_Symptoms_List])
    symptoms_list_search(inputItem)
    console.log(inputItem)
  }, [inputItem,User_Symptoms_List]);




  return (
    <div>
      <TriggerButton
        type="button"
        onClick={handleButtonClick}
        // onKeyDown={handleButtonKeyDown}
        // onMouseDown={handleButtonMouseDown}
        ref={updateAnchor}
        aria-controls={isOpen ? 'simple-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
      >
        <img src={List} alt="List" />
      </TriggerButton>

      <Menu
        // actions={menuActions}
        open={isOpen}
        onOpenChange={(open) => {
          setOpen(open);
        }}
        anchorEl={buttonElement}
        slots={{ root: StyledPopper, listbox: StyledListbox }}
        slotProps={{ listbox: { id: 'simple-menu' } }}
      >
        <div className='symptoms_list_title'>SYMPTOMS LIST</div>
        <img src={RedCross} alt="RedCross" onClick={createHandleMenuClick()} className='symptoms_list_cross' />
        <div className='symptoms_list_line' style={{ background: 'linear-gradient(90deg, #EF815F 100%, #B33D18 100%)' }}></div>
        <div className='symptoms_list_search'>
          <input type="text" onChange={(e)=>setinputItem(e.target.value.toUpperCase())}  />
        </div>
        {
          temp_User_Symptoms_List.map((item)=>(
            <div className='symptoms_list_item_totol'>
              <div className='symptoms_list_item'>{item}</div>
              <div className='symptoms_list_item_Add'>
                {User_Symptoms_List.includes(item)?<img src={Delete} alt="Delete" onClick={()=>{userDelete(item)}} />:<img src={Add} alt="Add" onClick={()=>{userAdd(item)}} />}
                    </div>
            </div>
          ))
        }
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
              variant="contained"
              color="primary"
              onClick={submit}
              size="small"
              sx={{
                fontSize: '0.75rem',
                backgroundColor: '#4DB294',
                '&:hover': {
                  backgroundColor: '#3da683' // Adjust for hover state as needed
                },
              }}
              disabled={User_Symptoms_List.length === 0}
          >
            Submit
          </Button>
        </div>

        {/* <div>SYMPTOMS LIST</div> */}
      </Menu>
    </div>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};


//List box
const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  // box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  width: 250px;
  height: 300px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  position: relative;
  left: -10px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

//List box item
const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  // border: 1px solid red;
  width: fit-content;
  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  `,
);

//List Button
const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  padding-top: 13px;
  background: none;
  border: none;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: #4DB193;
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${buttonClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;
