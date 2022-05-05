import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const SharePopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleSnackBarClick = () => {
    console.log("clicking snack bar");
    setOpenSnackBar(true);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleShare = (e) => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;

      case "copy":
        navigator.clipboard.writeText(ahref);
        handleSnackBarClick();
        handleClose();
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        onClick={handleClick}
        sx={{
          width: "15rem",
          padding: "1.1rem 2rem",
          fontSize: "1.2rem",
          border: "1px solid black",
          borderRadius: "0",
          backgroundColor: "transparent",
          textAlign: "center",
          color: "black",
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ShareIcon style={{ marginRight: "0.5rem" }} /> SHARE
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List dense={true}>
          <ListItem button id="facebook" onClick={handleShare}>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button id="copy" onClick={handleShare}>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Copy Link" />
          </ListItem>
        </List>
      </Popover>
      <SimpleSnackbar open={openSnackBar} handleClose={handleSnackBarClose} />
    </div>
  );
};

function SimpleSnackbar({ open, handleClose }) {
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Link Copied Successfully"
        action={action}
      />
    </div>
  );
}
