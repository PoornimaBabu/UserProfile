import * as React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Grid, Typography } from "@mui/material";


export default function ProfileBadge(props) {

  let {name, email} = props

  return (
    <div>
      <Grid container direction="column" spacing={1} marginTop={25} marginBottom={22} marginLeft={15}>
        <Grid item >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                variant="rounded"
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              >
              <AddAPhotoIcon />
              </Avatar>
            }
          >
            <Avatar
              sx={{ width: 100, height: 100, fontSize: "50px" }}
              variant="rounded"
              alt={name ? (name.charAt(0).toUpperCase()) : ''}
              src="/static/images/avatar/2.jpg"
            />
          </Badge>
      </Grid>
      <Grid item ><Typography >{name}</Typography></Grid>
      <Grid item ><Typography variant="subtitle1" style={{color: 'primary'}}>{email}</Typography></Grid>   
    </Grid>
    </div>
  );
}
