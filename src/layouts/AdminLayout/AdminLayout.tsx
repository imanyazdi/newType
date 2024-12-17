import { FC, ReactNode } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          minHeight: '100vh'
        }}
      >
        <Toolbar /> 
        <Container>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLayout;