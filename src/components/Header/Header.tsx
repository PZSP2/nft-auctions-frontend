import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_KEYS } from "../../api/API_KEYS";
import { ReactComponent as MarketIcon } from "../../assets/icons/marketIcon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userIcon.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrowUp.svg";
import { useWallet } from "../../hooks/useWallet";
import { useAuthStore } from "../../stores/AuthStore";
import { useMarketplaceStore } from "../../stores/MarketplaceStore";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn, name, logoutUser } = useAuthStore();
  const { schoolId } = useMarketplaceStore();
  const [fundsToAdd, setFundsToAdd] = useState("");
  const { data: schoolsResponse, isLoading } = useQuery(
    [API_KEYS.GET_SCHOOL_INFO],
    () => {
      if (!schoolId) return;
      return axios.get(`/api/school/${schoolId}`).then((response) => response);
    }
  );
  const { mutateAsync: mutateAddBalance } = useMutation(
    [API_KEYS.ADD_BALANCE],
    () => axios.put("/api/account/funds", { balanceToAdd: Number(fundsToAdd) }),
    { onSuccess: () => refetchWallet() }
  );

  const { data: walletResponse, refetch: refetchWallet } = useWallet();

  const canAddFunds = /^\d+$/.test(fundsToAdd) && fundsToAdd !== "";

  const handleAddFunds = () => {
    fundsToAdd !== "" && mutateAddBalance();
  };

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
              <span>{schoolsResponse?.data.name}</span>
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
              <label
                htmlFor="wallet-modal"
                className="flex flex-row items-center text-white font-semibold text-lg p-3 px-4 h-12 bg-black/20 rounded-lg"
              >
                <WalletIcon className="mr-3 w-4" />
                Wallet
              </label>
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
      {walletResponse && (
        <>
          <input type="checkbox" id="wallet-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="wallet-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="font-bold text-lg text-center">Your wallet</h3>
              <p className="py-4">
                Current balance: <b>{walletResponse.data.balance}</b> $
              </p>
              <div className="flex gap-4 items-center justify-around mt-3">
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    $
                  </span>
                  <input
                    type="text"
                    className="input rounded-none rounded-r-lg bg-gray-50 border border-white border-solid text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                    placeholder="Type amount of funds"
                    onChange={(e) => {
                      setFundsToAdd(e.target.value);
                    }}
                    value={fundsToAdd}
                  />
                </div>
                <button
                  onClick={handleAddFunds}
                  className="btn btn-primary w-fit"
                  disabled={!canAddFunds}
                >
                  <ArrowUpIcon className="mr-3 w-6 h-6" />
                  Add funds
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
export default Header;
