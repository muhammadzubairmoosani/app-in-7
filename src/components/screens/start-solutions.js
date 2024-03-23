import data from "@/lib/data.json";
import {
  CardLetsStart,
  Container,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const StartSolution = () => {
  return (
    <div>
      {/* TOP */}
      <div className="start-solution-background-image bg-cover bg-no-repeat bg-center h-screen flex items-center mb-12 md:mb-0 ">
        <div className="flex  flex-col items-center gap-12 max-w-[750px] mx-auto text-center px-4">
          <div>
            <Paragraph className="dark:text-primary  font-medium text-primary text-2xl">
              Start
            </Paragraph>
            <Heading className="mt-2 md:text-5xl">
              Ready to Build your Brand
            </Heading>
          </div>
          <Paragraph>
            Appin 7 - a comprehensive solution that empowers businesses of all
            sizes, including startups, to excel by transitioning their
            operations and adapting the best tech facilities. Take the first
            step in revolutionizing your business by accessing our user-friendly
            platform. With just a few clicks, you can create a stunning mobile
            app that connects with your target audience, enhances customer
            engagement, and boosts your brand visibility. Plus, we offer the
            option to own your site domain, solidifying your brand presence and
            giving you full control. Explore our range of free business tools,
            designed to streamline your operations and improve efficiency.
            Discover the possibilities and take your business to new heights
            with our comprehensive suite of solutions.
          </Paragraph>
          <CustomButton>Start Free Trial</CustomButton>
        </div>{" "}
      </div>

      {/* BODY */}
      <Container>
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-2">
          <CardLetsStart item={data.startSolution["1"]} />
          <CardLetsStart item={data.startSolution["2"]} />
          <CardLetsStart item={data.startSolution["3"]} />
          <CardLetsStart item={data.startSolution["4"]} />
        </div>
      </Container>
    </div>
  );
};
