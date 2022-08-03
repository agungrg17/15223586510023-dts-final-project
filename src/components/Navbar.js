import { 
  MicrowaveOutlined, 
  Login, 
} from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import { 
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Tooltip
 } from '@mui/material';
 import React from 'react';
 import { useNavigate } from 'react-router-dom';
 import { useState } from 'react';
 import { useAuthState } from 'react-firebase-hooks/auth';
 import { logOut, auth } from "../config/firebase.js";


 const NavbarMenu = [
  {
    menu: "Beranda",
    page: "/",
  },
  {
    menu: "Kategori",
    page: "/category",
  },
  {
    menu: "Artikel",
    page: "/article",
  },
  {
    menu: "Tentang Kami",
    page: "/about",
  },
];
const settings = [
  { menu: "Account" },
  { menu: "Dashboard" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user] = useAuthState(auth);

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

return (
  <AppBar
    // color="transparent"
    position="fixed"
    >
    <Box
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
  >
    <Container>
      <Toolbar disableGutters>
        <MicrowaveOutlined
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
        <Typography
          variant="h6"
          noWrap
          component={Button}
          onClick={() => {
            navigate("/");
          }}
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 600,
            color: "inherit",
            textTransform: "none",
          }}
        >
          ResepMasak
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {NavbarMenu.map((item) => (
              <MenuItem
                key={item.menu}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(item.page);
                }}
                color="inherit" 
              >
                <Typography textAlign="center">{item.menu}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <MicrowaveOutlined
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          onClick={() => {
            navigate("/");
          }}
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 600,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ResepMasak
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            gap: 2,
            marginLeft: 8,
          }}
        >
          {NavbarMenu.map((item) => (
            <Button
              key={item.menu}
              onClick={() => {
                handleCloseNavMenu();
                navigate(item.page);
              }}
              color="inherit" 
              sx={{
                my: 3,
                display: "block",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px"
              }}
            >
              {item.menu}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          {!user ? (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              color="inherit" 
              sx={{
                textTransform: "none",
                fontWeight: "500",
              }}
              endIcon={<Login />}
            >
              Login
            </Button>
          ) : (
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Profile "
                  src="https://i.pravatar.cc/150?img=68"
                />
              </IconButton>
            </Tooltip>
          )}

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {user && (
              <MenuItem>
                <Typography> {user.email.split("@")[0]}</Typography>
                {/* <Typography> {user.email}</Typography> */}
              </MenuItem>
            )}

            {settings.map((setting) => (
              <MenuItem
                key={setting.menu}
                onClick={() => {
                  handleCloseUserMenu();
                  navigate(setting.page);
                }}
              >
                <Typography textAlign="center">{setting.menu}</Typography>
              </MenuItem>
            ))}

            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                logOut();
              }}
            >
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </Box>
</AppBar>
  )
};

export default Navbar;