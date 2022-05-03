import Particles from "react-tsparticles";
import {particlesConfig} from '../data.js';

export default function Landing() {
    return (
      <div className="relative place-items-center">
        <Particles height="100vh" width='100vw' canvasClassName="-z-1 relative top-0 left-0 bottom-0 right-0 p-0 m-0" options={particlesConfig} />
        <div className="absolute z-30 h-screen grid place-items-center top-0 left-0 text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl" id="des">
            <span className="block">
              David Shen
            </span>
            <span className="block text-blue-400">
              Programmer. Problem-solver. Math-enthusiast.
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <a id="buttonAbout" href="#about" className="py-4 px-6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
