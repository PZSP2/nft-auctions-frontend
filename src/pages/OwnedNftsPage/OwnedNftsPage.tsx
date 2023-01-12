import { useState } from "react";
import authorImg from "../../assets/images/userAvatar.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_KEYS } from "../../api/API_KEYS";
import { useQuery } from "@tanstack/react-query";

type Nft = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const OwnedNftsPage = () => {
  const [nfts, setNfts] = useState<Nft[]>([]);
  const navigate = useNavigate();

  return (
    <p>WIP</p>
  );
};

export default OwnedNftsPage;
