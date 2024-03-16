import Link from "next/link";
import { Logo } from "../common";

export const Login = () => {
  return (
    <div class="flex">
      <div class="w-1/2 min-h-screen bg-light-gray flex flex-col justify-between py-16 pl-36">
        <div>
          <h2 className="font-medium text-3xl">Welcome</h2>
        </div>
        <div>
          <Logo width={380} />
        </div>
        <div>
          <p className="text-black text-xl">
            Not a member yet?{" "}
            <Link href="#" className="underline bg-transparent font-medium">
              Register Now
            </Link>
          </p>
        </div>
      </div>
      <div class="w-1/2 min-h-screen flex flex-col justify-between">
        <div>x</div>
        <div>y</div>
        <div>z</div>
      </div>
    </div>
  );
};
