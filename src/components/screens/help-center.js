import Image from "next/image";
import {
  CardHorizontal,
  CardHowCanWeHelpYou,
  CardNormal,
  Container,
  Heading,
  Paragraph,
} from "../common";
import data from "@/lib/data.json";

export const HelpCenter = () => {
  return (
    <Container>
      <Heading className="text-center md:text-6xl">How can we help you</Heading>

      <div className="grid grid-cols-12 mt-6 mb-10">
        <div className="col-span-11 px-4 py-2 flex items-center">
          <input
            id="name"
            name="name"
            placeholder="Search by Keyword"
            type="text"
            className="rounded-md p-4 focus:outline-none w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-light-gray" // Adjust styles as needed
          />
        </div>
        <div className="col-span-1 flex items-center w-full">
          <Image
            src="magnify-primary.svg"
            alt="Magnify"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-4">
        <CardHowCanWeHelpYou item={data.howCanWeHelpYou.cardStart} />
        <CardHowCanWeHelpYou item={data.howCanWeHelpYou.cardMarket} />
        <CardHowCanWeHelpYou item={data.howCanWeHelpYou.cardManage} />
      </div>

      <div className="flex justify-center mt-12 flex-wrap lg:flex-nowrap gap-4">
        <CardHorizontal
          bgColor="bg-[#FFF6FA]"
          link="#"
          item={data.chatWithUs.one}
        />
        <CardHorizontal
          bgColor="bg-[#FFF6FA]"
          link="#"
          item={data.chatWithUs.two}
        />
      </div>

      <div className="flex justify-end my-8">
        <Image src="/chat.svg" alt="chat" width={70} height={70} />
      </div>

      <div className="text-center">
        <Paragraph className="text-primary text-2xl font-semibold">
          Frequently Asked Questions
        </Paragraph>
        <Heading className="mt-4 mb-14">
          You’ve got questions? we’ve got answers
        </Heading>

        <div className="text-start flex gap-5 flex-wrap lg:flex-nowrap justify-center">
          <CardHorizontal item={data.questions.one} />
          <CardHorizontal item={data.questions.two} />
        </div>
        <div className="mt-5 text-start flex gap-5 flex-wrap lg:flex-nowrap justify-center">
          <CardHorizontal item={data.questions.three} />
          <CardHorizontal item={data.questions.four} />
        </div>
      </div>
    </Container>
  );
};
