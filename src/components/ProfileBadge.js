import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  // backgroundColor: "#fff",
  backgroundColor: red[500],
  fontColor: "#000"
  // border: `2px solid `
}));

export default function ProfileBadge() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" marginTop={25} marginBottom={25}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          // <SmallAvatar
          //   variant="rounded"
          //   onClick={() => console.log("clicked")}
          //   alt="Remy Sharp"
          //   src="/static/images/avatar/1.jpg"
          // />
          <Avatar
            variant="rounded"
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          >
            P{/* <IconButton aria-label="settings"> */}
            {/* <MoreVertIcon /> */}
            {/* </IconButton> */}
          </Avatar>
        }
      >
        <Avatar
          sx={{ width: 100, height: 100, fontSize: "50px" }}
          variant="rounded"
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
      </Badge>
    </Stack>
  );
}
