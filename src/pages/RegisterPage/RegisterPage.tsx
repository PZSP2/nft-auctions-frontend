import { useState } from "react";
import registerImage from "../../assets/images/loginRegisterImage.png";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const canSignUp =
    username.length > 0 &&
    email.length > 0 &&
    password.length >= 8 &&
    confirmPassword === password;

  return (
    <main className="flex flex-row justify-center items-center p-20">
      <img src={registerImage} alt="register" className="rounded-xl" />
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
          className="input w-full max-w-xs rounded-2xl text-white mt-10"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email Adress"
          className="input w-full max-w-xs rounded-2xl text-white mt-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input w-full max-w-xs rounded-2xl text-white mt-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input w-full max-w-xs rounded-2xl text-white mt-5"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="btn px-16 btn-primary mt-16 ml-10 w-fit"
          disabled={!canSignUp}
        >
          Create account
        </button>
        <a href="/login" className="ml-12 mt-2 underline">
          Already have an account? Sign in
        </a>
      </section>
    </main>
  );
};

export default RegisterPage;
