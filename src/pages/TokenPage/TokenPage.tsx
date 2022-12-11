import { useState } from "react";

const TokenPage = () => {
  const [bid, setBid] = useState("123");

  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBid(`${e.target.value}`);

  const handlePlaceBid = () => {};

  return (
    <main className="py-32 px-20 flex justify-center gap-10">
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl">The Orbitians</h2>
        <span className="text-gray"> Minted on Sep 30, 2022</span>
        <span className="text-gray font-mono font-semibold text-lg">
          Created by
        </span>
        <span className="font-mono">Orbitian</span>
        <span className="text-gray font-mono font-semibold text-lg">
          Description
        </span>
        <span className="max-w-lg leading-7">
          Description The Orbitians is a collection of 10,000 unique NFTs on the
          Ethereum blockchain, There are all sorts of beings in the NFT
          Universe. The most advanced and friendly of the bunch are Orbitians.
          They live in a metal space machines, high up in the sky and only have
          one foot on Earth. These Orbitians are a peaceful race, but they have
          been at war with a group of invaders for many generations. The
          invaders are called Upside-Downs, because of their inverted bodies
          that live on the ground, yet do not know any other way to be.
          Upside-Downs believe that they will be able to win this war if they
          could only get an eye into Orbitian territory, so they've taken to
          make human beings their target.
        </span>
        <span className="text-gray font-mono font-semibold text-lg">Tags</span>
        <div className="flex gap-3">
          <button className="btn">Moon</button>
          <button className="btn">Moon</button>
          <button className="btn">Moon</button>
        </div>
      </section>
      <section className="p-6 flex flex-col bg-primary h-fit rounded-xl gap-2 items-center">
        <span className="text-xs font-mono">Auction ends in:</span>
        <span className="text-2xl font-mono">59 : 59 : 59 seconds</span>
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
          className="btn bg-secondary hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus w-fit font-mono"
        >
          Place bid
        </button>
      </section>
    </main>
  );
};

export default TokenPage;
