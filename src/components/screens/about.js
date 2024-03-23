"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Container, CustomButton, Heading, Paragraph } from "../common";

export const About = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <div className="about-background-image  bg-no-repeat bg-center max-h-[420px] box-content flex items-center py-8">
        {/* TOP */}
        <div className="flex flex-col items-center gap-4 max-w-[750px] mx-auto text-center px-2">
          <div>
            <Heading className="mt-2 md:text-5xl" textSize="text-4xl">
              Why Appin7
            </Heading>
          </div>
          <Paragraph>
            Our journey began three years ago while serving in the IT industry
            for over a decade, fueled by a team of experts with collective
            experience in the IT industry. With a passion for technology driving
            us forward, we&apos;re dedicated to addressing industry gaps through
            innovative solutions like our one-click automations, similar to the
            game-changer Appin 7. Along the way, we&apos;ve encountered and
            overcome technical challenges, each one fueling our commitment to
            pushing boundaries and exceeding expectations of our valuable
            clients all across the globe.
          </Paragraph>
        </div>
      </div>

      {/* BODY */}
      <Container>
        <div className="flex flex-col gap-14">
          {/* card */}
          <div className="mt-14 flex justify-between items-center flex-col-reverse md:flex-row">
            <div className=" flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary my-6 text-4xl md:text-5xl text-center md:text-start font-medium">
                Appin7 - Vision
              </Paragraph>
              <Paragraph>
                Appin7 envisions a future where technology is limitless and
                accessible to all. Inspired by our Research Institute of
                Technology, we&apos;re dedicated to fostering a community of
                passionate innovators, providing free training and tools to
                empower individuals worldwide. Our mission is simple: to ignite
                innovation and democratize access to IT expertise as our
                contribution to help the world transform digitally.
              </Paragraph>
            </div>
            <div>
              <Image
                src="/vision.svg"
                className="w-full"
                alt="vision"
                width={312}
                height={210}
              />
            </div>
          </div>
          {/* card */}

          <div className="flex flex-col gap-8 text-center text-lg">
            <div className="flex justify-center items-center">
              <Heading className="text-4xl md:text-6xl" textSize="text-4xl">
                Why Appin7
              </Heading>
              <Image
                src="/what.svg"
                alt="why"
                width={112}
                height={169}
                className="what"
              />
            </div>

            <Paragraph>
              At Appin7, we&apos;re not just another tech platform – we&apos;re
              pioneers in the digital frontier, pushing boundaries and
              redefining what&apos;s possible. What sets us apart? Our
              continuous effort for  innovation and our commitment to
              inclusivity.
            </Paragraph>
            <Paragraph>
              In a world where technology is constantly evolving, Appin7 stands
              out as a true leader in advancement. We pride ourselves on staying
              at the forefront of the latest tech trends, Utilizing our power to
              deliver unrivaled performance, security, and user experience.
              Whether it&apos;s our seamless hosting services, captivating
              website development, or strategic PR campaigns, we are committed
              to exceeding expectations. However, what truly sets us apart is
              our unwavering commitment to inclusivity. At Appin7, we firmly
              believe that technology should be accessible to everyone,
              regardless of their abilities. That&apos;s why we adhere to A11y
              (accessibility) standards in all our web design and content. We
              strive to involve everyone in the digital conversation and ensure
              that no one is left behind in this ever-changing technological
              landscape.
            </Paragraph>
            <Paragraph>
              So, why choose Appin7? Because we&apos;re not just building the
              future of tech – we&apos;re building a future where everyone has a
              seat at the table. Join us on this journey, and together,
              let&apos;s create a world where innovation knows no bounds
            </Paragraph>
          </div>

          <div className="flex flex-col gap-8 text-center text-lg">
            <div>
              <Heading className="md:text-6xl">
                Appin7 - a Product of Nexovia Digital
              </Heading>
            </div>

            <Paragraph>
              Nexovia Digital - Global ITSM Company, an esteemed beacon of
              innovation in the ever-expanding cyberspace, has consistently
              proven its expertise in web development, digital marketing, and
              all areas of technology. Like skilled digital wizards, they have
              woven spells of success for businesses far and wide.
            </Paragraph>
            <Paragraph>
              Despite their remarkable digital adventures, a new chapter began
              to unfold. From the depths of their creative cauldron came an
              unparalleled masterpiece: “Appin7”. Meticulously crafted using the
              finest digital components, Appin7 expresses a digital dream turned
              into reality.{" "}
            </Paragraph>
            <Paragraph>
              With the rising sun illuminating the digital landscape, Nexovia
              Digital proudly introduced Appin7 to the world. Its instant web to
              app, hosting services, captivating website development, and
              powerful marketing solutions set a new standard in the tech
              industry.
            </Paragraph>

            <Paragraph>
              This is how commenced the captivating story of Appin7 - a
              narrative of unwavering innovation, boundless creativity, and
              endless possibilities. Guided by the brilliance of Nexovia
              Digital, Appin7 started in the tech industry, empowering
              businesses to script their own digital destiny. Together, they
              grow on an extraordinary journey where imagination knows no limits
            </Paragraph>
          </div>

          <div className="mx-auto max-w-[687px] text-center">
            <div className="mb-14">
              <Heading className="md:text-6xl">
                Appin7 - a Product of Nexovia Digital
              </Heading>
            </div>

            <div className="flex justify-center">
              <CustomButton
                bgColor="bg-light-gray-1"
                textColor="text-black"
                className=" md:w-[210px] dark:bg-black dark:text-light-gray"
              >
                Click to start
                <Image
                  className="ml-2"
                  src={
                    resolvedTheme === "dark"
                      ? "/right-arrow.svg"
                      : "/right-arrow-black.svg"
                  }
                  alt="Arrow"
                  width={15}
                  height={10}
                />
              </CustomButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
