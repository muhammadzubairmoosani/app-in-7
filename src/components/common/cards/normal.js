import Image from "next/image";
import { Heading } from "../heading";

export const CardNormal = ({ items = [], className }) =>
  items.map((item) => (
    <div
      key={item.title}
      className={`w-full max-w-[430px] overflow-hidden shadow-sm p-6 bg-white dark:bg-dark text-start ${className}`}
    >
      <div className="flex justify-center">
        <Image
          className="text-center"
          src={item.image}
          alt="Rocket launching from a computer screen"
          width={150}
          height={150}
        />
      </div>
      <h2 className="text-xl font-semibold text-dark dark:text-light-gray my-4">
        {item.title}
      </h2>
      <p className="text-gray  dark:text-light-gray text-xl">{item.subTitle}</p>
    </div>
  ));
