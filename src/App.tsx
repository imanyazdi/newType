// import { Route, Routes } from "react-router-dom";
// import Dashboard from "./components/dashboard/Dashboard";

// const App = () => {
//   return (
//     <Dashboard>
//       <Routes>
//         <Route path="/" element="" />
//       </Routes>
      
//     </Dashboard>
//   );
// };

// export default App;
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import Dashboard from './components/dashboard/Dashboard';

// ایجاد تم با رنگ‌های دلخواه
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminLayout>
        <h1>محتوای داشبورد</h1>
        {/* <Dashboard /> */}
      </AdminLayout>
    </ThemeProvider>
  );
}

export default App;