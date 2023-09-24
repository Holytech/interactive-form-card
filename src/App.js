import React, { useState } from "react";
import "./App.css";
// import card_line from "card_line.png"

const App = () => {
  const [cvv, setCvv] = useState("000");
  const [cardname, setCardname] = useState("JANE APPLESEED");
  return (
    <div className="w-full flex sm:flex-col h-[100vh]">
      <div className="lg:w-1/3 md:w-1/3 w-full lg:h-screen md:h-screen h-[400px] bg-gradient-to-br from-[#21092F] via-[#5d1361] to-[#21092F] absolute top-0 left-0 flex flex-col-reverse md:flex-col -z-20">
        {/* Front view of card */}
        <div className="bg-gradient-to-br from-[#6348FE] from-[10%] via-[#D53AFF] to-[#610595] h-[250px] w-[450px] rounded-xl px-10 py-8 relative left-4 top-10 md:top-32 md:left-36">
          <div className="w-full flex items-center gap-7">
            <div className="bg-white h-[50px] w-[50px] rounded-full"></div>
            <div className="border border-white h-[30px] w-[30px] rounded-full"></div>
          </div>
          <div className="flex flex-col w-full mt-[50px] text-white text-base md:text-2xl">
            <div className="w-full flex flex-row justify-between">
              <p className="tracking-widest">0000</p>
              <p className="tracking-widest">0000</p>
              <p className="tracking-widest">0000</p>
              <p className="tracking-widest">0000</p>
            </div>
          </div>
          <div className="flex flex-row mt-4 items-center justify-between">
            <p className="text-white text-sm">{cardname}</p>
            <p className="text-white text-sm">00/00</p>
          </div>
        </div>
        {/* Back view oof card */}
        <div className="bg-[#D2D3D9] h-[250px] w-[450px] rounded-xl py-8 ml-28 relative top-32 -z-10 -left-4 md:top-36 lg:left-48 md:left-36">
          <div className="bg-[#2F2F2F] w-ful h-[55px]"></div>
          <div className="w-3/4 bg-gray-400 mx-auto flex flex-col items-end justify-center rounded-md h-[40px] mt-7">
            <p className="text-gray-200 text-sm pr-2 tracking-widest">{cvv}</p>
          </div>
          <img
            className="w-2/4 mx-auto mt-7"
            src="card_line.png"
            alt="card line"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 md:2/3 h-screen"></div>
    </div>
  );
};

export default App;
