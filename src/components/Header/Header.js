import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Header({ open, handleDrawerOpen }) {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          CompanyName
        </Typography>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

function ProfileMenu() {
  const [profileMenu, setProfileMenu] = React.useState(null);
  const classes = useStyles();

  return (
    <div>
      <Button
        color="inherit"
        size="small"
        onClick={(e) => setProfileMenu(e.currentTarget)}
        endIcon={<ArrowDropDownIcon/>}
      >
        Josh Son
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={profileMenu}
        keepMounted
        open={Boolean(profileMenu)}
        onClose={() => setProfileMenu(null)}
        className={classes.headerMenu}
        classes={{ paper: classes.profileMenu }}
        disableAutoFocusItem
      >
        <Typography variant="h4" weight="medium" style={{ paddingLeft: 10 }}>
          John Smith
        </Typography>
        <MenuItem onClick={() => setProfileMenu(null)}>Profile</MenuItem>
        <MenuItem onClick={() => setProfileMenu(null)}>My account</MenuItem>
        <Typography
          color="primary"
          variant="h6"
          weight="medium"
          style={{ paddingLeft: 10, cursor: "pointer" }}
          //   onClick={() => signOut(userDispatch, props.history)}
        >
          Sign Out
        </Typography>
      </Menu>
    </div>
  );
}
