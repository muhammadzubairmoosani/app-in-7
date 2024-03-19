import Image from "next/image";
import { CustomButton, Container, Heading, Paragraph } from "../common";

export const BlogTwo = () => {
  return (
    <Container>
      <div className=" dark:bg-black min-h-screen">
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

        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-4">
          <div>
            <Paragraph className="text-2xl font-semibold mb-7">
              App Store Revolution
            </Paragraph>
            <Paragraph className="text-xl">
              One pivotal event that sparked the rise of mobile commerce was the
              introduction of the App Store by Apple in 2008. It revolutionized
              the way apps were distributed and opened up new avenues for
              businesses to reach their consumers. The App Store made it easier
              for developers to create and showcase their apps, giving rise to a
              plethora of innovative e-commerce solutions. This event laid the
              foundation for the transformation of websites into dedicated apps,
              leading to a more seamless and personalized shopping experience
            </Paragraph>
          </div>

          <div>
            <Paragraph className="text-2xl font-semibold mb-7">
              Mobile-Friendly Algorithm Update
            </Paragraph>
            <Paragraph className="text-xl">
              In 2015, Google introduced a major algorithm update that
              significantly impacted mobile commerce. The update aimed to
              improve the mobile browsing experience by favoring websites that
              were mobile-friendly in search rankings. This event forced
              businesses to prioritize mobile optimization, ensuring that their
              websites were responsive, fast, and user-friendly across various
              devices. As a result, many businesses started investing in
              developing dedicated mobile apps to provide a superior user
              experience, ultimately driving the transformation of websites into
              apps.
            </Paragraph>
          </div>

          <div>
            <Paragraph className="text-2xl font-semibold mb-7">
              Rise of Mobile Payment Solutions
            </Paragraph>
            <Paragraph className="text-xl">
              Another important trend that contributed to the growth of mobile
              commerce was the emergence of mobile payment solutions. With the
              introduction of technologies like Apple Pay, Google Pay, and
              digital wallets, consumers could make transactions quickly and
              securely from their mobile devices. The convenience and ease of
              mobile payments further fueled the demand for mobile apps, as
              businesses saw an opportunity to provide a seamless checkout
              experience within their apps. This trend encouraged more
              businesses to transition from websites to apps, enabling them to
              tap into the rapidly expanding mobile commerce market.
            </Paragraph>
          </div>
        </div>

        <div className="my-12">
          <Paragraph className="text-xl font-bold mb-5">Conclusion</Paragraph>
          <Paragraph className="text-lg">
            As the rise of mobile commerce continues to reshape the digital
            landscape, businesses must adapt to stay competitive. The journey
            from websites to apps has been paved with technical events and
            trends that have ushered in a new era of shopping experiences. To
            fully transform the potential of mobile commerce, businesses should
            adopt the transformation and leverage the power of dedicated mobile
            apps. Appin 7 provides a comprehensive platform for businesses to
            create their own apps, equipped with features like personalized
            recommendations, push notifications, and secure mobile payments.
            Join the mobile commerce revolution and visit our website to explore
            new opportunities for your business with Appin 7 today!
          </Paragraph>

          <Paragraph className="text-lg mt-6">
            Ready to take your business to new heights in the mobile commerce
            arena? Get started with Appin 7 now and embark on a journey of
            innovation and success!
          </Paragraph>
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
