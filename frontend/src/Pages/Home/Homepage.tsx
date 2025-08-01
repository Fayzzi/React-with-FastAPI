import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import Popup from "./Components/Popup";

const Homepage: React.FC = () => {
  return (
    <div>
      <HomepageHeader />
    </div>
  );
};

export default Homepage;

const HomepageHeader: React.FC = () => {
  const [active, setactive] = useState(false);
  const closeit = () => {
    setactive(false);
  };
  return (
    <div className="w-full flex items-center h-[70px] p-2 bg-black shadow border-0">
      <div className="flex w-full items-center justify-between">
        <div className="text-white text-xl font-semibold font-nunito">
          Mono-Gram
        </div>
        <IoMdLogOut
          onClick={() => setactive(true)}
          color="white"
          className="text-white select-none text-3xl cursor-pointer"
        />
      </div>
      {active && <Popup backactive={active} setBack={closeit} />}
    </div>
  );
};
