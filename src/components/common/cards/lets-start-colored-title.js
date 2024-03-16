import Image from "next/image";
import Link from "next/link";

export const CardLetsStartColoredtitle = () => {
  return (
    <div className="w-full max-w-[408px] rounded-lg overflow-hidden  border-[1px] border-gray flex flex-col items-center justify-center">
      <div className="relative w-full h-48">
        <Image
          className="p-4 w-full absolute inset-0 object-cover rounded-lg"
          src="/solutions.svg"
          alt="Solutions"
          width={100}
          height={100}
        />
      </div>

      <div className="py-10 px-5 mt-7">
        <h2 className="w-56 text-3xl font-normal text-primary mb-2">
          Generate a Business Name
        </h2>

        <p className="text-black text-2xl mt-7 mb-12">
          Find a name that fits your personality and business idea.
        </p>

        <Link
          href="#"
          className="bg-transparent w-full text-back text-xl font-medium"
        >
          Lets Start →
        </Link>
      </div>
    </div>
  );
};
