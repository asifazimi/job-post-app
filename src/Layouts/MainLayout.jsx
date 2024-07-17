import { Outlet } from "react-router-dom"
// Component
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainLayout