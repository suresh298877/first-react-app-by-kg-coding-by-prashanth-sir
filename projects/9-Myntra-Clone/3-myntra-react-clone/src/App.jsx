import Fetchitems from "./components/Fetchitems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <Header />
      <Fetchitems />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
