import data from "@/lib/data.json";
import Image from "next/image";
import Link from "next/link";
import {
  CardGetStarted,
  CardHorizontal,
  CardHowItHelpsYourECommerceStore,
  CardOurTestimonials,
  CardVideo,
  Container,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className="flex flex-col justify-center items-center home-background-image h-[780px]">
        <div className="max-w-[1021px] h-[347px] flex flex-col  justify-between items-center">
          <Heading className="text-white md:text-7xl font-bold">
            Turn clicks into taps
          </Heading>
          <Paragraph className="text-white md:text-2xl font-medium text-center">
            One-stop shop where we transform websites into fully functional
            mobile app in just 7 days!
          </Paragraph>

          <div className="flex justify-center gap-5">
            <CustomButton>Get Started</CustomButton>
            <CustomButton bgColor="bg-white" textColor="text-primary">
              <Image
                src="/play.svg"
                alt="watch demo"
                className="mr-2"
                width={20}
                height={20}
              />
              Watch demo
            </CustomButton>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center gap-4">
              <Image src="/cross.svg" alt="cross icon" width={24} height={24} />
              <Paragraph className="font-semibold text-[22px] text-white">
                7-Day Turnaround time
              </Paragraph>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image src="/paper.svg" alt="paper icon" width={24} height={24} />
              <Paragraph className="font-semibold text-[22px] text-white">
                One-stop Tech Solutions
              </Paragraph>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/speaker.svg"
                alt="speaker icon"
                width={24}
                height={24}
              />
              <Paragraph className="font-semibold text-[22px] text-white">
                Market Competitive Prices
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* logos */}
      <div>
        <Image
          src="/logos.svg"
          alt="logos"
          className="w-full"
          width={100}
          height={100}
        />
      </div>
      {/* logos */}

      <Container>
        {/* e-Commerce */}
        <div className="border-2 mt-14 mb-24 flex justify-between items-center ">
          <div className="h-[340px] border-2 flex justify-between flex-col max-w-[732px]">
            <Paragraph className="text-primary text-2xl font-medium">
              E-COMMERCE
            </Paragraph>
            <Heading>How It Helps Your Ecommerce Store</Heading>
            <Paragraph>
              With just one click, Appin7 can assist you in creating your
              personalized e-commerce operative application for all devices that
              will increase your brand recognition and loyalty towards your
              consumers.
            </Paragraph>
            <div className="w-full mt-4 py-2">
              <Link
                href="/blog"
                className="bg-transparent font-semibold text-black rounded-md"
              >
                Lets Start →
              </Link>
            </div>
          </div>
          <div>
            <Image
              // className="absolute inset-0 object-cover rounded-lg my-0 mx-auto"
              src="/video1.svg"
              className="w-full"
              alt="Rocket launching from a computer screen"
              width={312}
              height={210}
            />
          </div>
        </div>
        {/* e-Commerce */}

        {/* cards */}
        <div className="flex gap-1 gap-y-4 justify-between flex-wrap ">
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.one} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.two} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.three} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.four} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.five} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.six} />
        </div>
        {/* cards */}

        {/* e-Commerce */}
        <div className="border-2 mt-14 mb-24 flex justify-between items-center ">
          <div className="h-[340px] border-2 flex justify-between flex-col max-w-[732px]">
            <Paragraph className="text-primary text-2xl font-medium">
              DEMO APPS
            </Paragraph>
            <Heading>
              Transform to e-commerce store to an application in real time
            </Heading>
            <Paragraph>
              Let&apos;s transform your E-commerce Store into a compatible
              mobile app that aligns best  with your business model Today! {" "}
            </Paragraph>
            {/* <div className="w-full mt-4 py-2"> */}
            <div
            //  className="flex"
            >
              <div className="flex p-2 px-4 border border-light-gray md:w-full  bg-light-gray rounded-xl">
                <input
                  id="name"
                  name="name"
                  placeholder="Click to Start App"
                  type="text"
                  className="p-2  bg-light-gray focus:outline-none w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-light-gray" // Adjust styles as needed
                />
                <CustomButton className="md:w-[210px]">
                  Click to start
                  <Image
                    className="ml-2"
                    src="/right-arrow.svg"
                    alt="Arrow"
                    width={15}
                    height={10}
                  />
                </CustomButton>
              </div>
            </div>{" "}
          </div>
          {/* </div> */}
          <div>
            <Image
              // className="absolute inset-0 object-cover rounded-lg my-0 mx-auto"
              src="/mobile.svg"
              className="w-full"
              alt="Rocket launching from a computer screen"
              width={312}
              height={210}
            />
          </div>
        </div>
        {/* e-Commerce */}

        {/* Expertise */}
        <div className="text-center">
          <Heading className="mb-8">Expertise</Heading>
          <Paragraph>
            No iOS or Android development expertise? No problem! Appin 7 helps
            you to integrate native app functionalities with intricate native
            code. We empower you to excel while we handle the technical
            complexity by developing a powerful API linking system that bridges
            the gap between your app and website, ensuring smooth communication
            and enhanced user experience.
          </Paragraph>
        </div>

        <div>
          {/* card */}
          <div className="border-2 mt-14 mb-24 flex justify-between items-center  flex-col md:flex-row">
            <div>
              <Image
                src="/pc.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>

            <div className="h-[200px] border-2 flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Native App
              </Paragraph>
              <Paragraph>
                We use specific programming languages and application
                programming interfaces (APIs) to replicate website
                functionalities into an interactive mobile experience that is
                specific to the platform it&apos;s designed for.
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black rounded-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className="border-2 mt-14 mb-24 flex justify-between items-center  flex-col md:flex-row">
            <div>
              <Image
                src="/pc.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>

            <div className="h-[200px] border-2 flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Native App
              </Paragraph>
              <Paragraph>
                We use specific programming languages and application
                programming interfaces (APIs) to replicate website
                functionalities into an interactive mobile experience that is
                specific to the platform it&apos;s designed for.
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black rounded-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className="border-2 mt-14 mb-24 flex justify-between items-center  flex-col md:flex-row">
            <div>
              <Image
                src="/pc.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>

            <div className="h-[200px] border-2 flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Native App
              </Paragraph>
              <Paragraph>
                We use specific programming languages and application
                programming interfaces (APIs) to replicate website
                functionalities into an interactive mobile experience that is
                specific to the platform it&apos;s designed for.
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black rounded-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className="border-2 mt-14 mb-24 flex justify-between items-center  flex-col md:flex-row">
            <div>
              <Image
                src="/pc.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>

            <div className="h-[200px] border-2 flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Native App
              </Paragraph>
              <Paragraph>
                We use specific programming languages and application
                programming interfaces (APIs) to replicate website
                functionalities into an interactive mobile experience that is
                specific to the platform it&apos;s designed for.
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black rounded-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
          {/* card */}
        </div>

        {/* Expertise */}

        {/* Value Add-on Services */}
        <div>
          <Heading>Value Add-on Services</Heading>
          <Heading>How we can help grow your business</Heading>

          {/* Post Launch */}
          <div>
            <div>
              <Heading>
                This doesn&apos;t end at deployment - we&apos;re here to support
                you every step of the way post-launch:
              </Heading>
            </div>
            <div>
              <CardGetStarted item={data.postLaunch.one} />
              <CardGetStarted item={data.postLaunch.two} />
              <CardGetStarted item={data.postLaunch.three} />
              <CardGetStarted item={data.postLaunch.four} />
              <CardGetStarted item={data.postLaunch.five} />
              <CardGetStarted item={data.postLaunch.six} />
            </div>
          </div>
          {/* Post Launch */}

          {/* Pre Launch */}
          <div>
            <div>
              <Heading>
                Well, you&apos;ve come to the right place! At Appin7, we&apos;ve
                got everything you need to make your app shine brighter than
                ever before.
              </Heading>
            </div>
            <div>
              <CardGetStarted item={data.preLaunch.one} />
              <CardGetStarted item={data.preLaunch.two} />
              <CardGetStarted item={data.preLaunch.three} />
              <CardGetStarted item={data.preLaunch.four} />
              <CardGetStarted item={data.preLaunch.five} />
              <CardGetStarted item={data.preLaunch.six} />
            </div>
          </div>
          {/* Pre Launch */}
        </div>
        {/* Value Add-on Services */}

        {/* Our testimonials */}
        <div>
          <CardOurTestimonials item={data.testimonials.one} />
          <CardOurTestimonials item={data.testimonials.two} />
          <CardOurTestimonials item={data.testimonials.three} />
        </div>
        {/* Our testimonials */}

        {/* Video */}
        <div>
          <CardVideo />
          <CardVideo />
          <CardVideo />
          <CardVideo />
        </div>
        {/* Video */}

        {/* Frequently Asked Questions */}
        <div className="text-center">
          <Paragraph className="text-primary text-2xl font-semibold">
            Frequently Asked Questions
          </Paragraph>
          <Heading className="mt-4 mb-14">
            You&apos;ve got questions? we&apos;ve got answers
          </Heading>

          <div className="text-start flex gap-5 flex-wrap lg:flex-nowrap justify-center">
            <CardHorizontal item={data.questions.one} />
            <CardHorizontal item={data.questions.two} />
          </div>
          <div className="mt-5 text-start flex gap-5 flex-wrap lg:flex-nowrap justify-center">
            <CardHorizontal item={data.questions.three} />
            <CardHorizontal item={data.questions.four} />
          </div>

          <Link
            href="#"
            className="bg-transparent w-full text-dark text-xl font-semibold"
          >
            View more →
          </Link>
        </div>
      </Container>
      {/* Frequently Asked Questions */}
    </div>
  );
};
