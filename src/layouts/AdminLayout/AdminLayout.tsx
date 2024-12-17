import { FC, ReactNode } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { styles } from './AdminLayout.styles';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <Box sx={styles.root}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={styles.mainContent}
      >
        <Toolbar />
        <Container sx={styles.container}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLayout;