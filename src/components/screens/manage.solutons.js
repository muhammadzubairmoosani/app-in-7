import data from "@/lib/data.json";
import {
  CardLetsStart,
  Container,
  CustomButton,
  Heading,
  Paragraph,
} from "../common";

export const ManageSolution = () => {
  return (
    <div>
      {/* TOP */}
      <div className="manage-solution-background-image bg-cover bg-no-repeat bg-center h-screen flex items-center mb-12 md:mb-0 ">
        <div className="flex  flex-col items-center gap-12 max-w-[750px] mx-auto text-center px-4">
          <div>
            <Paragraph className="dark:text-primary  font-medium text-primary text-2xl">
              Manage
            </Paragraph>
            <Heading className="mt-2 md:text-5xl">
              Manage Your Growing Business
            </Heading>
          </div>
          <Paragraph>
            Appin 7 - your all-in-one destination for optimizing business
            operations and maximizing efficiency. Manage your business with our
            excellent range of tools and solutions. From streamlining workflows
            to optimizing resource allocation, we help you to efficiently manage
            your business operations. Monitor the performance accurately with
            our advanced analytics, gaining valuable insights to drive informed
            decisions and strategic planning. Expedite order fulfillment and
            enhance customer satisfaction by leveraging our streamlined shipping
            solutions, ensuring prompt delivery and easy tracking. Take control
            of your inventory and orders with accuracy.
          </Paragraph>
          <CustomButton>Start Free Trial</CustomButton>
        </div>{" "}
      </div>

      {/* BODY */}
      <Container>
        <div className="flex justify-center flex-wrap gap-2">
          <CardLetsStart item={data.manageSolution["1"]} />
          <CardLetsStart item={data.manageSolution["2"]} />
          <CardLetsStart item={data.manageSolution["3"]} />
          <CardLetsStart item={data.manageSolution["4"]} />
          <CardLetsStart item={data.manageSolution["5"]} />
        </div>
      </Container>
    </div>
  );
};
