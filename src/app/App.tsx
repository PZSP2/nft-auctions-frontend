import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BrowsePage from "../pages/BrowsePage/BrowsePage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NftsPage from "../pages/NftsPage";
import RegisterPage from "../pages/RegisterPage";
import TokenPage from "../pages/TokenPage";

const App = () => {
  return (
    <div className="pb-44 relative min-h-screen">
      <Header />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<BrowsePage />} path="/browse" />
        <Route element={<NftsPage />} path="/browse/:schoolId" />
        <Route element={<TokenPage />} path="/browse/:schoolId/:nftId" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
