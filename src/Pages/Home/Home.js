import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Home.css'
import { Link, useRouteMatch } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { Typewriter } from 'typewriting-react';

const drawerWidth = 240;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let match = useRouteMatch();


  const drawer = (
    <div>
      <Toolbar />

      <Menu></Menu>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { lg: 'none' }
        }}
      >
        <Toolbar className='cust-bg-color'>
          <IconButton
            color="inherit"
            aria-label="open drawer"

            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: { sm: 'none' }}} >
            Maruf's PortFolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"

      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <p style={{ fontSize: "85px",paddingTop:"100px", fontWeight: "600", fontFamilly: "monospace", color: "#fff", marginBottom: "0px" , width: "75%"}}>
          Hi , My Name Maruf
        </p>
        <Typography style={{  width: "75%"}}>
          <span className='stay-text' > I am</span>
          <Typewriter className='custom-text' words={['Web App Developer', 'Js Developer', 'React Developer', 'Web Developer','Ui Desinger']} />
        </Typography>
        <p className='custom-text-decoration'>
          Hi Everyone, I am a MERN Stack Developer and Front-End Developer also Knowing Full Stack Technology. I have also knowledge about Elementor And WordPress tech
        </p>
      </Box>
    </Box>
  );
}

Home.propTypes = {

  window: PropTypes.func,
};

export default Home;