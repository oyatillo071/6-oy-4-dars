import React from "react";
import img from '../../assets/images/icon.svg';

function Header() {
  return (
    <>
      <header className="container p-3 m-[auto] bg-[#5361E4] flex items-center justify-between w-full">
        <img src={img} alt="img" />
        <ul className="flex align-center gap-5">
          <li>
            <a
              className="text-white hover:border-b-2 p-1 font-medium  text-base decoration-none"
              href="#">
              Vakansiyalar
            </a>
          </li>
          <li>
            <a
              className="text-white hover:border-b-2 p-1 font-medium  text-base"
              href="#">
              Kandidatlar
            </a>
          </li>
          <li>
            <a
              className="text-white hover:border-b-2 p-1 font-medium  text-base"
              href="#">
              Kompaniyalar
            </a>
          </li>
          <li>
            <a
              className="text-white hover:border-b-2 p-1 font-medium  text-base"
              href="#">
              Xizmatlar
            </a>
          </li>
          <li>
            <a
              className="text-white hover:border-b-2 p-1 font-medium  text-base"
              href="#">
              Talim
            </a>
          </li>
        </ul>
        <div className="flex align-center gap-5">
          <select
            id=""
            className="bg-transparent p-2 text-white align-center flex border-none focus:outline-none">
            <option className="bg-sky-600" value="uzb">
              O'zb
            </option>
            <option className="bg-sky-600" value="rus">
              Rus
            </option>
          </select>
          <button className="rounded-xl pt-2 pb-2 pr-3 pl-3  border-none bg-white text-[#5361E4] ">
            Boshlash
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
