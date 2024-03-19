import Image from "next/image";
import { CustomButton, Container, Heading, Paragraph } from "../common";

export const BlogOne = () => {
  return (
    <Container>
      <div className=" dark:bg-black min-h-screen">
        <div className="flex justify-center">
          <div className="text-center max-w-[650px] ">
            <Paragraph className="text-primary font-semibold text-xl mb-4">
              APIs and Beyond
            </Paragraph>
            <Heading className="md:text-5xl">
              Strategies for Governing and Optimizing API Usage
            </Heading>
          </div>
        </div>

        <div>
          <Image
            className="w-full mt-8 mb-8"
            src="/blog-3.svg"
            alt="business"
            width={100}
            height={100}
          />
        </div>

        <Paragraph>
          Modern software development - the effective governance and
          optimization of APIs (Application Programming Interfaces) have become
          crucial. APIs serve as the building blocks that enable seamless
          communication and integration between different systems and platforms.
          However, it wasn&apos;t always smooth sailing on the API front. This
          blog will help you learn some fascinating incidents in the past that
          highlights the importance of governing and optimizing API usage, and
          explore strategies for maximizing the potential of APIs in
          today&apos;s evolving digital landscape.
        </Paragraph>

        <div className="flex flex-wrap gap-6 mt-8 mb-16">
          <div className="bg-light-gray rounded-lg py-2 px-4">
            <Image src="/star.svg" alt="star" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center bg-light-gray rounded-lg py-2 px-4">
            <p className={`text-black dark:text-dark`}>Twitter API Incident</p>
          </div>
          <div className="bg-light-gray flex justify-center items-center rounded-lg  py-2 px-4">
            <p className={`text-black dark:text-dark`}>Strategies</p>
          </div>
          <div className="bg-light-gray flex justify-center items-center rounded-lg  py-2 px-4">
            <p className={`text-black dark:text-dark`}>Optimizing</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center max-w-[650px] ">
            <Paragraph className="text-primary font-semibold text-xl mb-4">
              Rise of Mobile Commerce
            </Paragraph>
            <Heading className="md:text-5xl">
              Transforming Websites into Apps
            </Heading>
          </div>
        </div>

        <div>
          <Image
            className="w-full mt-8 mb-8"
            src="/blog-2.svg"
            alt="business"
            width={100}
            height={100}
          />
        </div>

        <Paragraph>
          One of the most remarkable trends that has transformed the way we shop
          and interact with online platforms is the rise of mobile commerce. The
          shift from traditional websites to dedicated mobile apps has
          revolutionized the way businesses connect with their customers. It is
          fascinating to explore how this transition has unfolded over time,
          driven by various technical events and accidents that steered the
          course of mobile commerce.
        </Paragraph>

        <div className="flex flex-wrap gap-6 mt-8 mb-16">
          <div className="bg-light-gray rounded-lg py-2 px-4">
            <Image src="/star.svg" alt="star" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center bg-light-gray rounded-lg  py-2 px-4">
            <p className={`text-black dark:text-dark`}>Store app revolution</p>
          </div>
          <div className="bg-light-gray flex justify-center items-center rounded-lg  py-2 px-4">
            <p className={`text-black dark:text-dark`}>
              Mobile-Friendly Algorithm Update
            </p>
          </div>
          <div className="bg-light-gray flex justify-center items-center rounded-lg  py-2 px-4">
            <p className={`text-black dark:text-dark`}>
              Rise of mobile payment solutions
            </p>
          </div>
        </div>

        <Heading className="md:text-5xl text-center">
          Subscribe to our blog and stay in the know about the latest in the
          world of APPIN7!
        </Heading>

        <div className="flex justify-center mt-14">
          <div className="flex p-2 px-4 border border-light-gray md:w-[555px]  bg-light-gray rounded-xl">
            <input
              id="name"
              name="name"
              placeholder="Search by Keyword"
              type="text"
              className="p-2  bg-light-gray focus:outline-none w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-light-gray" // Adjust styles as needed
            />
            <CustomButton className="w-[112px]">Subscribe</CustomButton>
          </div>
        </div>
      </div>
    </Container>
  );
};
