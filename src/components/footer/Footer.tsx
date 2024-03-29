import React from "react";
import { SocialMediaIcons } from "../../config/SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@/config/SocialMediaIcons";

const Footer: React.FC = () => {
  return (
    <footer className="static py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center justify-center">
          <div className="mr-6">
            <Link href={HomeIcon?.link as unknown as string}>
              <Image
                width={30}
                height={30}
                src={HomeIcon?.icon as unknown as string} // Type assertion here
                alt="Logo"
              />
            </Link>
          </div>
          <p className="text-gray-400">
            © All rights reserved by{" "}
            <Link href={"https://github.com/kazibyte"}>
              <span className="text-blue-500">@kazibyte</span>
            </Link>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className=" flex gap-5 m-auto mt-4 md:m-0">
          {SocialMediaIcons.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <Image
                width={24}
                height={24}
                className=""
                src={item.icon as unknown as string} // Type assertion here
                alt={`Icon ${index + 1}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
