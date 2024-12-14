import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Dashboard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
