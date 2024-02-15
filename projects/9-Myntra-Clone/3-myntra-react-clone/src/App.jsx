import Fetchitems from "./components/Fetchitems";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus=useSelector(store=>store.fetchStatus);
  return (
    <>
      <Header />
      <Fetchitems />
      {fetchStatus.currentlyFetching?<LoadingSpinner />:<Outlet />}
      <Footer />
    </>
  )
}

export default App
