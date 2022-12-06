import {React, useState} from "react";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const DrawerFooter = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    padding: theme.spacing(0, 0.5),
    margin: theme.spacing(10, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function AppDrawer(){

    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const handleDrawer = () => {
        setOpen((prev) => (prev === true ? false : true));
      };
     
    return <div>
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          {[
            "Home",
            "Projects",
            "Dashboard",
            "Messages",
            "Documents",
            "Organizations",
            "Settings"
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <DrawerFooter>
        <List>
          <ListItem disablePadding>
          <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? "initial" : "center",
                  px: 2
                }}
              >
                 <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          </List>
        </DrawerFooter>
      </Drawer>
    </div>
}

