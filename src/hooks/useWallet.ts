import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEYS } from "../api/API_KEYS";

export const useWallet = () =>
  useQuery([API_KEYS.GET_WALLET], () => {
    return axios.get("/api/account/wallet").then((response) => response);
  });
