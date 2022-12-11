import { ReactComponent as MarketIcon } from "../../assets/icons/marketIcon.svg";

const Footer = () => {
  return (
    <footer className="px-20 flex gap-5 absolute bottom-14 w-full justify-center">
      <div className="flex flex-col gap-6 w-80">
        <span className="flex font-bold justify-center gap-2 items-center font-mono">
          <MarketIcon />
          <h3>NFT Marketplace</h3>
        </span>
        <span className="text-gray text-center">
          NFT Marketplace for schools created for Warsaw University of
          Technology
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 w-80">
        <span className="font-bold font-mono text-xl">Explore</span>
        <span className="text-gray cursor-pointer hover:text-white">
          Marketplace
        </span>
        <span className="text-gray cursor-pointer hover:text-white">
          Rankings
        </span>
        <span className="text-gray cursor-pointer hover:text-white">
          Contact
        </span>
      </div>
      <div className="flex flex-col gap-3 w-80">
        <span className="font-bold font-mono text-xl">Join newsletter</span>
        <span className="text-gray">
          Get exclusive promotions & updates about NFTs straight to your inbox
        </span>
        <span className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="input w-72 text-black"
          />
          <button className="btn bg-secondary hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus w-fit">
            Subscribe
          </button>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
