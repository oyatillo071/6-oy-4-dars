import { useState } from "react";
import "./App.css";

import earth from "./assets/images/earth.svg";
import insta from "./assets/images/insta.svg";
import facebook from "./assets/images/face.svg";
import github from "./assets/images/github.svg";
import tg from "./assets/images/tg.svg";

import downImg from "./assets/images/default-img.png";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto max-w-4xl p-9 mt-16 bg-white rounded-3xl shadow-md">
        <h2 className="text-[#2A2941] text-3xl mb-4 font-medium">
          Kompaniya ma'lumotlari
        </h2>
        <h3 className="text-base text-[#B3B3B3] font-[450]">
          Kompaniya haqidagi ma'lumotlarni kiriting
        </h3>
        <form>
          <div className="flex mt-10 mb-5 gap-5 justif-center items-center">
            <img src={downImg} alt="img" className="rounded-[50%] " />
            <label
              htmlFor="img-input"
              className="text-[#5361E4] font-medium text-4">
              Yuklash
            </label>
            <input type="file" id="img-input" className="hidden" />
          </div>
          <div>
            <label
              htmlFor="company-name"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Kompaniya nomi <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company-name"
              placeholder="Kompaniya nomi"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="Telefon raqami"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Telefon raqami <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="Telefon raqami"
              placeholder="UZ +998"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="link-button">
              Linklar <span className="text-red-600">*</span>
            </label>
            <div id="link-button" className="flex gap-7 mt-5">
              <button className="border-solid border-[1px] rounded-lg p-3">
                <img src={earth} alt="earth img" />
              </button>
              <button className="border-solid border-[1px] rounded-lg p-3">
                <img src={insta} alt="earth img" />
              </button>
              <button className="border-solid border-[1px] rounded-lg p-3">
                <img src={tg} alt="earth img" />
              </button>
              <button className="border-solid border-[1px] rounded-lg p-3">
                <img src={facebook} alt="earth img" />
              </button>
              <button className="border-solid border-[1px] rounded-lg p-3">
                <img src={github} alt="earth img" />
              </button>
            </div>
          </div>

          <div className="flex items-center w-full gap-5 mt-7">
            <div className="w-[48%] flex gap-4 flex-col">
              <label htmlFor="country">
                Davlat<span className="text-red-600">*</span>
              </label>
              <select
                id="country"
                className=" border-[1px] border-solid rounded-xl p-4">
                <option>Davlat</option>
                <option value="ozbekiston">O'zbekiston</option>
                <option value="rossiya">Rossiya</option>
              </select>
            </div>

            <div className="w-[48%] gap-4 flex flex-col">
              <label htmlFor="city">
                Shahar<span className="text-red-600">*</span>
              </label>
              <select
                id="city"
                className=" border-[1px] border-solid rounded-xl p-4">
                <option>Shahar</option>
                <option value="toshkent">Toshkent</option>
                <option value="fargona">Farg'ona</option>
                <option value="andijon">Andijon</option>
                <option value="samarqand">Samarqand</option>
              </select>
            </div>
          </div>

          <div className="mt-7">
            <label
              htmlFor="address"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Yashash joyi <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Joy"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="count-person"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Hodimlar soni <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              id="count-person"
              placeholder="Hodimlar soni"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="disc"
              className="mt-3 font-medium text-[16px] text-[#2A2941]">
              Izoh <span className="text-red-600">*</span>
            </label>
            <textarea
              id="disc"
              placeholder="Kompaniya haqida izoh qoldiring"
              className="border-solid mb-4 border-[1px] rounded-md h-[150px] min-h-20 max-h-52 p-4  w-full mt-2 border-gray-400"
            />
          </div>

          <div className="flex gap-5 justify-between mt-7">
            <button className="border-solid border-gray rounded-2xl pl-8 pr-8 pt-4 pb-4 bg-[#F8F8F8] text-[#C4C3C7] border-[1px]">
              ORTGA
            </button>
            <button className="bg-[#5361E4] pl-8 pr-8 pt-4 pb-4 border-none rounded-2xl text-white">
              Keyingisi
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
