import Image from "next/image";
import items from "../../lib/data.json";
import {
  CardChooseALocation,
  CardNormal,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const Careers = () => {
  return (
    <div className="bg-light-gray dark:bg-black min-h-screen py-[188px]">
      <div className="max-w-[1340px] mx-auto my-0 min-h-screen flex flex-col justify-around">
        <div className="grid grid-cols-12">
          <div className="col-span-10 px-4 py-2 flex items-center">
            <input
              id="name"
              name="name"
              placeholder="Search by Keyword"
              type="text"
              className="rounded-md p-2 focus:outline-none w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-light-gray" // Adjust styles as needed
            />
          </div>
          <div className="col-span-2 flex items-center w-full">
            <CustomButton className="flex justify-center rounded-full my-0 mx-auto md:w-full bg-blue-500 py-2 px-4 text-white font-medium hover:bg-blue-600 focus:outline-none">
              <Image src="magnify.svg" alt="Magnify" width={26} height={26} />
            </CustomButton>
          </div>
        </div>

        <div className="text-center mt-[60px] md:mt-[120px]">
          <Heading className="mb-12">Chooose a Location</Heading>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:justify-between">
            <CardChooseALocation items={items.careers.locations} />
          </div>
        </div>

        <div className="text-center mt-[60px] md:mt-[120px]">
          <Heading className="mb-12">Three reasons to join Appin7</Heading>
          <div className="flex justify-center flex-wrap md:flex-nowrap gap-4 md:justify-between">
            <CardNormal items={items.careers.reasons} />
          </div>
        </div>

        <div className="text-center mt-[60px] md:mt-[120px]">
          <Heading className="mb-12">What our team mates are saying</Heading>

          <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-4">
            <CardNormal items={items.careers.team} />
          </div>
        </div>

        <div className="flex flex-col items-center mt-[60px] md:mt-[120px]">
          <Heading>We would to love to meet you</Heading>

          <Paragraph className="text-gray my-10 md:text-2xl">
            Browse our open Jobs and apply
          </Paragraph>

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
