import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Box, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { BorderBottom } from "@mui/icons-material";

// import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
// import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import Typography from '@mui/material/Typography';
import SettingsIcon from "@mui/icons-material/Settings";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Stack
      //   spacing={{ xs: 1, sm: 2 }}
      //   direction="row"
      //   useFlexGap
      //   flexWrap="wrap"
      sx={{ background: "#0d0e12", height: "97vh" }}
    >
      <Stack
        direction="row"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ borderBottom: 1, borderColor: "#71758b" }}
      >
        <Box component={"p"} var>
          <Typography variant="h4" color={"white"}>
            CMS
          </Typography>
        </Box>
        <Box>
          <ExitToAppIcon sx={{ color: "white" }} />
        </Box>
      </Stack>

      <Stack sx={{ borderBottom: 1, borderColor: "#71758b" }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
          secondaryAction={
            // <Checkbox

            // onChange={handleToggle(value)}
            // checked={checked.indexOf(value) !== -1}/
            // inputProps={{ 'aria-labelledby': labelId }}
            //  />
            <SettingsIcon edge="end" sx={{ color: "#77819c" }} />
          }
        >
          {/* <Box sx={{ background: "red" }}> */}
          {/* <SettingsIcon sx={{ color: "#77819c" }} /> */}
          {/* </Box> */}
          <ListItemAvatar sx={{ alignSelf: "center" }}>
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "4px",
                marginRight: "20px",
              }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Alvena Ward"
            sx={{ color: "#fff" }}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#77819c"
                >
                  python Dev
                </Typography>
                <Typography color={"green"}>.online</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        <Divider variant="inset" component="li" />
      </Stack>

      <Stack sx={{ borderBottom: 1, borderColor: "#71758b" }}>
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
            bgcolor: "#2c2c41",
            color: "white",
            borderRadius: "9px",
          }}
          variant="outlined"
        >
          <InputLabel
            sx={{ color: "#71758b" }}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            // type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Stack>

      <Stack>
        <ListItemButton sx={{ color: "#898c98"}}>
          <ListItemIcon>
            <SendIcon sx={{ color: "#1f202c" }} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{ fontVariant:5,fontSize:600  }}
          />
        </ListItemButton>

        <ListItemButton sx={{ color: "#898c98" }}>
          <ListItemIcon>
            <SendIcon sx={{ color: "#1f202c" }} />
          </ListItemIcon>
          <ListItemText primary="Layout Builder" />
        </ListItemButton>
      </Stack>

      <Stack
        sx={{ borderBottom: 1, borderColor: "#71758b", overflowY: "auto" }}
      >
        <List
          sx={{ width: "100%", color: "#9a9daa" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ bgcolor: "#0d0e12", color: "#888a97" }}
            >
              CRAFTED
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? (
              <ExpandLess sx={{ color: "#1f202c" }} />
            ) : (
              <ExpandMore sx={{ color: "#1f202c" }} />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder sx={{ color: "#1f202c" }} />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ bgcolor: "#0d0e12", color: "#888a97" }}
            >
              APPS
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText primary="Chat" sx={{ color: "#888a97" }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText primary="User management" sx={{ color: "#888a97" }} />
          </ListItemButton>
        </List>
      </Stack>

      <Stack sx={{ color: "white" }}>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon sx={{ color: "#1f202c" }} />
          </ListItemIcon>
          <ListItemText primary="Changelog v8.2.3" />
        </ListItemButton>
      </Stack>

      <Stack sx={{ color: "white", bgcolor: "#2c2c41" }}>
        <ListItemButton>
          <ListItemIcon>
            {/* <SendIcon sx={{ color: "white" }} /> */}
          </ListItemIcon>
          <ListItemText primary="Docs & Components" />
        </ListItemButton>
      </Stack>
      {/* <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Long content</Item> */}
    </Stack>
  );
}
