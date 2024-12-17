import { SxProps, Theme } from '@mui/material';

interface SidebarStyles {
  sidebar: SxProps<Theme>;
}

export const styles: SidebarStyles = {
  sidebar: {
    flexBasis: "20%",
    minHeight: "100vh",
    background: "red"
  }
};