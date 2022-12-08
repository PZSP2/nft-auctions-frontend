import { useNavigate } from "react-router-dom";
import { ReactComponent as RocketIcon } from "../../assets/icons/rocketIcon.svg";
import { ReactComponent as LandingImage } from "../../assets/images/landingImage.svg";
import userAvatar from "../../assets/images/userAvatar.png";
import Header from "../../components/Header";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/register");
  return (
    <>
      <Header />
      <main className="p-20 flex gap-7 justify-center items-center">
        <section className="flex flex-col">
          <span className="font-semibold text-5xl mb-4 leading-tight">
            Discover
            <br />
            Digital Work &
            <br />
            Collect NFTs
          </span>
          <span className="text-base max-w-md">
            NFT Marketplace is designed for students' school works. Collect, buy
            and sell works from more than 20k NFT users
          </span>
          <button
            onClick={handleGetStarted}
            className="btn bg-secondary hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus mt-24 w-fit"
          >
            <RocketIcon className="mr-3" />
            Get started
          </button>
          <div className="flex justify-between mt-8 max-w-sm">
            <div className="flex flex-col ">
              <span className="font-semibold text-2xl">240k+</span>
              <span className="text-lg">Total Sale</span>
            </div>
            <div className="flex flex-col ">
              <span className="font-semibold text-2xl">100k+</span>
              <span className="text-lg">Auctions</span>
            </div>
            <div className="flex flex-col ">
              <span className="font-semibold text-2xl">160k+</span>
              <span className="text-lg">Artists</span>
            </div>
          </div>
        </section>
        <section className="hidden md:block">
          <LandingImage />
          <div className="bg-primary p-5 rounded-b-xl">
            <span className="font-medium text-2xl">Space Walking</span>
            <span className="flex mt-3 gap-3 leading-xs items-center">
              <img src={userAvatar} alt="user" />
              Bartek Biga
            </span>
          </div>
        </section>
      </main>
    </>
  );
};
export default LandingPage;
