import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEYS } from "../api/API_KEYS";

export const useAccountUpdates = () =>
  useQuery([API_KEYS.GET_ACCOUNT_UPDATES], () => {
    return axios
      .get("/api/account/me/updates")
      .then((response) => response);
  });