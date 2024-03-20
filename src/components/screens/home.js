import data from "@/lib/data.json";
import Image from "next/image";
import Link from "next/link";
import {
  CardGetStarted,
  CardHorizontal,
  CardHowItHelpsYourECommerceStore,
  CardOurTestimonials,
  CardVideo,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div>
        <Heading></Heading>
        <Paragraph></Paragraph>

        <div>
          <CustomButton>Get Started</CustomButton>
          <CustomButton>
            <Image src="/play.svg" alt="watch demo" width={100} height={100} />
            Watch demo
          </CustomButton>
        </div>

        <div>
          <div>
            <Image src="/cross.svg" alt="cross icon" width={100} height={100} />
            <Paragraph>7-Day Turnaround time</Paragraph>
          </div>
          <div>
            <Image src="/paper.svg" alt="paper icon" width={100} height={100} />
            <Paragraph>One-stop Tech Solutions</Paragraph>
          </div>
          <div>
            <Image
              src="/speaker.svg"
              alt="speaker icon"
              width={100}
              height={100}
            />
            <Paragraph>Market Competitive Prices</Paragraph>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* logos */}
      <div>
        <Image src="/logos.svg" alt="logos" width={100} height={100} />
      </div>
      {/* logos */}

      {/* e-Commerce */}
      <div>
        <div className="bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p- px-8 py-12 max-w-[306px] max-h-[449px]">
          <div className="relative w-full h-48">
            <Image
              className="absolute inset-0 object-cover rounded-lg my-0 mx-auto"
              src="/Launch-with-Tech-Excellence.svg"
              alt="Rocket launching from a computer screen"
              width={151}
              height={113}
            />
          </div>
          <h2 className="w-full text-base font-semibold text-gray-800 mb-2">
            Launch with Tech Excellence
          </h2>
          <p className="text-gray-800 text-[14px]">
            Our blend of creative design and tech innovation means you hit the
            market running (or flying)’
          </p>
          <div className="w-full mt-4 py-2">
            <Link
              href="/blog"
              className="bg-transparent text-[14px] text-black rounded-md"
            >
              Lets Start →
            </Link>
          </div>
        </div>
        <div>
          <Image
            // className="absolute inset-0 object-cover rounded-lg my-0 mx-auto"
            src="/Launch-with-Tech-Excellence.svg"
            alt="Rocket launching from a computer screen"
            width={312}
            height={210}
          />
        </div>
      </div>
      {/* e-Commerce */}

      {/* cards */}
      <div>
        <CardHowItHelpsYourECommerceStore item={data.homeCardOne.one} />
        <CardHowItHelpsYourECommerceStore item={data.homeCardOne.two} />
        <CardHowItHelpsYourECommerceStore item={data.homeCardOne.three} />
        <CardHowItHelpsYourECommerceStore item={data.homeCardOne.four} />
        <CardHowItHelpsYourECommerceStore item={data.homeCardOne.five} />
        <CardHowItHelpsYourECommerceStore item={data.homeCardOne.six} />
      </div>
      {/* cards */}

      {/* demo apps */}
      <div>
        <div>
          <Heading>DEMO APPS</Heading>
          <Heading>
            Transform to e-commerce store to an application in real time
          </Heading>
          <Paragraph>
            Let&apos;s transform your E-commerce Store into a compatible mobile
            app that aligns best  with your business model Today! 
          </Paragraph>
          <div className="flex justify-center mt-14">
            <div className="flex p-2 px-4 border border-light-gray md:w-[555px]  bg-light-gray rounded-xl">
              <input
                id="name"
                name="name"
                placeholder="Click to Start App"
                type="text"
                className="p-2  bg-light-gray focus:outline-none w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-light-gray" // Adjust styles as needed
              />
              <CustomButton className="w-[112px]">Click to start</CustomButton>
            </div>
          </div>
        </div>

        <div>
          <Image src="/mobile.svg" alt="logos" width={100} height={100} />
        </div>
      </div>
      {/* demo apps */}

      {/* Expertise */}
      <div>
        <Heading>Expertise</Heading>
        <Paragraph>
          No iOS or Android development expertise? No problem! Appin 7 helps you
          to integrate native app functionalities with intricate native code. We
          empower you to excel while we handle the technical complexity by
          developing a powerful API linking system that bridges the gap between
          your app and website, ensuring smooth communication and enhanced user
          experience.
        </Paragraph>
      </div>

      <div>
        <div>
          <Image src="/mobile.svg" alt="logos" width={100} height={100} />
        </div>
        <div>
          <CardHorizontal item={data.homeCardTwo["1"]} />
        </div>
      </div>
      <div>
        <div>
          <Image src="/mobile.svg" alt="logos" width={100} height={100} />
        </div>
        <div>
          <CardHorizontal item={data.homeCardTwo["2"]} />
        </div>
      </div>
      <div>
        <div>
          <Image src="/mobile.svg" alt="logos" width={100} height={100} />
        </div>
        <div>
          <CardHorizontal item={data.homeCardTwo["3"]} />
        </div>
      </div>
      <div>
        <div>
          <Image src="/mobile.svg" alt="logos" width={100} height={100} />
        </div>
        <div>
          <CardHorizontal item={data.homeCardTwo["4"]} />
        </div>
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
              got everything you need to make your app shine brighter than ever
              before.
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
          href={title.Link}
          className="bg-transparent w-full text-dark text-xl font-semibold"
        >
          View more →
        </Link>
      </div>
      {/* Frequently Asked Questions */}
    </div>
  );
};
