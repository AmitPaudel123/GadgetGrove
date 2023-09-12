import React, { useState } from "react";
import Airphone from "../assets/Airphone.jpg";
import { tablets } from "../data/Data";
import { smartphones } from "../data/Data";
import { mobiles } from "../data/Data";
import { accessories } from "../data/Data";
import { games } from "../data/Data";
import { computers } from "../data/Data";

const SmartPhone = () => {
  const [lists, setLists] = useState(smartphones);

  return (
    <div name="smartPhone" className=" flex justify-center py-4">
      {/* container */}
      <div className=" w-full md:w-10/12  bg-gray-100 py-5 px-10">
        {/* top */}
        <div className=" grid grid-cols-2 gap-4 md:gap-1 md:flex justify-between text-gray-400  border-b-2 pb-2 ">
          <button
            onClick={() => setLists(smartphones)}
            className="px-2 md:text-xl md:hover:text-white/80 hover:text-orange-500 md:hover:bg-gray-600 md:hover:rounded-full"
          >
            {" "}
            Smartphones
          </button>
          <button
            onClick={() => setLists(tablets)}
            className="px-2 md:text-xl md:hover:text-white/80 hover:text-orange-500 md:hover:bg-gray-600 md:hover:rounded-full"
          >
            Tablets
          </button>
          <button
            onClick={() => setLists(games)}
            className="px-2 md:text-xl md:hover:text-white/80 hover:text-orange-500 md:hover:bg-gray-600 md:hover:rounded-full"
          >
            Game Box
          </button>
          <button
            onClick={() => setLists(accessories)}
            className="px-2 md:text-xl md:hover:text-white/80 hover:text-orange-500 md:hover:bg-gray-600 md:hover:rounded-full"
          >
            Accessories
          </button>
          <button
            onClick={() => setLists(mobiles)}
            className="px-2 md:text-xl md:hover:text-white/80 hover:text-orange-500 md:hover:bg-gray-600 md:hover:rounded-full"
          >
            Mobiles
          </button>
          <button
            onClick={() => setLists(computers)}
            className="px-2 md:text-xl md:hover:text-white/80 hover:text-orange-500 md:hover:bg-gray-600 md:hover:rounded-full"
          >
            Computers
          </button>
        </div>
        {/* down */}
        <div className=" flex justify-between py-4  ">
          {/* left */}
          <div className="  w-full md:w-7/12 justify-center">
            <div className=" flex-col gap-4 grid  grid-cols-1 md:grid-cols-2 ">
              {lists.map((smartphone, index) => (
                <div
                  key={index}
                  className="  bg-white  flex flex-col border-2  border-gray-100  hover:border-gray-300 rounded-xl items-center "
                >
                  <div className=" flex flex-col items-center gap-2  py-6">
                    <img
                      className=" cursor-pointer"
                      src={smartphone.image}
                      alt=""
                    />
                    <p className=" text-1xl text-gray-400">{smartphone.name}</p>
                    <p className=" text-gray-600 text-2xl cursor-pointer hover:text-orange-300">
                      {smartphone.model}
                    </p>
                    <p className="hover:text-orange-300 cursor-pointer">
                      {smartphone.desc}
                    </p>
                    <p className=" text-2xl text-orange-400">
                      {smartphone.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className=" hidden md:flex w-full md:w-3/12 bg-white px-4 py-4 rounded-md border-gray-100 hover:border-orange-400 border-2  h-max">
            <div className=" px-4 py-4 flex justify-center flex-col items-center gap-4 ">
              <img className="  h-80  cursor-pointer " src={Airphone} alt="" />
              <p className=" text-sm text-gray-400">Headphones</p>
              <h1 className=" text-2xl text-gray-600">Beats Solo</h1>
              <h1 className=" text-2xl text-gray-600">HD</h1>
              <p className=" text-3xl text-orange-300">$5,759.68</p>
              <button className=" w-full rounded-full bg-orange-700 px-6 py-4  text-xl  text-white hover:bg-orange-400 hover:text-gray-200">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPhone;
