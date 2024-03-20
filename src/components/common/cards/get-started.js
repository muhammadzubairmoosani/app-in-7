import Image from "next/image";
import Link from "next/link";

export const CardGetStarted = ({ item }) => (
  <div
    className={`w-full max-w-[490px] p-8 rounded-lg overflow-hidden  border-2 border-light-gray`}
  >
    <div className="w-full flex items-center ">
      <Image
        className="mr-4"
        src={item.image}
        alt="Server Management"
        width={50}
        height={50}
      />
      <p className="text-xl max-w-40">{item.title}</p>
    </div>

    <h2 className="w-full text-lg mt-6 mb-14 text-dark">{item.subTitle}</h2>

    <Link
      href={title.Link}
      className="bg-transparent w-full text-dark text-xl font-semibold"
    >
      Get Started →
    </Link>
  </div>
);
