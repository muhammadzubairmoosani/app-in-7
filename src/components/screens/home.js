"use client";
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
import { useState } from "react";

export const Home = () => {
  const [services, setServices] = useState(2);
  return (
    <div className="dark:bg-black">
      {/* Banner */}
      <div className="flex flex-col justify-center items-center home-background-image h-[480px] lg:h-[780px]">
        <div className="max-w-[1021px] h-[347px] flex flex-col  justify-between items-center">
          <Heading className="text-white md:text-7xl font-bold">
            Turn clicks into taps
          </Heading>
          <Paragraph className="text-white md:text-2xl font-medium text-center">
            One-stop shop where we transform websites into fully functional
            mobile app in just 7 days!
          </Paragraph>

          <div className="flex justify-center flex-wrap gap-5">
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

          <div className="flex justify-center mdjustify-between gap-2 flex-wrap w-full">
            <div className="flex justify-center items-center gap-4">
              <Image src="/cross.svg" alt="cross icon" width={24} height={24} />
              <Paragraph className="font-semibold md:text-[22px] text-white">
                7-Day Turnaround time
              </Paragraph>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image src="/paper.svg" alt="paper icon" width={24} height={24} />
              <Paragraph className="font-semibold md:text-[22px] text-white">
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
              <Paragraph className="font-semibold md:text-[22px] text-white">
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
        {/* E-COMMERCE */}
        <div className=" mt-14 mb-16 md:mb-24 flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row gap-4 justify-between items-center ">
          <div className="h-[300px] md:h-[340px]  flex justify-between flex-col max-w-[732px]">
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
            <div className="w-full md:mt-4 md:py-2">
              <Link
                href="/blog"
                className="bg-transparent font-semibold text-black dark:text-light-gray rounded-md"
              >
                Lets Start →
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="/video1.svg"
              className="w-full"
              alt="Rocket launching from a computer screen"
              width={312}
              height={210}
            />
          </div>
        </div>
        {/* E-COMMERCE */}

        {/* CARDS */}
        <div className="flex gap-1 gap-y-4 justify-center flex-wrap ">
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.one} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.two} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.three} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.four} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.five} />
          <CardHowItHelpsYourECommerceStore item={data.homeCardOne.six} />
        </div>
        {/* CARDS */}

        {/* DEMO APP */}
        <div className="mt-14 mb-16 md:mb-24 flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row gap-4 justify-between items-center ">
          {/* <div className="border-2 my-14 md:mb-24 flex justify-between items-center "> */}
          <div className="h-[300px] md:h-[340px] flex justify-between flex-col max-w-[732px]">
            <Paragraph className="text-primary dark:text-primary text-2xl font-medium">
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
              <div className="flex p-2 px-4 border border-light-gray dark:border-0 md:w-full  bg-light-gray dark:bg-dark rounded-xl">
                <input
                  id="name"
                  name="name"
                  placeholder="Click to Start App"
                  type="text"
                  className="p-2  bg-light-gray dark:bg-dark focus:outline-none w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-light-gray" // Adjust styles as needed
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
          {/* <hr className="border-1 m-4 w-full border-dashed border-primary" /> */}
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
        {/* DEMO APP */}

        {/* EXPERTISE */}
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
          <div className="my-14 md:mb-24 flex justify-between items-center  flex-col md:flex-row">
            <div>
              <Image
                src="/pc.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>

            <div className="h-[200px] flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Hybrid App
              </Paragraph>
              <Paragraph>
                involves using web languages such as HTML, CSS, and JavaScript
                that can be compiled as native apps that can function across
                multiple platforms without sacrificing website features.
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black dark:text-light-gray rounded-md"
                >
                  Claim Deal →
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className="my-14 md:mb-24 flex justify-between items-center flex-col-reverse md:flex-row">
            <div className="h-[200px] flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Cross-Platform App
              </Paragraph>
              <Paragraph>
                We  develop these using frameworks like React Native or Flutter
                which allow us to efficiently create apps that run on both iOS
                and Android. By utilizing this approach we can maintain native
                performance and achieve faster development.{" "}
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black dark:text-light-gray rounded-md"
                >
                  Signup →
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/pc1.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className="my-14 md:mb-24 flex justify-between items-center  flex-col md:flex-row">
            <div>
              <Image
                src="/pc2.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>

            <div className="h-[200px] flex justify-between flex-col max-w-[732px]">
              <Paragraph className="text-primary text-2xl font-medium">
                Low-code Development
              </Paragraph>
              <Paragraph>
                We deploy website functionalities as fully-functional mobile
                applications using a Web view component approach. In this
                scenario, we integrate website content within a native container
                for quick deployment of website features.{" "}
              </Paragraph>
              <div className="w-full mt-4 py-2">
                <Link
                  href="/blog"
                  className="bg-transparent font-semibold text-black dark:text-light-gray rounded-md"
                >
                  Try for free →
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className=" my-14 md:mb-24 flex justify-between items-center  flex-col-reverse  md:flex-row">
            <div className="h-[200px]  flex justify-between flex-col max-w-[732px]">
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
                  className="bg-transparent font-semibold text-black dark:text-light-gray rounded-md"
                >
                  Get Started →
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/pc3.svg"
                className="w-full"
                alt="Rocket launching from a computer screen"
                width={312}
                height={210}
              />
            </div>
          </div>
          {/* card */}
        </div>
        {/* EXPERTISE */}
      </Container>

      {/* SERVICES */}
      <div className="bg-light-gray dark:bg-dark py-12 px-4 ">
        <div className="text-center mb-12">
          <Paragraph className="text-primary dark:text-primary mb-6 text-xl font-medium">
            Value Add-on Services
          </Paragraph>
          <Heading>How we can help grow your business</Heading>
        </div>

        {services === 0 ? (
          <div>
            <div>
              <Paragraph className="text-xl font-medium text-center mb-12">
                This doesn&apos;t end at deployment - we&apos;re here to support
                you every step of the way post-launch:
              </Paragraph>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 ">
              <div
                className={`flex flex-col justify-between w-full h-[221px] p-4 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.postLaunch.one.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.postLaunch.one.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.postLaunch.one.subTitle}
                </h2>

                <Link
                  href={data.postLaunch.one.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.postLaunch.two.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.postLaunch.two.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.postLaunch.two.subTitle}
                </h2>

                <Link
                  href={data.postLaunch.two.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.postLaunch.three.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.postLaunch.three.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.postLaunch.three.subTitle}
                </h2>

                <Link
                  href={data.postLaunch.three.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.postLaunch.four.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.postLaunch.four.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.postLaunch.four.subTitle}
                </h2>

                <Link
                  href={data.postLaunch.four.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.postLaunch.five.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.postLaunch.five.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.postLaunch.five.subTitle}
                </h2>

                <Link
                  href={data.postLaunch.five.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.postLaunch.six.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.postLaunch.six.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.postLaunch.six.subTitle}
                </h2>

                <Link
                  href={data.postLaunch.six.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        ) : services === 1 ? (
          <div>Development</div>
        ) : (
          <div>
            <div>
              <Paragraph className="text-xl font-medium text-center mb-12">
                This doesn&apos;t end at deployment - we&apos;re here to support
                you every step of the way post-launch:
              </Paragraph>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 ">
              <div
                className={`flex flex-col justify-between w-full h-[221px] p-4 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.preLaunch.one.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">{data.preLaunch.one.title}</p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.preLaunch.one.subTitle}
                </h2>

                <Link
                  href={data.preLaunch.one.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.preLaunch.two.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">{data.preLaunch.two.title}</p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.preLaunch.two.subTitle}
                </h2>

                <Link
                  href={data.preLaunch.two.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.preLaunch.three.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.preLaunch.three.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.preLaunch.three.subTitle}
                </h2>

                <Link
                  href={data.preLaunch.three.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.preLaunch.four.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.preLaunch.four.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.preLaunch.four.subTitle}
                </h2>

                <Link
                  href={data.preLaunch.four.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.preLaunch.five.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">
                    {data.preLaunch.five.title}
                  </p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.preLaunch.five.subTitle}
                </h2>

                <Link
                  href={data.preLaunch.five.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>

              <div
                className={`flex flex-col justify-between w-full  h-[221px] p-6 rounded-lg overflow-hidden dark:bg-black max-w-[400px]`}
              >
                <div className="w-full flex items-center ">
                  <Image
                    className="mr-4"
                    src={data.preLaunch.six.image}
                    alt="Server Management"
                    width={36}
                    height={36}
                  />
                  <p className="text-lg max-w-60">{data.preLaunch.six.title}</p>
                </div>

                <h2 className="w-full  text-dark dark:text-light-gray">
                  {data.preLaunch.six.subTitle}
                </h2>

                <Link
                  href={data.preLaunch.six.link}
                  className="bg-transparent w-full text-dark dark:text-light-gray  font-medium"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* SERVICES */}

      <Container>
        {/* TESTIMONIALS */}
        <div className="mt-20">
          <Heading className="text-center">Our testimonials</Heading>
          <div className="mt-16 flex flex-wrap justify-center lg:flex-nowrap lg:justify-between gap-3 ">
            <CardOurTestimonials item={data.testimonials.one} />
            <CardOurTestimonials item={data.testimonials.two} />
            <CardOurTestimonials item={data.testimonials.three} />
          </div>
        </div>
        {/* TESTIMONIALS */}

        {/* VIDEOS */}
        <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-4 mt-16">
          <CardVideo />
          <CardVideo />
          <CardVideo />
          <CardVideo />
        </div>
        {/* VIDEOS */}

        {/* QUESTIONS */}
        <div className="text-center mt-20">
          <Paragraph className="dark:text-primary text-primary text-2xl font-semibold">
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
            className="bg-transparent w-full mt-8 inline-block text-dark dark:text-light-gray md:text-xl font-semibold"
          >
            View more →
          </Link>
        </div>
      </Container>
      {/* QUESTIONS */}
    </div>
  );
};
