import React, { useEffect, useState } from "react";
interface PopupProps {
  backactive: boolean;
  setBack: () => void;
}
const Popup: React.FC<PopupProps> = ({ backactive, setBack }) => {
  const [isActive, setisActive] = useState<boolean>(false);
  useEffect(() => {
    if (backactive) {
      setisActive(true);
    }
  }, [backactive]);

  const handleClosePop = () => {
    setisActive(false);
    setTimeout(() => {
      setBack();
    }, 300);
  };
  return (
    <div className="fixed  flex-col  top-0 right-0 w-full min-h-screen bg-black flex items-center justify-center">
      <div
        className={`${
          isActive
            ? "translate-x-0 opacity-100"
            : " translate-x-full opacity-0 "
        } w-[45vw] 800px:w-[33vw] min-h-screen px-6 py-6 bg-white flex flex-col duration-300 ease-in-out justify-between`}
      >
        {" "}
        <text
          className="text-black text-2xl cursor-pointer "
          onClick={handleClosePop}
        >
          {" "}
          Lets close now
        </text>
      </div>
    </div>
  );
};

export default Popup;
