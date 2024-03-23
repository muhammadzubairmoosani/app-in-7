import data from "@/lib/data.json";
import {
  CardLetsStart,
  Container,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const MarketSolution = () => {
  return (
    <div>
      {/* TOP */}
      <div className="market-solution-background-image bg-cover bg-no-repeat bg-center h-screen flex items-center mb-12 md:mb-0 ">
        <div className="flex  flex-col items-center gap-12 max-w-[750px] mx-auto text-center px-4">
          <div>
            <Paragraph className="dark:text-primary  font-medium text-primary text-2xl">
              Market
            </Paragraph>
            <Heading className="mt-2 md:text-5xl">
              Ready to Market your Brand
            </Heading>
          </div>
          <Paragraph>
            We at Appin 7 help businesses to reach their full potential in the
            digital sphere. Market your business effectively with our advanced
            tools and strategies designed for your unique goals. With years of
            real-time experience to expand your reach across social platforms
            with our integrated solutions, enabling you to engage with audiences
            where they&apos;re most active. Enhancing customer satisfaction
            through personalized chat support, ensuring prompt responses and
            building trust through targeted campaigns. We help businesses to
            collect valuable insights into your audience with our comprehensive
            analytics tools, enabling data-driven decision-making for maximum
            impact.
          </Paragraph>
          <CustomButton>Start Free Trial</CustomButton>
        </div>{" "}
      </div>

      {/* BODY */}
      <Container>
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-2">
          <CardLetsStart item={data.marketSolution["1"]} />
          <CardLetsStart item={data.marketSolution["2"]} />
          <CardLetsStart item={data.marketSolution["3"]} />
        </div>
      </Container>
    </div>
  );
};
