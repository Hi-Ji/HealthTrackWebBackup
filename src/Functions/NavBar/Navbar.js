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

const pages = ['SERVICE', 'OUR AIM', 'HOW IT WORKS', 'HEALTH ASSESSMENT'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

  const test = (page) => {
    console.log(page);
  }

  const windowHeight = window.innerHeight;
  const middlePosition = windowHeight / 0.7;

  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const bottomPosition = documentHeight - windowHeight;

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
                
                onClick={()=>{handleCloseNavMenu();if (page === 'SERVICE') {
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
                    top: bottomPosition-250,
                    behavior: 'smooth'
                  });
                }}
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
                handleCloseNavMenu();
                if (page === 'SERVICE') {
                  scrollDownToSer();
                } else if (page === 'OUR AIM') {
                  scrollDownToAim();
                } else if (page === 'HOW IT WORKS') {
                  scrollDownToTut();
                }
              }}
              sx={{ my: 2, display: 'block' }}
              className={`${page === 'HEALTH ASSESSMENT' ? 'navbarNavigationAssessment' : 'navbarNavigation'}`}
            >
              {page}
            </Button>
            
            ))}
          </Box>
          
          {/* HeadPortrait */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <img src={HeadPortrait}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
