import Image from "next/image";
import { CustomButton, Heading, Paragraph, TextField } from "../common";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className=" px-2 md:max-w-[60%] mx-auto flex flex-col gap-12">
      <div>
        <Heading>Get Started Now</Heading>
      </div>

      <div className="flex flex-col items-center gap-12">
        <div>
          <div className="p-6 px-8 mr-8 rounded-xl inline-block border-[1px] border-light-gray">
            <Image src="/apple.svg" alt="Apple logo" width={25} height={25} />
          </div>
          <div className="p-6 px-8 rounded-xl inline-block border-[1px] border-light-gray">
            <Image src="/google.svg" alt="Apple logo" width={25} height={25} />
          </div>
        </div>
        <Paragraph className="text-gray text-xl">Or sign up with</Paragraph>
      </div>

      <div className="flex gap-6 flex-col">
        <div className="flex flex-col md:flex-row gap-6">
          <TextField placeholder="First name" className="md:w-1/2" />
          <TextField placeholder="Last name" className="md:w-1/2" />
        </div>
        <div className="flex flex-col gap-6">
          <TextField placeholder="Phone number" />
          <TextField placeholder="Email" />
          <TextField placeholder="Password" />
        </div>
      </div>

      <div className=" flex justify-center">
        <CustomButton className="bg-gradient-to-r from-customRed to-customIndigo md:w-[325px]">
          Continue
        </CustomButton>
      </div>

      <div>
        <Paragraph>
          Account already exists?{" "}
          <Link href="#" className="underline font-semibold">
            Login Now
          </Link>
        </Paragraph>
      </div>
    </div>
  );
};
