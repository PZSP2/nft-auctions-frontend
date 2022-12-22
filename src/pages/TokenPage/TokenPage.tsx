import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEYS } from "../../api/API_KEYS";
import axios from "axios";

type Auction = {
  id: number;
  nft_id: number;
  minimal_price: number;
  start_time: string;
  end_time: string;
  nft: {
    id: number;
    name: string;
    image: string;
    description: string;
    issuerId: number;
  };
  bids: {
    timestamp: string;
    auction_id: number;
    bidder_id: number;
    bid_price: number;
  }[];
};

const TokenPage = () => {
  const [bid, setBid] = useState("123");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [auction, setAuction] = useState<Auction>();
  const { nftId } = useParams<{ nftId: string }>();

  const { data: tokenResponse, mutateAsync } = useMutation(
    [API_KEYS.GET_NFT],
    () => axios.get(`/api/auction?nftId=${nftId}`).then((res) => res),
    { onSuccess: (response) => handleFetchSuccess(response.data) }
  );

  useEffect(() => {
    nftId && mutateAsync();
    const auctionTimer = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft <= 0) clearInterval(auctionTimer);
    }, 1000);

    return () => clearInterval(auctionTimer);
  }, [nftId, secondsLeft]);

  const handleFetchSuccess = (data: Auction[]) => setAuction(data[0]);

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBid(`${e.target.value}`);

  const handlePlaceBid = () => {};

  if (!auction) return <h3>Loading data...</h3>;

  return (
    <main className="py-32 px-20 flex justify-center gap-10">
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl">{auction.nft.name}</h2>
        <span className="text-gray"> Minted on Sep 30, 2022</span>
        <span className="text-gray font-mono font-semibold text-lg">
          Created by
        </span>
        <span className="font-mono">Biga mock</span>
        <img
          src={`data:image/jpeg;base64,${auction.nft.image}`}
          alt="nft"
          className="rounded-t-xl w-64"
        />
        <span className="text-gray font-mono font-semibold text-lg">
          Description
        </span>
        <span className="max-w-lg leading-7">{auction.nft.description}</span>
        <span className="text-gray font-mono font-semibold text-lg">Tags</span>
        <div className="flex gap-3">
          <button className="btn">Mock</button>
          <button className="btn">Mock</button>
          <button className="btn">Mock</button>
        </div>
      </section>
      <section className="p-6 flex flex-col bg-primary h-fit rounded-xl gap-2 items-center">
        <span className="text-xs font-mono">Auction ends in:</span>
        <span className="text-2xl font-mono">
          00 : 00 : {secondsLeft} seconds
        </span>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            $
          </span>
          <input
            type="text"
            className="input text-black rounded-none rounded-r-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Type your bid"
          />
        </div>
        <button
          onClick={handlePlaceBid}
          className="btn bg-secondary hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus w-fit font-mono mt-3"
        >
          Place bid
        </button>
        <span className="font-mono mt-3">
          Current bid:{" "}
          {Math.max(...auction.bids.map(({ bid_price }) => bid_price))} $
        </span>
      </section>
    </main>
  );
};

export default TokenPage;
