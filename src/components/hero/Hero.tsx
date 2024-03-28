import Image from "next/image";
import React from "react";
import HeroImages from "../../assets/images/zobaidulkazi.png";
import ZKBG from "../../assets/images/zobaidulkazi-bg-1.svg";

function Hero() {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl text-center font-bold leading-tight text-orange-400 sm:text-4xl lg:text-7xl">
                Hey 👋 I am <br className="block sm:hidden" />
                <span className="text-blue-500"> Zobaidul</span>{" "}
                <span className="text-purple-600">Kazi</span>
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                As a full stack developer, I am passionate about creating web
                apps that are scalable and user-friendly. I am a quick learner
                and love to learn new technologies.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="mailto:zobaidulkazi64.official@gmail.com"
                  title='Click to subscribe to the "Zobaidul Kazi" email list'
                  className="transition-all text-3xl duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Email
                </a>
              </p>
            </div>

            <div className="relative">
              <Image
                width={1000}
                height={1000}
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src={ZKBG}
                alt=""
              />

              <Image
                width={1000}
                height={1000}
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={HeroImages}
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="border-b border-gray-200 bottom-5 " />
      </section>
    </div>
  );
}

export default Hero;
