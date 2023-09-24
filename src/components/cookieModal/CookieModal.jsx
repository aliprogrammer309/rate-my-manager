import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CookieModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "yellow" }}>
        View Cookie Policy
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cookie Policy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We use two types of cookies on our services: “session cookies” and
            “persistent cookies.” Session cookies are temporary cookies that
            remain on your device until you leave the services. A persistent
            cookie remains on your device for much longer or until you manually
            delete it (how long the cookie remains will depend on the duration
            or “lifetime” of the specific cookie and your browser settings).
            <Link to="/cookiePolicy">View all Cookie Policies</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
