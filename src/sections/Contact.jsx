import { IoMdSend } from "react-icons/io";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useState } from "react";
export default function Contact() {
  const [btnMove, setBtnMove] = useState(false);

  const toggleBtn = () => setBtnMove(!btnMove);

  return (
    <>
      <div id="contact" className="flex my-5 lg:py-4">
        <h2 className="text-green text-2xl font-medium">Contact</h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-20">
        <div className="lg:col-span-2">
          <div className="border border-[#1f2129] rounded-lg p-6 md:p-8">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-semibold"
                >
                  Name :
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full md:w-[70%] p-2 border border-[#1f2129af] bg-slate-black outline-none text-base rounded-md  focus:border-[#16f2b3]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-semibold"
                >
                  Email :
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full md:w-[70%] p-2 border border-[#1f2129af] bg-slate-black outline-none text-base rounded-md  focus:border-[#16f2b3]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-semibold"
                >
                  Message :
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="w-full md:w-[70%] p-2 border border-[#1f2129af] bg-slate-black outline-none text-base rounded-md  focus:border-[#16f2b3]"
                ></textarea>
              </div>
              <div
                onClick={toggleBtn}
                // onMouseEnter={toggleBtn}
                // onMouseLeave={toggleBtn}
                className="cursor-pointer relative h-10 w-24 overflow-hidden text-green text-lg font-medium rounded-3xl bg-gradient-to-r from-gray-900 to-slate-black transition-all duration-300 hover:bg-gradient-to-t hover:from-gray-800 to bg-gray-900"
              >
                <p
                  className={
                    btnMove
                      ? `absolute top-[50%] -right-[100%] -translate-x-[50%] -translate-y-[50%]`
                      : `absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`
                  }
                >
                  Send
                </p>
                <div
                  className={
                    btnMove
                      ? `absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-300`
                      : `absolute top-[50%] -left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-300`
                  }
                >
                  <IoMdSend size={25} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-5">
          <h4 className="text-shade-green text-2xl font-semibold">
            Connect with me
          </h4>
          <div className="flex gap-8 items-center">
            <a href="https://github.com/Harishgopal17">
              <AiFillGithub
                size={45}
                className="bg-black text-white rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.1]"
              />
            </a>
            <a href="https://www.linkedin.com/in/harish-b-g-5b8060265/">
              <AiFillLinkedin
                size={40}
                className="bg-white text-linkedin-color rounded-md cursor-pointer transition-all duration-300 hover:scale-[1.1]"
              />
            </a>
            <a href="">
              <AiOutlineInstagram
                size={40}
                className="bg-[#f0466f] text-white rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.1]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
