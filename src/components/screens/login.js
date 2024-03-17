import Link from "next/link";
import { Logo, ThemeSwitch } from "../common";

export const Login = () => {
  return (
    <div className="flex">
      <div className="w-1/2 min-h-screen bg-light-gray dark:bg-inner-dark flex flex-col justify-between py-16 pl-36">
        <div>
          {/* <ThemeSwitch /> */}
          <h2 className="font-medium text-3xl">Welcome</h2>
        </div>
        <div>
          <Logo width={380} />
        </div>
        <div>
          <p className="text-black dark:text-white text-xl">
            Not a member yet?{" "}
            <Link href="#" className="underline bg-transparent font-medium">
              Register Now
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 min-h-screen dark:bg-inner-dark flex flex-col justify-between">
        <div>x</div>
        <div>y</div>
        <div>z</div>
      </div>
    </div>
  );
};
