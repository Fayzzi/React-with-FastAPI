import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Auth/Signup/Signup";
import Homepage from "./Pages/Home/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
