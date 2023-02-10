import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-dashboard.png";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage(null);
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Please provide a valid email address");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="container mx-auto w-1/2">
      <div className="mx-72 my-11">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="text-4xl text-center text-gray font-light">
          We are launching{" "}
          <span className="text-very-dark-blue font-bold">soon!</span>
        </h1>
        <p className="text-very-dark-blue text-center mt-4">
          Subscribe and get notified
        </p>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/4">
          <input
            className="rounded-3xl w-full mt-6 ml-24 w-80 border-pale-blue placeholder-pale-blue placeholder:text-sm"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="basis-1/4">
          <button
            className="bg-blue text-white rounded-3xl w-36 h-10 ml-28 mt-6"
            onClick={emailValidation}
          >
            Notify Me
          </button>
        </div>
      </div>
      <p className="text-light-red text-xs italic ml-28 mt-4">{message}</p>
      <div>
        <img className="mt-11" src={illustration} alt="image" />
      </div>
      <div className="flex flex-row w-20 mt-14 ml-72">
        <div className="basis-1/3">
          <FaFacebookF className="text-blue" />
        </div>
        <div className="basis-1/3">
          <FaTwitter className="text-blue" />
        </div>
        <div className="basis-1/3">
          <FaInstagram className="text-blue" />
        </div>
      </div>
      <footer className="text-xs mt-7 text-center text-gray">
        © Copyright Ping. All rights reserved.
      </footer>
      <div className="mt-8">
        <p class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/muhammadiqbalid83">Muhammad Iqbal</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
