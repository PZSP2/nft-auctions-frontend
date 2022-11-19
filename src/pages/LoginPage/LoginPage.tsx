import loginImage from "../../assets/images/loginRegisterImage.png";

const LoginPage = () => {
  return (
    <main className="flex flex-row">
      <img src={loginImage} alt="register" />
      <section className="px-14 py-16 flex flex-col">
        <span className="font-semibold text-4xl">Login</span>
        <span className="text-xl mt-4">
          Enter your account details
          <br />
          to start trading NFTs
        </span>
        <input
          type="text"
          placeholder="Username"
          className="input w-full max-w-xs rounded-2xl text-black mt-10"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input w-full max-w-xs rounded-2xl text-black mt-5"
        />
        <button className="btn px-16 bg-secondary  hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus mt-16 ml-6 w-fit">
          Login
        </button>
      </section>
    </main>
  );
};

export default LoginPage;
