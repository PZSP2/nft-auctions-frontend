import { useNavigate } from "react-router-dom";
import { ReactComponent as MarketIcon } from "../../assets/icons/marketIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userIcon.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate("/");

  const handleSignUpClick = () => navigate("/register");

  const handleMarketClick = () => navigate("/browse");

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
          Marketplace
        </span>
        <span className="font-semibold cursor-pointer">Rankings</span>
        <span className="font-semibold cursor-pointer">Contact</span>
        <button
          onClick={handleSignUpClick}
          className="btn bg-secondary hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus w-fit"
        >
          <UserIcon className="mr-3" />
          Sign up
        </button>
      </div>
    </header>
  );
};
export default Header;
