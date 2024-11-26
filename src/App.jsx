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
  const [url, setUrl] = useState(null);
  const [fData, setFdata] = useState(null);
  console.log(fData);
  const [errors, setErrors] = useState({});
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(""); // To track which icon was clicked
  const [urls, setUrls] = useState([]);

  const handleIconClick = (iconName) => {
    setCurrentIcon(iconName);
    setShowModal(true); // Show modal when an icon is clicked
  };


  const handleModalClose = () => {
    setShowModal(false); // Close modal without saving
  };

  function validateForm(data) {
    const errors = {};

    if (!data.companyName || data.companyName.trim() === "") {
      errors.companyName = "Kompaniya nomini kiriting!";
    }
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Email manzili notogri!";
    }
    if (!data.phone || data.phone.trim() === "") {
      errors.phone = "Telefon raqamini kiriting!";
    }
    if (!data.country || data.country === "Davlat") {
      errors.country = "Davlatni tanlang!";
    }
    if (!data.city || data.city === "Shahar") {
      errors.city = "Shaharni tanlang!";
    }
    if (!data.address || data.address.trim() === "") {
      errors.address = "Manzilni kiriting!";
    }
    if (!data.countPerson || isNaN(data.countPerson) || data.countPerson <= 0) {
      errors.countPerson = "Hodimlar sonini togri kiriting!";
    }
    if (!data.disc || data.disc.trim() === "") {
      errors.disc = "Kompaniya haqida izoh qoldiring!";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = Object.fromEntries(formData.entries());

    const validationErrors = validateForm(result);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFdata(result);

      setCards((prev) => [...prev, { ...result, url }]);
      e.target.reset();
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-4xl p-9 mt-16 bg-white rounded-3xl shadow-md">
        <h2 className="text-[#2A2941] text-3xl mb-4 font-medium">
          Kompaniya malumotlari
        </h2>
        <h3 className="text-base text-[#B3B3B3] font-[450]">
          Kompaniya haqidagi malumotlarni kiriting
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="flex mt-10 mb-5 gap-5  items-center">
            <img src={downImg} alt="img" className="rounded-[50%]" />
            <label
              htmlFor="img-input"
              className="text-[#5361E4] font-medium text-4">
              Yuklash
            </label>
            <input
              type="file"
              id="img-input"
              className="hidden"
              onChange={(e) => {
                const img = e.target.files[0];
                if (img) {
                  const imgUrl = URL.createObjectURL(img);
                  setUrl(imgUrl);
                  setFdata((prev) => ({ ...prev, url: imgUrl }));
                }
              }}
            />
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
              name="companyName"
              placeholder="Kompaniya nomi"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
            {errors.companyName && (
              <p className="text-red-600">{errors.companyName}</p>
            )}
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
              name="email"
              placeholder="Email"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Telefon raqami <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="UZ +998"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          </div>

          <div className="mt-4">
            <label htmlFor="link-button">
              Linklar <span className="text-red-600">*</span>
            </label>
            <div id="link-button" className="flex gap-7 mt-5">
              <span className="border-solid border-[1px] rounded-lg p-3">
                <img src={earth} alt="earth img" />
              </span>
              <span className="border-solid border-[1px] rounded-lg p-3">
                <img src={insta} alt="instagram img" />
              </span>
              <span className="border-solid border-[1px] rounded-lg p-3">
                <img src={tg} alt="telegram img" />
              </span>
              <span className="border-solid border-[1px] rounded-lg p-3">
                <img src={facebook} alt="facebook img" />
              </span>
              <span className="border-solid border-[1px] rounded-lg p-3">
                <img src={github} alt="github img" />
              </span>
            </div>
          </div>

          <div className="flex items-center w-full gap-5 mt-7">
            <div className="w-[48%] flex gap-4 flex-col">
              <label htmlFor="country">
                Davlat<span className="text-red-600">*</span>
              </label>
              <select
                id="country"
                name="country"
                className="border-[1px] border-solid rounded-xl p-4">
                <option>Davlat</option>
                <option value="ozbekiston">Ozbekiston</option>
                <option value="rossiya">Rossiya</option>
              </select>
              {errors.country && (
                <p className="text-red-600">{errors.country}</p>
              )}
            </div>

            <div className="w-[48%] gap-4 flex flex-col">
              <label htmlFor="city">
                Shahar<span className="text-red-600">*</span>
              </label>
              <select
                id="city"
                name="city"
                className="border-[1px] border-solid rounded-xl p-4">
                <option>Shahar</option>
                <option value="toshkent">Toshkent</option>
                <option value="fargona">Fargona</option>
                <option value="andijon">Andijon</option>
                <option value="samarqand">Samarqand</option>
              </select>
              {errors.city && <p className="text-red-600">{errors.city}</p>}
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
              name="address"
              id="address"
              placeholder="Joy"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
            {errors.address && <p className="text-red-600">{errors.address}</p>}
          </div>

          <div>
            <label
              htmlFor="count-person"
              className="mt-3 font-medium text-[14px] text-[#2A2941]">
              Hodimlar soni <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="countPerson"
              id="count-person"
              placeholder="Hodimlar soni"
              className="border-solid mb-4 border-[1px] rounded-md p-2 w-full mt-2 border-gray-400"
            />
            {errors.countPerson && (
              <p className="text-red-600">{errors.countPerson}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="disc"
              className="mt-3 font-medium text-[16px] text-[#2A2941]">
              Izoh <span className="text-red-600">*</span>
            </label>
            <textarea
              id="disc"
              name="disc"
              placeholder="Kompaniya haqida izoh qoldiring"
              className="border-solid mb-4 border-[1px] rounded-md h-[150px] min-h-20 max-h-52 p-4 w-full mt-2 border-gray-400"
            />
            {errors.disc && <p className="text-red-600">{errors.disc}</p>}
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

        <div className="cards mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card p-5 shadow-md rounded-lg bg-gray-100">
              <img
                src={card.url || downImg}
                alt="Card"
                className="rounded-full"
              />
              <h3 className="font-bold text-xl">{card.companyName}</h3>
              <p>Email: {card.email}</p>
              <p>Telefon: {card.phone}</p>
              <p>Manzil: {card.address}</p>
              <p>Hodimlar soni: {card.countPerson}</p>
              <p>Izoh: {card.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
