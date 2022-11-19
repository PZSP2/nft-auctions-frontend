import { BrowserRouter } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const AppProviders = ({ children }: Props) => (
  <BrowserRouter>{children}</BrowserRouter>
);
export default AppProviders;
