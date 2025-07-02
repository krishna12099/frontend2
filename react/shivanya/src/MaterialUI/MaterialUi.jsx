import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
// import People from '@mui/icons-material/People';
// import PermMedia from '@mui/icons-material/PermMedia';
// import Dns from '@mui/icons-material/Dns';
// import Public from '@mui/icons-material/Public';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';


function MaterialUI() {

 const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
// const data = [
  // { icon: <People />, label: 'Authentication' },
  // { icon: <Dns />, label: 'Database' },
  // { icon: <PermMedia />, label: 'Storage' },
  // { icon: <Public />, label: 'Hosting' },
// ];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});



  return (
    <>
    
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  
  <br/><hr/><br/>
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>

    <hr/><br/>

     <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>


    <hr/><br/><br/>
      

        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>Settings</ListSubheader>}
    >
      <ListItem>
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
        <Switch
          edge="end"
          onChange={handleToggle('wifi')}
          checked={checked.includes('wifi')}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
        <Switch
          edge="end"
          onChange={handleToggle('bluetooth')}
          checked={checked.includes('bluetooth')}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
        />
      </ListItem>
    </List>

<br/><hr/> <hr/>
<Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Firebash"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Project Overview"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'rgba(255,255,255,0.8)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-4px) rotate(-20deg)',
                      },
                      '& svg:last-of-type': {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      height: '80%',
                      display: 'block',
                      left: 0,
                      width: '1px',
                      bgcolor: 'divider',
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={[
                // open
                //   ? {
                //       bgcolor: 'rgba(71, 98, 130, 0.2)',
                //     }
                //   : {
                //       bgcolor: null,
                //     },
                // open
                //   ? {
                //       pb: 2,
                //     }
                //   : {
                //       pb: 0,
                //     },
              ]}
            >
              <ListItemButton
                alignItems="flex-start"
                // onClick={() => setOpen(!open)}
                sx={[
                  {
                    px: 3,
                    pt: 2.5,
                  },
                
                   {
                        pb: 0,
                      }
                  //  {
                  //       pb: 2.5,
                  //     },
                  
                    //  {
                    //     '&:hover, &:focus': {
                    //       '& svg': {
                    //         opacity: 1,
                    //       },
                    //     },
                    //   }
                    //  {
                    //     '&:hover, &:focus': {
                    //       '& svg': {
                    //         opacity: 0,
                    //       },
                    //     },
                    //   },
                ]}
              >
                <ListItemText
                  primary="Build"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    // color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={[
                    {
                      mr: -1,
                      opacity: 0,
                      transition: '0.2s',
                    },
                    
                       {
                          transform: 'rotate(-180deg)',
                        }
                     
                  ]}
                />
              </ListItemButton>
              
        
                  <ListItemButton
                    // key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {/* {item.icon} */}
                    </ListItemIcon>
                    <ListItemText
                      // primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
              
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>

<hr/><br/><br/><br/>


    </>
  )
}


export default MaterialUI
