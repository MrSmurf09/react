import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, SubMenuRoutes } from "./models/routes.model";
import './App.css'
import Home from "./pages/Home"
import Gojo from "./pages/Gojo"
import Toji from "./pages/Toji"
import Sukuna from "./pages/Sukuna"
import Vivy from "./pages/Vivy"
import Hells from "./pages/Hells";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PublicRoutes.HOME}/>}/>
        <Route path={PublicRoutes.HOME} element={<Home />}/>
        <Route path={PublicRoutes.Gojo} element={<Gojo />}/>
        <Route path={PublicRoutes.Sukuna} element={<Sukuna />}/>
        <Route path={PublicRoutes.Toji} element={<Toji />}/>
        <Route path={PublicRoutes.Vivy} element={<Vivy />}/>
        <Route path={`${PublicRoutes.HOME}${SubMenuRoutes.Hells_Paradise}`} element={<Hells />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
