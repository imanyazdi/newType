import { ReactNode } from "react";
import Navbar from "../layout/Navbar";

const Dashboard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Dashboard;
