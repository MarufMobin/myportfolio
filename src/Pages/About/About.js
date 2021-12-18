import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import './About.css'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch } from 'react-router-dom';
import Menu from '../Menu/Menu';
const drawerWidth = 240;

function About(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let match = useRouteMatch();


    const drawer = (
        <div>
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
                <div className='custom-about'>
                    <div className='inner-about-fist'>
                        <div className='malti-about-inner'>
                            <h2>Web Developer & Designer</h2>
                            <span> My name is Maruf . Hi Everyone, I am a MERN Stack Developer and Front-End Developer also Knowing Full Stack Technology. I have also knowledge about Elementor And WordPress techonology. This is my Key Frame MERN Stack Developer | Front-End Developer | Full Stack Developer | Elementor And WordPress | JavaScript Developer</span>
                        </div>
                        <div className='satisfy-clients'>
                            <div className='inner-satisfy-clints'>
                                <h6>icon</h6>
                                <h1>8+</h1>
                                <h5>Happy Clients</h5>
                            </div>
                            
                            <div className='inner-satisfy-clints'>
                                <h6>icon</h6>
                                <h1>8+</h1>
                                <h5>Happy Clients</h5>
                            </div>
                            
                            <div className='inner-satisfy-clints'>
                                <h6>icon</h6>
                                <h1>8+</h1>
                                <h5>Happy Clients</h5>
                            </div>
                            
                            <div className='inner-satisfy-clints'>
                                <h6>icon</h6>
                                <h1>8+</h1>
                                <h5>Happy Clients</h5>
                            </div>
                            
                        </div>
                    </div>
                    <div className='inner-about-second'>
                        jskdfjaklsdfj
                    </div>
                </div>
            </Box>
        </Box>
    );
}

About.propTypes = {

    window: PropTypes.func,
};

export default About;
