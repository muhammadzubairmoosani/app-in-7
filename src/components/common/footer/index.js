"use client";
import Image from "next/image";
import {
  Container,
  Paragraph,
  CustomButton,
  Heading,
  TextField,
  Logo,
  ThemeSwitch,
} from "../index";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="bg-light-gray dark:bg-dark py-14 mt-14">
      <Container>
        <div className="gap-4 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 my-2 lg:my-0">
            <Heading className="md:text-[22px]">
              Subscribe our Newsletters
            </Heading>
            <Paragraph className="my-4 ">
              Enter your email for our newsletters.
            </Paragraph>

            <div className="flex gap-4 mb-4 flex-wrap md:flex-nowrap">
              <TextField
                className="mb-0 w-52"
                inputClassName="rounded-2xl border-gray bg-light-gray dark:bg-dark"
                placeholder="Enter your email for our newsletters."
              />
              <CustomButton
                bgColor="bg-light-gray-1"
                textColor="text-black"
                className="dark:bg-black dark:text-light-gray"
              >
                SUBSCRIBE
              </CustomButton>
            </div>

            <Paragraph>
              By signing up, you agree to receive marketing emails from Appin7.
              Personal data will be used in accordance with
              Appin7’s Privacy Policy.
            </Paragraph>
          </div>

          <div className="col-span-12 lg:col-span-4 my-2 lg:my-0">
            <Heading className="md:text-[22px]">
              Don’t have a APPIN7 account?
            </Heading>
            <Paragraph className="my-4">
              Get started with a APPIN7 services.
            </Paragraph>

            <CustomButton
              bgColor="bg-light-gray-1"
              textColor="text-black"
              className="md:w-[210px] dark:bg-black dark:text-light-gray"
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

          <div className="col-span-12 lg:col-span-4 my-2 lg:my-0">
            <Heading className="md:text-[22px]">Download from</Heading>

            <div className="flex gap-4 mt-4">
              <div>
                <Paragraph className="font-semibold mb-3">App Store</Paragraph>
                <CustomButton className="md:w-[210px]" bgColor="bg-black">
                  <Image
                    className="mr-2 "
                    src="/app-store.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                  Apple
                </CustomButton>
              </div>

              <div>
                <Paragraph className="font-semibold  mb-3">
                  Play Store
                </Paragraph>
                <CustomButton className="md:w-[210px]" bgColor="bg-black">
                  <Image
                    className="mr-2"
                    src="/play-store.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                  Android
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <Logo width={40} height={40} />
          <Paragraph className="text-gray text-lg font-medium">
            A Product of Nexovia Digital
          </Paragraph>
          <ThemeSwitch />
        </div>
      </Container>
    </div>
  );
};
