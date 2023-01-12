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
      <div
        className="font-bold flex gap-2 items-center text-xl font-mono cursor-pointer"
        onClick={handleLogoClick}
      >
        <MarketIcon />
        NFT Marketplace
      </div>
      <div className="flex gap-14 items-center">
        <span
          className="font-semibold cursor-pointer"
          onClick={handleMarketClick}
        >
          Browse
        </span>
        <div className="flex flex-row items-center gap-2">
          {isUserLoggedIn() ? (
            <>
              <span className="text-white font-semibold text-xl mr-5">
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
                <UserIcon className="mr-3" />
                Login
              </button>
                
              <button
                onClick={handleSignUpClick}
                className="btn btn-primary w-fit"
              >
                <UserIcon className="mr-3" />
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
