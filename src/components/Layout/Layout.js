import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./styles";
import { useStore } from "../../stores";
import { observer } from "mobx-react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default observer(({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { globalStore } = useStore();
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  useEffect(() => {
    if (matches) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  }, [matches]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Sidebar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
});
