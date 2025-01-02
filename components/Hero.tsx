import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: Grid
       *  Ensure black background with gradient is correctly applied
       */}
      <div
        className="h-screen w-full absolute top-0 left-0 flex items-center justify-center"
        style={{
          background: "rgb(4, 7, 29)", // solid blackish color
          backgroundColor:
            "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)", // gradient with black tones
          zIndex: -1, // Ensure the background is behind content
        }}
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white 
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-purple-300 max-w-80">
            BloomScroll
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  Updated text size and color
           */}
          <p className="text-purple text-center text-[40px] md:text-5xl lg:text-6xl">
            Reimagine Technology: Bloom👋 Empower Connection, Inspire Growth,
            Transform Lives
          </p>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Redefining social media for good
          </p>

          <a href="#about">
            <MagicButton
              title="Connect with us"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;