import { Notifications } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Notification from "./components/Notifications";


import './styles/app.scss';


const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/notifications" element={<Notification/>} />
    </Routes>

  )
}

export default App;
