import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import BrowsePage from "../pages/BrowsePage/BrowsePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NftsPage from "../pages/NftsPage";
import RegisterPage from "../pages/RegisterPage";

const App = () => {
  return (
    <div className="pb-44 relative min-h-screen">
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<BrowsePage />} path="/browse" />
        <Route element={<NftsPage />} path="/browse/:id" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
