import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import qrcode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-[#D6E1F0] flex justify-center">
      <div className="m-auto w-[320px] h-[497px] rounded-xl bg-[#fff] px-4 py-4 flex flex-col justify-between">
        <img
          src={qrcode}
          alt="qrcode"
          className="block w-[288px] h-[288px] rounded-lg"
        />

        <div
          className="text-center  mb-2  w-full flex flex-col justify-center"
          id="main-container"
        >
          <h1 className="font-bold text-[23px] text-[#0c1d2e]  py-3">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[16px]  text-[#7a9baa]  font-bold  px-1">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
