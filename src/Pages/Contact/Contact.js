import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Alert from '@mui/material/Alert';
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';

const drawerWidth = 240;

function Contact(props) {
    
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

    const [state, handleSubmit] = useForm("mknynlpb");
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
                <form className='main-form' onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: "left", color: "#fff", fontSize: "42px", fontWeight: "400" }}>Contact Me</h2>

                    <p style={{ textAlign: "left", fontSize: "22px", color: "#fff", marginBottom: "10px" }}>Enter Your Email</p>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className='form-control ok'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <p style={{ textAlign: "left", fontSize: "22px", color: "#fff", marginBottom: "10px" }}>Enter Your Opinion</p>
                    <textarea
                        id="message"
                        name="message"
                        className='form-control'
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div style={{ textAlign: "left" }}>
                        <button className='form-btn' type="submit" disabled={state.submitting}>Submit</button>
                    </div>

                    {
                       state.succeeded && <Alert severity="success" style={{marginTop:"40px", width: "50%"}}>Success Full Send Your Mail </Alert>
                       
                    }

                </form>
            </Box>
        </Box>
    );
}

Contact.propTypes = {

    window: PropTypes.func,
};

export default Contact;
