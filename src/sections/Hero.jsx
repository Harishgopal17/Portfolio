import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import { resume } from "../constants/index";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <header className="w-full flex items-center justify-center min-h-screen">
        <div className="w-full pt-[100px] grid grid-cols-1 gap-y-8 items-start lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center flex-col">
            <p className="text-green text-[18px] mb-2 lg:mb-0 lg:text-[32px] font-medium leading-none">
              Hey there!, I'm-
            </p>
            <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-none mb-3">
              Harish :&#x29;
            </h1>
            <p className="text-slate-gray text-[22px] lg:text-[36px] font-medium mb-8">
              <ReactTyped
                strings={[
                  `A self-taught <span class=text-green>Web Developer</span>`,
                ]}
                typeSpeed={60}
              />
            </p>
            <div className="flex gap-7 mb-8 ">
              <a
                href="https://github.com/Harishgopal17"
                target="_blank"
                className="button-card hover:text-black hover:bg-white"
              >
                <AiFillGithub size={25} />
                <span className="max-sm:hidden">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harish-b-g-5b8060265/"
                target="_blank"
                className="button-card hover:text-linkedin-color hover:bg-white"
              >
                <AiFillLinkedin size={25} />
                <span className="max-sm:hidden">LinkedIn</span>
              </a>
              <a
                href="#contact"
                className="button-card hover:text-email-color hover:bg-white"
              >
                <BiLogoGmail size={25} />
                <span className="max-sm:hidden">Mail</span>
              </a>
            </div>
            <div className="flex-1 flex items-center">
              <a
                href={resume.fileURL}
                target="blank"
                className="flex justify-center items-center px-5 py-2 gap-1 text-green text-lg font-medium rounded-3xl bg-gradient-to-r from-gray-900 to-slate-black transition-all duration-300 hover:gap-3"
                download
              >
                <span>Resume</span>
                <AiOutlineDownload size={25} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center ">
            <div className="border border-[#1b2c68a0] rounded-lg bg-gradient-to-r to-[#0a0d37]">
              <div className="px-4 py-5 lg:px-8">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff605c]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#ffbd44]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#00ca4e]"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-2 border-[#1b2c68a0] px-4 py-5 lg:px-8">
                <code className="font-mono text-sm lg:text-base">
                  <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 text-white">coder</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">Harish</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-white">skills:</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className="text-amber-300">HTML</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">CSS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Java Script</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">React Js</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Node Js</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Tailwind CSS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Bootstrap</span>
                    <span className="text-gray-400">{"'],"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      hardWorker:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      quickLearner:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      problemSolver:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                      hireable:
                    </span>
                    <span className="text-orange-400">function</span>
                    <span className="text-gray-400">{"() {"}</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                      return
                    </span>
                    <span className="text-gray-400">{`(`}</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">hardWorker</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">problemSolver</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">skills.length</span>
                    <span className="mr-2 text-amber-300">&gt;=</span>
                    <span className="text-orange-400">5</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">{`};`}</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
