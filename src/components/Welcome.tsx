import Head from "next/head";
import Image from "next/image";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Welcome to Kazi Byte</title>
        <meta name="description" content="Welcome to My Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to Kazi Byte</h1>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Image
            alt="kazibyte logo"
            src="/public/favicon-32x32.png"
            className="h-6 mr-2"
            width={32}
            height={32}
          />
          <span className="text-gray-500">Powered by kazibyte</span>
        </a>
      </footer>
    </div>
  );
};

export default Welcome;
