import React from "react";
import FacebookIcon from "@/icons/FacebookIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import XIcon from "@/icons/XIcon";
import TelegramIcons from "@/icons/TelegramIcons";
import Link from "next/link";

const socialLinks = [
  { href: "#", ariaLabel: "Facebook", Icon: FacebookIcon },
  { href: "#", ariaLabel: "X", Icon: XIcon },
  { href: "#", ariaLabel: "Instagram", Icon: InstagramIcon },
  { href: "#", ariaLabel: "LinkedIn", Icon: LinkedInIcon },
  { href: "#", ariaLabel: "GitHub", Icon: GitHubIcon },
  { href: "#", ariaLabel: "Telegram", Icon: TelegramIcons },
];

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-300 py-4">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/assets/images/zobaidulkazi-logos.jpg"
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
        </div>
        <div className="text-center mb-4 md:mb-0">
          &copy; 2024 Your Company. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map(({ href, ariaLabel, Icon }) => (
            <Link
              key={ariaLabel}
              href={href}
              aria-label={ariaLabel}
              className="text-gray-300 hover:text-gray-400"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
