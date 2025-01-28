import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Lottie from "lottie-react";
import LoaderAnimation from "../../../assets/images/animation/loader.json";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => (
  <Dialog
    open={isLoading}
    PaperProps={{
      style: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    }}
    sx={{
      zIndex: "200000 !important",
    }}
  >
    <DialogContent>
      <Box sx={{ display: "flex" }}>
        <Lottie animationData={LoaderAnimation} style={{ height: 50 }} />
      </Box>
    </DialogContent>
  </Dialog>
);

export default Loader;
