import Image from "next/image";
import Link from "next/link";

export const CardLetsStart = () => {
  return (
    <div className="bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p- px-8 py-12 max-w-[306px] max-h-[449px]">
      <div className="relative w-full h-48">
        <Image
          className="absolute inset-0 object-cover rounded-lg my-0 mx-auto"
          src="/Launch-with-Tech-Excellence.svg"
          alt="Rocket launching from a computer screen"
          width={151}
          height={113}
        />
      </div>
      <h2 className="w-full text-base font-semibold text-gray-800 mb-2">
        Launch with Tech Excellence
      </h2>
      <p className="text-gray-800 text-[14px]">
        Our blend of creative design and tech innovation means you hit the
        market running (or flying)’
      </p>
      <div className="w-full mt-4 py-2">
        <Link
          href="/blog"
          className="bg-transparent text-[14px] text-black rounded-md"
        >
          Lets Start →
        </Link>
      </div>
    </div>
  );
};
