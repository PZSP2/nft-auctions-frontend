import registerImage from "../../assets/images/loginRegisterImage.png";

const RegisterPage = () => {
  return (
    <main className="flex flex-row">
      <img src={registerImage} alt="register" />
      <section className="px-14 py-16 flex flex-col">
        <span className="font-semibold text-4xl">Create account</span>
        <span className="text-xl mt-4">
          Enter your details and start creating,
          <br />
          collecting and selling NFTs.
        </span>
        <input
          type="text"
          placeholder="Username"
          className="input w-full max-w-xs rounded-2xl text-black mt-10"
        />
        <input
          type="text"
          placeholder="Email Adress"
          className="input w-full max-w-xs rounded-2xl text-black mt-5"
        />
        <input
          type="password"
          placeholder="Password"
          className="input w-full max-w-xs rounded-2xl text-black mt-5"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input w-full max-w-xs rounded-2xl text-black mt-5"
        />
        <button className="btn px-16 bg-secondary  hover:bg-secondaryHoverFocus focus:bg-secondaryHoverFocus mt-16 ml-10 w-fit">
          Create account
        </button>
      </section>
    </main>
  );
};

export default RegisterPage;
