import Image from "next/image";
import Link from "next/link";

export const CardHowCanWeHelpYou = ({ item }) => (
  <div className="w-full max-w-[408px] rounded-lg overflow-hidden border-2 border-gray dark:bg-dark flex flex-col items-center justify-center">
    <div className="w-full h-246">
      <Image
        className="mx-auto object-cover h-fit w-fit rounded-lg"
        src={item.image}
        alt="Rocket launching from a computer screen"
        width={100}
        height={100}
      />
    </div>

    <div className=" py-10 px-5">
      <h2 className="w-full text-xl font-bold text-dark dark:text-light-gray mb-2">
        {item.title}
      </h2>
      <ul className="text-gray dark:text-light-gray mt-4 mb-8 ml-8 list-disc">
        {item.list.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <Link href="#" className="bg-transparent  w-full text-primary">
        Show all
      </Link>
    </div>
  </div>
);
