import data from "@/lib/data.json";
import {
  CardLetsChoosePlan,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";
import Image from "next/image";

export const Pricing = () => {
  return (
    <div>
      <div className="p-4 md:p-0 flex justify-between items-center h-auto mb-8">
        <div className="hidden md:block">
          <Image
            src="/curcle-dollar.svg"
            className="w-full"
            alt="dollar"
            width={100}
            height={100}
          />
        </div>

        <div className="text-center flex flex-col justify-evenly items-center ">
          <Heading className="md:text-6xl">Let&apos;s Choose plan</Heading>
          <Paragraph className="mt-6 mb-12 text-lg md:text-xl">
            Explore the pricing plan and choose the plan that is right for your
            business.
          </Paragraph>

          <CustomButton className="bg-gradient-to-r from-customRed to-customIndigo ">
            Explore
          </CustomButton>
        </div>

        <div className="self-end hidden md:block">
          <Image
            src="/cash-in-hand.svg"
            alt="cash in hand"
            className="w-full"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="max-w-[1277px] mx-auto my-0">
        <div>
          <div className="flex justify-evenly flex-wrap md:flex-nowrap gap-8">
            <CardLetsChoosePlan item={data.plans.pro} />
            <CardLetsChoosePlan item={data.plans.plus} />
          </div>
        </div>

        <div className="text-center p-4 border-[1px] border-gray rounded-lg shadow-md overflow-hidden mt-10 h-[351px] flex flex-col justify-evenly items-center">
          <div className="text-center">
            <p className="text-primary text-xl font-medium mb-6">Customize</p>
            <Heading>Have Any Specific Requirement?</Heading>
          </div>
          <Paragraph className="md:text-xl font-medium">
            Any specific requirements related to technology, discoverability and
            visibility.
          </Paragraph>
          <CustomButton>Lets Talk!</CustomButton>
        </div>
      </div>
    </div>
  );
};
