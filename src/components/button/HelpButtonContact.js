import {
  Box,
  Button,
  Grid2,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { FaRegMessage } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  {
    icon: <LiveHelpIcon />,
    name: "FAQ",
    url: "www.facebook.com",
  },
  {
    icon: <IoChatboxEllipses />,
    name: "CHAT",
    url: "www.chatting.com",
  },
  {
    icon: <FaWhatsapp />,
    name: "WHATSAPP",
    url: "www.whatsapp.com",
  },
];

const HelpButtonContact = () => {
  const [openButton, setOpenButton] = useState(false);
  const [anchorHelpButton, setAnchorHelpButton] = useState(null);

  const handleHelpButton = (e) => {
    if (openButton) {
      setOpenButton(false);
      setAnchorHelpButton(null);
    } else {
      setOpenButton(true);
      setAnchorHelpButton(e.currentTarget);
    }
  };

  return (
    <>
      <Box sx={{}}>
        <Button
          variant="outlined"
          disableElevation
          disableRipple
          onClick={handleHelpButton}
          aria-describedby={openButton ? "simple-popper" : null}
          sx={{
            border: "1px solid #fa811b",
            backgroundColor: "#fef6f0",
            borderRadius: "6px",
            color: "#bf4900",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          {openButton ? <IoIosCloseCircleOutline /> : <FaRegMessage />}
          <Typography>HELP</Typography>
        </Button>
        <Popper
          id={openButton ? "simple-popper" : null}
          open={openButton}
          onClick={handleHelpButton}
          anchorEl={anchorHelpButton}
        >
          <List
            sx={{
              zIndex: 7000,
              padding: "0px",
              border: "1px solid #fa811b",
              backgroundColor: "#fef6f0",
              borderRadius: "6px",
              color: "#bf4900",
            }}
          >
            {data.map((item, index) => (
              <ListItemButton
                sx={{
                  borderBottom:
                    (index === 0 && "1px solid rgba(250, 129, 27, .5)") ||
                    (index === 1 && "1px solid rgba(250, 129, 27, .5)"),
                  //   borderTopLeftRadius: index === 2 && "6px",
                  padding: "8px 10px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    // borderBottom: "1px solid #fa811b",
                    borderRadius: index === 2 && "6px",
                    // borderBottomLeftRadius:index==
                    borderTopLeftRadius: index === 0 && "6px",
                    borderTopRightRadius: index === 0 && "6px",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      <Box>
                        <Typography
                          sx={{
                            maxWidth: "100px",
                            marginLeft: "8px",
                            fontSize: "13px",
                            fontWeight: 700,
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    </>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Popper>
      </Box>
    </>
  );
};

export default HelpButtonContact;
