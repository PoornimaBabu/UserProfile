import { React } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProfileBadge from './ProfileBadge'

export default function ProfileDisplay(props){

    const { users } = props

    return <div>
        <Box
        sx={{
          "& > :not(style)": {
            m: 2
          },
          width: 400
        }}
      >
        <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
          <Button
            sx={{ width: "150px", height: "45px", marginTop: "12px" }}
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
                {users?.firstname?.charAt(0).toUpperCase()} 
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <ArrowDropDownIcon />
              </IconButton>
            }
            title={users.firstname}
            subheader={users.role}
          />
        </Stack>

        <Card variant="contained" sx={{backgroundColor: '#f8f8f9', justifyContent: 'center', margin: '50px'}}>
            <ProfileBadge name={users?.firstname} email={users?.email} />
        </Card>
  
      </Box>
    </div>
}