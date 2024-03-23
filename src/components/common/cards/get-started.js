import Image from "next/image";
import Link from "next/link";

export const CardGetStarted = ({ item }) => (
  <div
    className={`w-full  p-4 rounded-lg overflow-hidden  border-2 border-light-gray flex flex-col gap-5`}
  >
    <div className="w-full flex items-center ">
      <Image
        className="mr-4"
        src={item.image}
        alt="Server Management"
        width={36}
        height={36}
      />
      <p className="max-w-[190px]">{item.title}</p>
    </div>

    <h2 className="w-full text-dark dark:text-light-gray">{item.subTitle}</h2>

    <Link
      href={item.link}
      className="bg-transparent w-full text-dark dark:text-light-gray"
    >
      Get Started →
    </Link>
  </div>
);
