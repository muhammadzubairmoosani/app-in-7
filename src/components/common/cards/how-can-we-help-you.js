import Image from "next/image";
import Link from "next/link";

export const CardHowCanWeHelpYou = () => {
  return (
    <div className="w-full max-w-[408px] rounded-lg overflow-hidden  border-2 border-light-gray flex flex-col items-center justify-center">
      <div className="relative w-full h-48">
        <Image
          className="p-4 absolute inset-0 object-cover h-fit w-fit rounded-lg"
          src="/card-start.svg"
          alt="Rocket launching from a computer screen"
          width={100}
          height={100}
        />
      </div>

      <div className="py-10 px-5">
        <h2 className="w-full text-xl font-bold text-dark mb-2">Start</h2>
        <ul className="text-gray mt-4 mb-8 ml-8 list-disc">
          <li>Lorem ipsum dolor sit amet consectetur. Erat lorem mi</li>
          <li>vel eget in velit leo cursus arcu. Nam nunc duis ultrices</li>
        </ul>

        <Link href="#" className="bg-transparent  w-full text-primary">
          Show all
        </Link>
      </div>
    </div>
  );
};
