import Image from "next/image";
import { CardChooseALocation, CardNormal, CustomButton } from "../common";
import items from "../../lib/data.json";

export const Careers = () => {
  return (
    <div className="bg-light-gray min-h-screen py-[200px]">
      <div className="max-w-[1340px] mx-auto my-0 min-h-screen flex flex-col justify-around">
        <div className="flex gap-6 justify-center items-center">
          <input
            id={"name"}
            name={"name"}
            placeholder={"Search by Keyword"}
            type="text"
            className={`rounded-md p-3 focus:outline-none w-full`}
          />

          <CustomButton className={"w-[58px] h-[58px] rounded-[50%]"}>
            <Image src="magnify.svg" alt="Magnify" width={26} height={26} />
          </CustomButton>
        </div>

        <div className="text-center mt-[120px]">
          <h1 className="text-4xl mb-12 font-semibold text-dark dark:text-white">
            Chooose a Location
          </h1>
          <div className="flex justify-between">
            <CardChooseALocation items={items.careers.locations} />
          </div>
        </div>

        <div className="text-center mt-[120px]">
          <h1 className="text-4xl mb-12 font-semibold text-dark dark:text-white">
            Three reasons to join Appin7
          </h1>
          <div className="flex justify-between">
            <CardNormal items={items.careers.reasons} />
          </div>
        </div>

        <div className="text-center mt-[120px]">
          <h1 className="text-4xl mb-12 font-semibold text-dark dark:text-white">
            What our team mates are saying
          </h1>
          <div className="flex justify-between">
            <CardNormal items={items.careers.team} />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[120px]">
          <h1 className="text-4xl font-semibold text-dark dark:text-white">
            We would to love to meet you
          </h1>

          <p className="text-gray dark:text-white  text-2xl my-12">
            Browse our open Jobs and apply
          </p>

          <CustomButton className="flex items-center py-3 px-5">
            See open positions
            <Image
              className="ml-2"
              src="/right-arrow.svg"
              alt="Arrow"
              width={15}
              height={10}
            />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
