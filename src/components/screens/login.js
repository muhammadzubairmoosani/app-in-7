import Image from "next/image";
import Link from "next/link";
import { Checkbox, CustomButton, Logo, TextField } from "../common";

export const Login = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 min-h-screen bg-light-gray dark:bg-inner-dark hidden sm:block md:block lg:block ">
        <div className="min-h-screen flex flex-col justify-between py-16 px-36 md:px-16">
          <div>
            <h2 className="font-medium text-xl md:text-3xl">Welcome</h2>
          </div>
          <div className="flex justify-center">
            <Logo width={380} />
          </div>
          <div>
            <p className="text-black dark:text-white text-base md:text-xl">
              Not a member yet?{" "}
              <Link href="#" className="underline bg-transparent font-medium">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 dark:bg-inner-dark flex justify-center ">
        <div className="md:w-[75%] min-h-screen flex flex-col justify-around">
          <h1 className="font-bold text-center md:text-left text-2xl md:text-4xl">
            Login
          </h1>
          <div>
            <TextField placeholder={"Email or Username"} />
            <TextField placeholder={"Password"} />
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col justify-between text-center w-full md:max-w-[80%] min-h-[280px]  md:min-h-[320px]">
              <Checkbox
                label="Keep me logged In"
                name="keepLoogedIn"
                onChange={() => {}}
              />

              <div className="text-center">
                <CustomButton className="w-full">
                  Continue with Email
                </CustomButton>
                <p className="mt-4 text-sm font-medium text-right">
                  Forgot your password?
                </p>
              </div>

              <div>
                <div className="text-start">
                  <p className="text-gray dark:text-white font-medium mb-6">
                    Or sign in with
                  </p>
                </div>

                <div className="p-6 px-8 mr-8 rounded-xl inline-block border-[1px] border-light-gray">
                  <Image
                    src="/apple.svg"
                    alt="Apple logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="p-6 px-8 rounded-xl inline-block border-[1px] border-light-gray">
                  <Image
                    src="/google.svg"
                    alt="Apple logo"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
