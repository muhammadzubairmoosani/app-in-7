import Image from "next/image";
import Link from "next/link";
import { Logo } from "../common";

export const GetStarted = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div className="min-h-[620px]  flex flex-col items-center justify-between">
        <Logo width={100} />
        <h1 className="text-2xl md:text-4xl font-medium">
          Create an Appin7 account
        </h1>

        <p className="text-lg md:text-xl">
          One last step before starting your...
        </p>

        <div className="flex">
          <div className="p-6 px-8 mr-8 rounded-xl inline-block border-[1px] border-light-gray">
            <Image src="/apple.svg" alt="Apple logo" width={25} height={25} />
          </div>
          <div className="p-6 px-8 rounded-xl inline-block border-[1px] border-light-gray">
            <Image src="/google.svg" alt="Apple logo" width={25} height={25} />
          </div>
        </div>

        <div className="">
          <Image src="/or.svg" alt="or" width={350} height={350} />
        </div>

        <p className="text-xl">
          Already have an account?{" "}
          <span>
            <Link href="#" className="bg-transparent  w-full text-primary">
              Login
            </Link>
          </span>
        </p>

        <p className="text-base mt-4">
          By proceeding, you agree to the Terms and Conditions and Privacy
          Policy
        </p>
      </div>
    </div>
  );
};
