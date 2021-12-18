import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouteMatch } from 'react-router-dom';
import './Resume.css'
import Menu from '../Menu/Menu';

const drawerWidth = 240;

function Resume(props) {
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { lg: 'none' }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"

            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
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
            display: { xs: 'block', sm: 'none' },
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
        <div className='resume-wrapper'>
          <div className="inner-resume-wrapper-fist">
            <h2>Md : Maruf</h2>
            <h4>Jr. Front-End Web Developer</h4>
          </div>
          <div>
            <ul>
              <li> Email : mdmarufmubin@gmail.com</li>
              <li>Address : Mirpur 12, kalsi Dhaka</li>
              <li>Phone : +00801322409861</li>
              <li><a href="">Portfolio ||</a><a href="">Github ||</a><a href="">LinkedIn</a></li>
            </ul>
          </div>
          <div className="">
            <h2>❖ SKILLS :</h2>
            <ul>
              <li> Comfortable : React Js, Javascript, PHP, ES6, HTML, CSS ,
                Bootstrap, Tailwind css, Material UI, Firebase , Sql , No Sql , MongoDB</li>
              <li> Familiar : Node.JS, Express.JS, SASS.</li>
              <li> Tools : GitHub, VS Code, Chrome Dev tool, Postman, Heroku,
                MongoDB, Compass, Netlify and Firebase.</li>

            </ul>
          </div>
          <div>
          <h2>❖ EDUCATION :</h2>
            
            <ul>
              <li>  Ideal Institute of Science and Technology
            Diploma in Computer Engineering -Dhaka, Bangladesh.
            Expected to Graduate in 2023.</li>
              <li> BSS Degree
            Govt. Bongobondhu University-Dhaka, Bangladesh
            Expected to Graduate in 2022.</li>
              
            </ul>
           
            
          </div>
          <div>
          <h2>❖ COURSE :</h2>
           
            <ul>
              <li> Complete Web Development
            Programming Hero, San Jose, CA ( MERN Stack )</li>
              <li>ShikbeShobai , Dhaka Bangladesh ( Full Stack Web Development )
            </li>
              <li>Skills for Employment Investment Program (SEEP) ( Interactive Web design )</li>
            </ul>
            
            <h2>❖ LANGUAGES :</h2>
           
              <ul>
                <li>Bangla , English and Urdu</li>
              </ul>
                <button>Resume Download</button>
          </div>
        
        </div>
      </Box>
    </Box>
  );
}

Resume.propTypes = {

  window: PropTypes.func,
};

export default Resume;
