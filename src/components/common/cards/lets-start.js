import Image from "next/image";
import Link from "next/link";

export const CardLetsStart = ({ item }) => {
  return (
    <div className="border-2 border-light-gray rounded-lg overflow-hidden flex flex-col items-center justify-center p- px-8 py-8 max-w-[306px] max-h-[449px]">
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
        {item.title}
      </h2>
      <p className="text-gray-800 text-[14px]">{item.subTitle}</p>
      <div className="w-full mt-4 py-2">
        <Link
          href={item.link}
          className="bg-transparent text-[14px] text-black dark:text-light-gray rounded-md"
        >
          Lets Start →
        </Link>
      </div>
    </div>
  );
};
