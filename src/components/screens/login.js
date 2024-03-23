import Image from "next/image";
import {
  Checkbox,
  CustomButton,
  Heading,
  Paragraph,
  TextField,
} from "../common";
import Link from "next/link";

export const Login = () => {
  return (
    <div className=" px-2 md:max-w-[60%] mx-auto flex flex-col gap-12">
      <div>
        <Heading>Login</Heading>
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
        <Paragraph className="text-gray text-xl">Or sign in with</Paragraph>
      </div>

      <div className="flex flex-col gap-6">
        <TextField placeholder={"Email or Username"} />
        <TextField placeholder={"Password"} />
      </div>

      <div>
        <Checkbox
          label="Keep me logged In"
          name="keepLoogedIn"
          onChange={() => {}}
        />
      </div>

      <div className="flex flex-col w-full md:max-w-[325px] mx-auto">
        <CustomButton className="bg-gradient-to-r from-customRed to-customIndigo md:w-[325px]">
          Continue
        </CustomButton>

        <p className="mt-4 text-sm font-medium text-right">
          Forgot your password?
        </p>
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
