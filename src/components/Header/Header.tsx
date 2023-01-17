import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_KEYS } from "../../api/API_KEYS";
import { ReactComponent as MarketIcon } from "../../assets/icons/marketIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userIcon.svg";
import { useAuthStore } from "../../stores/AuthStore";
import { useMarketplaceStore } from "../../stores/MarketplaceStore";

const Header = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn, name, logoutUser } = useAuthStore();
  const { schoolId } = useMarketplaceStore();
  const { data: schoolsResponse, isLoading } = useQuery(
    [API_KEYS.GET_SCHOOL_INFO],
    () => {
      if (!schoolId) return;
      return axios.get(`/api/school/${schoolId}`).then((response) => response);
    }
  );

  const handleLogoClick = () => navigate("/");

  const handleSignUpClick = () => navigate("/register");

  const handleLoginClick = () => navigate("/login");

  const handleSchoolChangeClick = () => navigate("/school");

  const handleNftsClick = () => navigate("/ownedNfts");

  const handleBrowseClick = () => navigate("/browse");

  const handleLogoutClick = () => logoutUser();

  return (
    <header className="flex justify-between px-20 py-9">
      <div className="flex flex-row gap-1 items-center">
        <div className="flex flex-col items-center">
            <div
              className="font-bold flex gap-2 items-center text-xl font-mono cursor-pointer"
              onClick={handleLogoClick}
            >
              <MarketIcon />
              NFT Marketplace
            </div>
            {schoolId && (
              <div className="flex flex-row items-center gap-2">
                <span>
                  {schoolsResponse?.data.name}
                </span>
              </div>
            )}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="btn btn-primary" onClick={handleBrowseClick}>
          Browse NFTs
        </div>
        {schoolId && (
          <span
            className="btn btn-outline text-base-content/75 ml-2"
            onClick={handleSchoolChangeClick}
          >
            Change school
          </span>
        )}
      </div>
      
      <div className="flex gap-14 items-center">
        <div className="flex flex-row items-center gap-2">
          {isUserLoggedIn() ? (
            <>
              <span className="flex flex-row items-center text-white font-semibold text-lg p-3 px-4 h-12 bg-black/20 rounded-lg">
                <UserIcon className="mr-3 w-4" />
                {name}
              </span>
              <button
                className="btn btn-secondary"
                onClick={() => handleNftsClick()}
                >
                MY NFTS
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleLogoutClick()}
                >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLoginClick}
                className="btn btn-secondary w-fit"
              >
                Login
              </button>
                
              <button
                onClick={handleSignUpClick}
                className="btn btn-primary w-fit"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
