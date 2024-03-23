import data from "@/lib/data.json";
import {
  CardGetStarted,
  Container,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const PostLaunch = () => {
  return (
    <div>
      {/* TOP */}
      <div className="value-ad-ons-background-image bg-cover bg-no-repeat bg-center h-[420px] flex items-center mb-12 md:mb-0 ">
        <div className="flex  flex-col items-center gap-12 max-w-[750px] mx-auto text-center px-4">
          <div>
            <Heading className="mt-2 md:text-5xl text-4xl text-white">
              Post Launch
            </Heading>
          </div>
          <Paragraph className="text-white">
            This doesn&apos;t end at deployment - we&apos;re here to support you
            every step of the way post-launch
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
          <CardGetStarted item={data.postLaunch.one} />
          <CardGetStarted item={data.postLaunch.two} />
          <CardGetStarted item={data.postLaunch.three} />
        </div>
        <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-4">
          <CardGetStarted item={data.postLaunch.four} />
          <CardGetStarted item={data.postLaunch.five} />
          <CardGetStarted item={data.postLaunch.six} />
        </div>
      </Container>
    </div>
  );
};
