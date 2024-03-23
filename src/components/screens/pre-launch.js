import data from "@/lib/data.json";
import {
  CardGetStarted,
  Container,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const PreLaunch = () => {
  return (
    <div>
      {/* TOP */}
      <div className="value-ad-ons-background-image bg-cover bg-no-repeat bg-center h-[420px] flex items-center mb-12 md:mb-0 ">
        <div className="flex  flex-col items-center gap-12 max-w-[750px] mx-auto text-center px-4">
          <div>
            <Heading className="mt-2 md:text-5xl text-4xl text-white">
              Pre Lunch Service
            </Heading>
          </div>
          <Paragraph className="text-white">
            Get ready to soar with our comprehensive pre-launch services that
            covers everything you need to kickstart your journey
          </Paragraph>
          <CustomButton bgColor="bg-white" textColor="text-black">
            Start Free Trial
          </CustomButton>
        </div>{" "}
      </div>

      {/* BODY */}
      <Container>
        <div className="flex flex-col gap-3 my-14">
          <Heading>Looking to take your app to the next level</Heading>
          <Paragraph className="text-lg">
            Well, you&apos;ve come to the right place! At Appin7, we&apos;ve got
            everything you need to make your app shine brighter than ever
            before.
          </Paragraph>
        </div>

        <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap mb-4 gap-4">
          <CardGetStarted item={data.preLaunch.one} />
          <CardGetStarted item={data.preLaunch.two} />
          <CardGetStarted item={data.preLaunch.three} />
        </div>
        <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-4">
          <CardGetStarted item={data.preLaunch.four} />
          <CardGetStarted item={data.preLaunch.five} />
          <CardGetStarted item={data.preLaunch.six} />
        </div>
      </Container>
    </div>
  );
};
