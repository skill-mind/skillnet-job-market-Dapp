import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { X } from "lucide-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  maxWidth: "90%",
  bgcolor: "black",
  border: "1px solid #333",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.75)",
  p: 4,
  color: "white",
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  user: {
    name: string;
    email: string;
    date: string;
    status: string;
    wallet: string;
    courses: string;
    job: string;
  } | null;
}

const Jobseekermodal: React.FC<ModalProps> = ({ open, handleClose, user }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {/* Header with Cancel Icon */}
          <div
            className="flex justify-between items-center mb-3 pb-2"
            style={{ borderBottom: "1px solid #333" }}
          >
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{ color: "white" }}
            >
              User Details
            </Typography>

            {/* Cancel Icon Button */}
            <Button
              onClick={handleClose}
              sx={{
                minWidth: "auto",
                padding: "6px",
                bgcolor: "#333",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#444" },
              }}
            >
              <X  />
             
            </Button>
          </div>

          {/* User Details */}
          {user && (
            <div className="space-y-3">
              <Typography sx={{ color: "white" }} className="border-b h-[50px] flex items-center border-[#31283A]">
                <strong className="text-gray-400 mr-2">
                  Name <span className="text-[#C04639]"> - </span>
                </strong>
                <span className="text-white">{user.name}</span>
              </Typography>

              <Typography sx={{ color: "white" }} className="border-b h-[50px] flex items-center border-[#31283A]">
                <strong className="text-gray-400 mr-2">
                  Wallet <span className="text-[#C04639]"> - </span>
                </strong>
                <span className="text-white">{user.wallet}</span>
              </Typography>

              <Typography sx={{ color: "white" }} className="border-b h-[50px] flex items-center border-[#31283A]">
                <strong className="text-gray-400 mr-2">
                  Join Date <span className="text-[#C04639]"> - </span>
                </strong>
                <span className="text-white">{user.date}</span>
              </Typography>

              {/* Courses Section */}
              <div className="border-b border-[#31283A] pb-3">
                <strong className="text-gray-400 mr-2">
                  Course Taken <span className="text-[#C04639]"> - </span>
                </strong>
                <span className="text-white">{user.courses}</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-2">
                  {["Blockchain Development Bootcamp", "Solidity Basic Course", "Technical Writing: The Ultimate Approach", "Data base Guru", "Design Basics"].map((course, index) => (
                    <div key={index} className="border p-1 border-[#31283A] rounded-md">
                      <h1 className="text-white font-semibold">{course}</h1>
                      <h2 className="text-gray-400">{index < 3 ? "In progress" : "Completed"}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Additional Details */}
          {user && (
            <div>
              <Typography sx={{ color: "white" }} className="border-b h-[50px] flex items-center border-[#31283A]">
                <strong className="text-gray-400 mr-2">
                  Job <span className="text-[#C04639]"> - </span>
                </strong>
                <span className="text-white">{user.job}</span>
              </Typography>

              <Typography sx={{ color: "white" }} className="h-[50px] flex items-center border-[#31283A]">
                <strong className="text-gray-400 mr-2">
                  Status <span className="text-[#C04639]"> - </span>
                </strong>
                <span className="text-white">{user.status}</span>
              </Typography>
            </div>
          )}

          {/* Ban User Button */}
          <Button
            sx={{
              border: "1px solid #31283A",
              color: "white", // Ensure text color stays white
              textTransform: "none",
              "&:hover": { bgcolor: "#D9D9D9", color: "black" },
            }}
            className="rounded-md w-full h-[50px] flex items-center"
          >
            Ban User
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Jobseekermodal;
