import registerImage from "../../assets/images/loginRegisterImage.png";

const RegisterPage = () => {
  return (
    <main className="flex flex-row justify-center items-center p-20">
      <img src={registerImage} alt="register" />
      <section className="p-14 flex flex-col">
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
        <a href="/login" className="ml-12 mt-2 underline">
          Don't have an account? Sign up
        </a>
      </section>
    </main>
  );
};

export default RegisterPage;
