import { CustomButton, Heading, Paragraph, TextField } from "../common";
import { DropdownField } from "../common/input-fiels/drop-down";

export const GetStartes = () => {
  return (
    <div className="px-2 md:max-w-[60%] mx-auto">
      <div>
        <Heading>One last thing we promise.</Heading>
        <Paragraph className="mt-6">
          We love to know more about what you do?
        </Paragraph>
      </div>

      <div className="flex gap-6 flex-col my-[50px]">
        <TextField placeholder="YOUR COMPANY NAME" />
        <TextField placeholder="Your business name" />

        <DropdownField placeholder="Company size" />
        <DropdownField placeholder="Your business type" />
        <DropdownField placeholder="What is primary goal with APPIN7?" />
      </div>

      <div className=" flex justify-center">
        <CustomButton className="bg-gradient-to-r from-customRed to-customIndigo md:w-[325px]">
          Go to my account
        </CustomButton>
      </div>
    </div>
  );
};
