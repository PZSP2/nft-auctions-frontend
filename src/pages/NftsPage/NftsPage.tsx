import { useState } from "react";
import nftImageMock1 from "../../assets/images/nft_1.png";
import nftImageMock2 from "../../assets/images/nft_2.png";
import nftImageMock3 from "../../assets/images/nft_3.png";
import authorImg from "../../assets/images/userAvatar.png";
import { ReactComponent as EyeIcon } from "../../assets/icons/eyeIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_KEYS } from "../../api/API_KEYS";
import { useQuery } from "@tanstack/react-query";
import { getIpfsImage } from "../../utils/ipfsImageGetter";

type Nft = {
  nftId: number;
  name: string;
  fileUri: string;
  description: string;
};

const NftsPage = () => {
  const [nfts, setNfts] = useState<Nft[]>([]);
  const navigate = useNavigate();
  const { schoolId } = useParams<{ schoolId: string }>();
  const { data: nftsResponse, isLoading } = useQuery(
    [API_KEYS.GET_NFTS],
    () => axios.get("/api/nft").then((response) => response),
    { onSuccess: (response) => handleFetchSuccess(response.data.nfts) }
  );

  const handleSeeMore = () => {};

  const handleNftClick = (nftId: number) =>
    navigate(`/browse/${schoolId}/${nftId}`);

  const handleFetchSuccess = (nftsData: Nft[]) => {
    setNfts(nftsData);
  };

  return (
    <main className="py-32 px-20 flex items-start flex-col justify-center">
      <div className="flex justify-around w-full">
        <span>
          <h3 className="text-3xl font-bold">Discover more NFTs</h3>
          <h4 className="text-xl mt-3">Explore new trending tokens</h4>
        </span>
        <button
          onClick={handleSeeMore}
          className="btn w-fit bg-transparent border-secondary hover:bg-transparent focus:bg-transparent hover:border-secondary focus:border-secondary"
        >
          <EyeIcon className="mr-3" />
          See more
        </button>
      </div>
      <section className="flex gap-10 mt-32 flex-wrap justify-center w-full">
        {nfts.length > 0 &&
          !isLoading &&
          nfts.map(({ nftId, name, fileUri, description }) => (
            <div
              className="cursor-pointer"
              key={nftId}
              onClick={() => handleNftClick(nftId)}
            >
              <img
                src={getIpfsImage(fileUri)}
                alt="nft"
                className="rounded-t-xl h-80 max-w-xs"
              />
              <div className="bg-primary p-5 rounded-b-xl text-center hover:bg-gray">
                <span className="font-medium text-lg">{name}</span>
                <span className="flex mt-3 gap-3 leading-xs items-center font-light font-mono">
                  <img src={authorImg} alt="author" />
                  {`Biga mock`}
                </span>
                <div className="flex justify-between mt-5 font-mono">
                  <span className="flex gap-1 flex-col">
                    <span className="text-gray">Min bid</span>
                    <span>{`125 $`}</span>
                  </span>
                  <span className="flex gap-1 flex-col">
                    <span className="text-gray">Current bid</span>
                    <span>{`150 $`}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default NftsPage;
