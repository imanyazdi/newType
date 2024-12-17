import { SxProps, Theme } from '@mui/material';

interface AdminLayoutStyles {
  root: SxProps<Theme>;
  mainContent: SxProps<Theme>;
  container: SxProps<Theme>;
}

export const styles: AdminLayoutStyles = {
  root: {
    display: 'flex'
  },
  mainContent: {
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - 240px)` },
    minHeight: '100vh',
    marginRight: '240px',
    marginLeft: 0
  },
  container: {
  }
};