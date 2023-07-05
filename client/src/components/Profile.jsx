import React from "react";
import {FcGlobe} from "react-icons/fc"
import {FaWhatsapp} from "react-icons/fa"
import {BsDiscord} from "react-icons/bs"
const Profile = () => {
  return (
    <div className="items-center align-center justify-center h-screen mx-20 mt-10">
      <h1 className="text-center font-bold text-5xl">Welcome to Dev Station</h1>
      <br />
      <p className="text-center text-3xl">Join our community of developers</p>
      <div className="flex flex-row gap-5 px-3 py-6 justify-center">
        <a
          href="https://discord.io/devstation"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <button type="button" className="bg-purple-400 flex flex-row items-center gap-3 text-white  text-2xl p-2 border rounded-xl"><BsDiscord />Discord</button>
        </a>
        <a
          href="https://chat.whatsapp.com/H2F5iAyMcvp2kqScdiNn0i
          "
          target="_blank"
          rel=" noopener noreferrer"
        >
          <button type="button" className="
          bg-green-400 flex flex-row items-center gap-3 text-white  text-3xl p-2 border rounded-xl
          "><FaWhatsapp />WhatsApp</button>
        </a>
        <a
          href="https://devstations.tech"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <button type="button"
          className="bg-gray-400 flex flex-row items-center gap-3 text-white  text-3xl p-2 border rounded-xl"
          ><FcGlobe />Website</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
