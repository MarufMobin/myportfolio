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
            Maruf's Portfolio
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
            <span><strong>Jr. Front-End Web Developer</strong></span>
          </div>
          <div>
            <ul>
              <li> <strong> Email </strong>: mobinh264@gmail.com</li>   
              <li> <strong>Phone </strong>: +00801322409861</li>
              
              {/* all links are here */}
              <li>
                <a className="link-style" href="https://marufmobin.netlify.app/" target='_blank'>Portfolio ||</a><a className="link-style" href="https://github.com/MarufMobin" target='_blank'>Github ||</a>
              <a className="link-style" href="https://www.google.com/search?q=maruf+mobin" target='_blank'>Google ||</a>
              <a className="link-style" href="https://www.linkedin.com/in/marufmobin/" target='_blank'>LinkedIn</a></li>
              <li>
                <a href="https://github.com/MarufMobin/MyAllRepo/blob/master/allproject.txt" className='text-edit'target="_blank"><strong>My all project link</strong> <span className='link-style'>here  </span></a> 
                <a href="https://drive.google.com/drive/folders/17Mydo0wjgZmxxvIXhvO9nKfbaGLNMOVM" className='text-edit ms-2'target="_blank"><strong>   &nbsp; &nbsp; &nbsp; My all project image showcase </strong><span className='link-style'>here</span></a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2>❖ SKILLS :</h2>
            <ul>
              <li className='text-deco'><span className='inner-text-deco'> Comfortable </span>: React Js, Javascript, PHP, ES6, HTML, CSS ,
                Bootstrap, Tailwind css, Material UI, Firebase , Sql , No Sql , MongoDB</li>
              <li> <span className='inner-text-deco'>Familiar </span>: Node.JS, Express.JS, SASS.</li>
              <li className='text-deco'> <span className='inner-text-deco'>Tools </span>: GitHub, VS Code, Chrome Dev tool, Postman, Heroku,
                MongoDB, Compass, Netlify and Firebase.</li>

            </ul>
          </div>
          <div>
            <h2>❖ EDUCATION :</h2>

            <ul>
              <li className='text-deco'>  Ideal Institute of Science and Technology
                Diploma in Computer Engineering -Dhaka, Bangladesh.
                Expected to Graduate in 2023.</li>
              <li className='text-deco'> BSS Degree
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
            <a href='https://drive.google.com/uc?export=download&id=1vW5gj8rFfD2Pc435kD52KZfg7Hp1P2Ch' download='https://drive.google.com/file/d/1vW5gj8rFfD2Pc435kD52KZfg7Hp1P2Ch/view?usp=sharing' className='resume-btn'> Download Resume</a>
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
