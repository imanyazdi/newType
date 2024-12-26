import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Table from "./components/common/Input/table/Table";
import { DataType } from "./components/common/Input/table/Table.types";  // Import type for data

// Create RTL cache for styling
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// Define theme with RTL and custom font
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
  },
});

const data: DataType[] = [
  {
    name: "Ali",
    position: "Designer",
    bday: "25 Nov",
    emailPhone: "ali@example.com",
    address: "Tehran, Iran",
    status: "Full Time",
  },
  {
    name: "Zahra",
    position: "Developer",
    bday: "15 Oct",
    emailPhone: "zahra@example.com",
    address: "Mashhad, Iran",
    status: "Part Time",
  },
];

const App = () => (
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminLayout>
        <Table data={data} />
      </AdminLayout>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
