import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element="" />
      </Routes>
    </Dashboard>
  );
};

export default App;
