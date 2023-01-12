import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEYS } from "../../api/API_KEYS";
import axios from "axios";
import { MinimalNft } from "../OwnedNftsPage/OwnedNftsPage";
import { getIpfsImage } from "../../utils/ipfsImageGetter";

type Bid = {
  auctionId: number,
  createdAt: string,
  bidder: {
    accountId: number,
    name: string
  },
  price: number
}

type Auction = {
  auctionId: number;
  bids: Bid[],
  currentPrice: number,
  endDate: string,
  status: string,
  nft: MinimalNft,
  startDate: string,
  startingPrice: number,
  winningBid: Bid
};

type Nft = {
  nftId: number;
  name: string;
  description: string;
  fileUri: string;
  isImage: boolean;
  issuer: {
    accountId: number;
    name: string;
  };
  owner: {
    accountId: number;
    name: string;
  }
}


const TokenPage = () => {
  const [bid, setBid] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [auction, setAuction] = useState<Auction>();
  const [nft, setNft] = useState<Nft>();
  const { nftId } = useParams<{ nftId: string }>();
  const {
    data: auctionResponse,
    mutateAsync,
    isLoading: loadingAuction,
  } = useMutation(
    [API_KEYS.GET_NFT],
    () => axios.get(`/api/auction/?nftId=${nftId}`).then((res) => res),
    { onSuccess: (response) => handleAuctionFetchSuccess(response.data.auctions) }
  );

  const { data: nftResponse, isLoading: loadingNft } = useQuery(
    [API_KEYS.GET_NFT, nftId],
    () => axios.get(`/api/nft/${nftId}`).then((res) => res),
    { onSuccess: (response) => handleNftFetchSuccess(response.data) }
  );

  const {
    data: bidResponse,
    mutateAsync: mutateBid,
    isLoading: loadingBid,
  } = useMutation(
    [API_KEYS.BID_NFT],
    () =>
      axios
        .post(`/api/auction/${nftId}/bid`, {
          bidderId: 1,
          bidAmount: bid,
        })
        .then((res) => res),
    {
      onSuccess: () => {
        nftId && mutateAsync();
      },
      onError: () => {
        alert("Bid too low!");
      },
    }
  );

  useEffect(() => {
    nftId && mutateAsync();
  }, [nftId]);

  useEffect(() => {
    const auctionTimer = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft <= 0) clearInterval(auctionTimer);
    }, 1000);

    return () => clearInterval(auctionTimer);
  }, [nftId, secondsLeft]);

  const handleAuctionFetchSuccess = (auctions: Auction[]) => {
    setAuction(auctions[0]);
  }

  const handleNftFetchSuccess = (nft: Nft) => {
    setNft(nft);
  }

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBid(Number(e.target.value));

  const handlePlaceBid = () => {
    bid && mutateBid();
  };

  if (!auction || loadingAuction || loadingNft) return <h3>Loading data...</h3>;

  const padZero = (num: number) => {
    return num < 10 ? `0${num}` : num;
  }

  // return {hours, minutes, seconds}
  const getTimeLeft = () => {
    const endDate = new Date(auction!.endDate);
    const now = new Date();
    const diff =  endDate.getTime() - now.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return {
      hours: padZero(hours),
      minutes: padZero(minutes % 60),
      seconds: padZero(seconds % 60)
    }
  }

  const {hours, minutes, seconds} = getTimeLeft();

  return (
    <main className="py-32 px-20 flex justify-center gap-10">
      <section className="flex flex-col gap-3">
        <img
          src={getIpfsImage(nft!.fileUri)}
          alt="nft"
          className="rounded-xl w-96"
        />
        <h2 className="font-bold text-4xl">{nft?.name}</h2>
        <span className="text-gray"> Minted on Sep 30, 2022</span>
        <span className="text-gray font-mono font-semibold text-lg">
          Created by
        </span>
        <span className="font-mono">{nft?.issuer.name}</span>
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
      <section className="p-6 flex flex-col bg-primary h-fit rounded-xl gap-2 items-center w-72">
        <span className="text-xs font-mono">Auction ends in:</span>
        <span className="text-2xl font-mono">
          {hours}:{minutes}:{seconds}
        </span>
        <div className="flex mt-2">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            $
          </span>
          <input
            type="text"
            className="input rounded-none rounded-r-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Type your bid"
            onChange={handleBidChange}
          />
        </div>
        <button
          onClick={handlePlaceBid}
          className="btn bg-secondary hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus w-fit font-mono mt-3"
          disabled={auction?.currentPrice ? bid <= auction?.currentPrice : true}
        >
          Place bid
        </button>
        <span className="mt-3 text-xl">Current bid: <span className="font-bold">{auction?.currentPrice}$</span></span>

        <div className="flex flex-col gap-2 mt-3 w-full">
          <span className="font-bold">Bids history</span>
          <div className="flex flex-col gap-2">
            {auction?.bids.sort((a, b) => b.price- a.price).map((bid) => (
              <div className={`flex justify-between p-4 rounded-xl  ${bid.price === auction.currentPrice ? "bg-green-900/50" : "bg-gray/10"}`}>
                <span className="font-bold">{bid.bidder.name}</span>
                <span className="font-mono">{bid.price}$</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TokenPage;
