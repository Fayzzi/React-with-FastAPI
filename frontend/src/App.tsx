import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="min-w-md shadow p-3 rounded-md h-[300px] flex flex-col items-start">
          <div className="p-2  items-start flex flex-col gap-2">
            <label className="text-sm font-medium">UserName</label>
            <input
              className="border border-gray-300 focus:border-amber-300 focus:outline-none appearance-none active:ring-amber-300 w-full p-2 shadow-md rounded-md"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
