import { useNavigate } from "react-router-dom";
import { ReactComponent as MarketIcon } from "../../assets/icons/marketIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userIcon.svg";
import { useAuthStore } from "../../stores/AuthStore";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate("/");

  const handleSignUpClick = () => navigate("/register");

  const handleLoginClick = () => navigate("/login");

  const handleMarketClick = () => navigate("/browse");

  const handleNftsClick = () => navigate("/ownedNfts");

  const { isUserLoggedIn, name, logoutUser } = useAuthStore();

  return (
    <header className="flex justify-between px-20 py-9">
      <div className="flex flex-row items-center">
        <div
          className="font-bold flex gap-2 items-center text-xl font-mono cursor-pointer"
          onClick={handleLogoClick}
        >
          <MarketIcon />
          NFT Marketplace
        </div>
        <div className="divider divider-horizontal"></div>
        <span
          className="btn btn-sm btn-outline btn-primary"
          onClick={handleMarketClick}
        >
          Browse
        </span>
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
                onClick={() => logoutUser()}
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
