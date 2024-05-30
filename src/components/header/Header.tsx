import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "../themes/ThemeSwitcher";

const Header = () => {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">zobaidulkazi</span>
              <Image
                width={100}
                height={100}
                className="h-8 w-auto rounded-sm"
                src="https://github.com/zobkazi/zobaidulkazi/blob/main/public/assets/images/zobaidulkazi-logos.jpg?raw=true"
                alt="zobaidulkazi-logos.jpg"
              />
            </Link>
          </div>
          <ThemeSwitcher />
        </nav>
      </header>
    </div>
  );
};

export default Header;
