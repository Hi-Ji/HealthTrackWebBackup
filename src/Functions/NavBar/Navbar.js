import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../../Components/Navbar/Logo.svg'
import HeadPortrait from '../../Components/Navbar/HeadPortrait.png'
import { useNavigate } from "react-router-dom";

const pages = ['SERVICE', 'OUR AIM', 'HOW IT WORKS', 'HEALTH ASSESSMENT'];

function ResponsiveAppBar({scrollDownToSer,scrollDownToAim,scrollDownToTut}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const navigate_home_page = () => {
    navigate('/home');
  }

  const navigate_signin_page = () => {
    navigate('/signin');
  }


  const windowHeight = window.innerHeight;
  const middlePosition = (windowHeight-20) / 0.7;

  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const bottomPosition = middlePosition*2;

  return (
    <AppBar position="static" className='navbar'>
      <Container>
        <Toolbar disableGutters>
          <img src={Logo} alt="SVG Logo" className='logoBiger' />
          <Typography
            noWrap
            component="a"
            href="/intro"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontSize: '14px',
              fontFamily: 'Alef',
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            HOMEPAGE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                
                onClick={()=>{handleCloseNavMenu();navigate_home_page();setTimeout(()=>{if (page === 'SERVICE') {
                  scrollDownToSer();
                  window.scroll({
                    top: 0,
                    behavior: 'smooth'
                  });
                  
                } else if (page === 'OUR AIM') {
                  scrollDownToAim();window.scroll({
                    top: middlePosition,
                    behavior: 'smooth'
                  });
                } else if (page === 'HOW IT WORKS') {
                  scrollDownToTut();window.scroll({
                    top: bottomPosition,
                    behavior: 'smooth'
                  });
                }}, 50);}
                }>
                  <Typography textAlign="center" fontFamily="Alef" fontSize="11px">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={Logo} alt="SVG Logo" className='logoSmaller' />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Alef',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            HOMEPAGE
          </Typography>

          {/* navbar navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <Button
              key={page}
              onClick={() => {
                handleCloseNavMenu();navigate_home_page();setTimeout(()=>{if (page === 'SERVICE') {
                  scrollDownToSer();
                } else if (page === 'OUR AIM') {
                  scrollDownToAim();
                } else if (page === 'HOW IT WORKS') {
                  scrollDownToTut();
                }},50);
              }}
              sx={{ my: 2, display: 'block' }}
              className={`${page === 'HEALTH ASSESSMENT' ? 'navbarNavigationAssessment' : 'navbarNavigation'}`}
            >
              {page}
            </Button>
            
            ))}
          </Box>
          
          {/* HeadPortrait */}
          <Box sx={{ flexGrow: 0 }} onClick={navigate_signin_page}>
            <Tooltip title="Sign in">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <img src={HeadPortrait}/>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
