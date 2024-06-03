import Link from "next/link";
import navigation from "@/config/NavigationData";

const Header = () => {
  return (
    <div>
      <header>
        <div className="max-w-screen-xl  mx-auto px-3 md:px-8"></div>
        <nav className=" shadow-sm shadow-gray-400/10 border-b border-gray-700">
          <div className="flex items-center justify-center max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-5 lg:gap-x-8">
              {navigation.map((item, idx) => (
                <div
                  key={idx}
                  className="text-gray-300 hover:text-gray-400 p-2"
                >
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
