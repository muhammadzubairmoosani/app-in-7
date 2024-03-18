import Image from "next/image";
import { CustomButton } from "../buttons";
import { Heading } from "../heading";

export const CardLetsChoosePlan = ({ item }) => (
  <div className="bg-white max-w-[628px] border-[1px] border-gray dark:bg-dark rounded-lg shadow-md overflow-hidden flex flex-col p-[20px] md:p-[50px]">
    <h2 className="text-xl font-medium text-dark dark:text-light-gray mb-2">
      {item.title}
    </h2>

    <p className="text-dark dark:text-light-gray md:text-xl mt-4 mb-6">
      {item.subTitle}
    </p>

    <h1 className="text-primary text-2xl md:text-4xl">{item.price}</h1>

    <div className="mt-12">
      {item.list.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <dev className="flex items-center mr-2">
            <Image
              className="mr-3 relative"
              src="/check.svg"
              alt="check"
              width={21}
              height={19}
              priority
            />

            <span className="text-gray-700 text-dark dark:text-light-gray mx:text-xl">
              {item}
            </span>
          </dev>
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center">
      <CustomButton className="md:w-[313px]">Get Started</CustomButton>
    </div>
  </div>
);
