import React from "react";
import pic from "../../public/images/profile/pic.svg";
import search from "../../public/images/profile/search.svg";
import book from "../../public/images/profile/book.svg";
import gear from "../../public/images/profile/gear.svg";
import exit from "../../public/images/profile/exit.svg";

function Navbar() {
  return (
    <div className="fixed left-0 bottom-0 w-[5vw] h-screen ">
      <div className="flex flex-col items-center bg-[#1e214d] h-screen rounded-r-[60px]">

        <div className="mt-5">
          <div className="my-7 w-10">
            <img src={pic.src} alt="img" />
          </div>
          <div className="my-7 w-8">
            <img src={search.src} alt="img" />
          </div>
          <div className="my-7 w-8">
            <img src={book.src} alt="img" />
          </div>
        </div>

        <div className="mt-auto mb-5">
          <div className="my-7 w-8">
            <img src={gear.src} alt="img" />
          </div>
          <div className="my-7 w-8">
            <img src={exit.src} alt="img" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
