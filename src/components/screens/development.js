"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Container, CustomButton, Heading, Paragraph } from "../common";

export const Development = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      {/* TOP */}
      <div className="value-ad-ons-background-image bg-cover bg-no-repeat bg-center h-[420px] flex items-center mb-12">
        <div className="flex  flex-col items-center gap-12 max-w-[750px] mx-auto text-center px-4">
          <div>
            <Heading className="mt-2 md:text-5xl text-4xl text-white">
              Deployment
            </Heading>
          </div>
          <Paragraph className="text-white">
            But wait, there&apos;s more! We&apos;ll also handle iOS & Android
            Store Deployment, CRM & HRM Integration for smooth management, Live
            Chat & Tech Support for real-time assistance, and even Post Launch
            PR to maintain visibility after your big launch.
          </Paragraph>
        </div>{" "}
      </div>

      {/* BODY */}
      <Container>
        <div className="flex justify-center flex-wrap gap-20">
          <div>
            <div className="max-w-[330px] text-center flex flex-col items-center gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/apple-white.svg"
                      : "/apple-black.svg"
                  }
                  alt="apple"
                  width={20}
                  height={24}
                />
                <Paragraph>IOS</Paragraph>
              </div>
              <div>
                <Paragraph>
                  Easily add native navigation menus that follow Apple Design
                  Guidelines.
                </Paragraph>
              </div>
              <div>
                <CustomButton className="md:w-[210px]">
                  Click to start App
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

            <div className="max-w-[330px] mt-10">
              <Image
                src="/mobile.svg"
                alt="apple"
                className="w-full"
                width={20}
                height={24}
              />
            </div>
          </div>

          <div>
            <div className="max-w-[330px] text-center flex flex-col items-center gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/anroid-white.svg"
                      : "/anroid-black.svg"
                  }
                  alt="apple"
                  width={20}
                  height={24}
                />
                <Paragraph>Android</Paragraph>
              </div>
              <div>
                <Paragraph>
                  Add native navigation menus that follow Google’s Material
                  Design.
                </Paragraph>
              </div>
              <div>
                <CustomButton className="md:w-[210px]">
                  Click to start App
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

            <div className="max-w-[330px] mt-10">
              <Image
                src="/mobile1.svg"
                alt="apple"
                className="w-full"
                width={20}
                height={24}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
