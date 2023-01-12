import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

axios.defaults.withCredentials = true

const queryClient = new QueryClient();

const AppProviders = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);
export default AppProviders;
