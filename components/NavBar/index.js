import React from 'react'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton, makeStyles,
    MenuItem,
    Menu,
    Toolbar,
    Tooltip,
    Typography, createStyles
} from "@material-ui/core";

import {PhotoLibraryOutlined, Receipt, StorefrontOutlined, Adb} from "@material-ui/icons";
import {LightedButton} from "../LightedButton";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) =>
    createStyles({
        chevron: {
            marginLeft: 'auto',
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        icon: {
            minWidth: 'auto',
            paddingRight: theme.spacing(1),
        },
        logo: {
            width: '48px',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        nested: {
            paddingLeft: theme.spacing(5),
        },
        container: {
            backgroundColor: theme.palette.background.dark
        },
        button: {
            marginRight: '50px', fontFamily: 'Silkscreen', color: 'white'
        }
    }))

export const menuBar = (iconSize = 20) => ({
    home: {
        label: 'Home',
        icon: <StorefrontOutlined style={{fontSize: iconSize}}/>,
        route: '/',
    },
    main: [
        {
            label: 'About',
            icon: <PhotoLibraryOutlined style={{fontSize: iconSize}}/>,
            route: '/about',
        },
        {
            label: 'Works',
            icon: <Receipt style={{fontSize: iconSize}}/>,
            route: '/works',
        },
        {
            label: 'Experience',
            icon: <PhotoLibraryOutlined style={{fontSize: iconSize}}/>,
            route: '/experience',
        },
        {
            label: 'Contact',
            icon: <Receipt style={{fontSize: iconSize}}/>,
            route: '/contact',
        },
    ],
})

function Component(props) {
    const classes = useStyles()
    const router = useRouter()
    const {home, main} = menuBar()
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" className={classes.container}>
            <Container maxWidth="xl"
                       className={classes.container}
            >
                <Toolbar disableGutters style={{flex: 1, justifyContent: 'space-between'}}>
                    <Box onClick={() => router.push(home.route)}>
                        <Adb sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    </Box>
                    <Box>
                        {main.map((page) => (
                            <Button
                                key={page.label + page.index}
                                onClick={() => router.push(page.route)}
                                className={classes.button}
                            >
                                {page.label}
                            </Button>
                        ))}

                        <LightedButton {...props} title="Resume"/>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Asep Agus Heri Hermawan" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
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
                            {main.map((setting) => (
                                <MenuItem key={setting.index + setting.label} onClick={handleCloseUserMenu}>
                                    <Typography>{setting.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export const NavBar = Component

export default Component
