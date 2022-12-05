import {React, useEffect, useState} from "react";
import ProfileBadge from './ProfileBadge'
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SvgIcon from "@mui/material/SvgIcon";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import PortraitIcon from '@mui/icons-material/Portrait';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import moment from "moment/moment";



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

const IconTextField = ({icon, ...props}) => {
    return <TextField 
            {...props}
            InputProps={{
                startAdornment: icon ? (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  ) : null
            }}
            />
}


export default function Profile() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(null)
    const [day, setDay] = useState(true)

  const handleDrawerClose = () => {
    setOpen((prev) => (prev === true ? false : true));
  };

  useEffect(() => {
    let time1 = moment().format('MMMM Do YYYY, h:mm:ss a')
    setDay(time1.split(',')[1].includes('am'))
    setTime(moment().format("MMM Do YYYY"))
  }, [])

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
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
      </Drawer>
      <Box
        sx={{
          "& > :not(style)": {
            m: 2
          },
          width: 600
        }}
      >
        <Typography variant="h6">Good {day ? 'Morning' : 'Evening'}, Poornima</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">{time}</Typography>
        <Typography variant="h6">My Profile</Typography>

        <Card sx={{ padding: "50px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
                <IconTextField id="outlined-basic" label="First Name" icon={<PersonIcon />} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="outlined-basic" label="First Name" icon={<PersonIcon />} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="outlined-basic" label="First Name" icon={<PortraitIcon />} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="outlined-basic" label="First Name" icon={<MailOutlineIcon />} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="outlined-basic" label="First Name" icon={<LocalPhoneIcon />} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="outlined-basic" label="First Name" icon={<LocationOnIcon />} />
            </Grid>
            <Grid item xs={5}>
              <Button variant="contained" color="error" sx={{ justifyContent: 'center' }}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>

      <p></p>

      {/* </Box> */}
      {/* <Box  sx={{ flexGrow: 1, p: 2 }}> */}
      <Box
        sx={{
          "& > :not(style)": {
            m: 2
          },
          width: 600
        }}
      >
        <Stack direction="row">
          <Button
            sx={{ width: "150px", height: "45px", marginTop: "11px" }}
            variant="contained"
            color="error"
          >
            + Add Project
          </Button>
          <CardHeader
            avatar={
              <Avatar
                variant="rounded"
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              >
                R 
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <ArrowDropDownIcon />
              </IconButton>
            }
            title="Poornima"
            subheader="Senior Developer"
          />
        </Stack>

        <Card variant="contained" sx={{backgroundColor: '#f8f8f9', justifyContent: 'center', margin: '50px'}}>
            <ProfileBadge/>
        </Card>
  
      </Box>
    </Box>
    // </Box>
  );
}
