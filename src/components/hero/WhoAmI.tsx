import React from "react";
import Link from "next/link";

const WhoAmI = () => {
  return (
    <div>
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <span className="text-sm font-semibold text-indigo-600">
          Who am I?{" "}
        </span>
        <Link href="/about" className="font-semibold text-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default WhoAmI;
