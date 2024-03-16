import Image from "next/image";
import { CustomButton } from "../buttons";

const plans = {
  pro: [
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
  ],
  plus: [
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
    "Progressive Web Application",
  ],
};

export const LetsChoosePlan = () => {
  return (
    <div className="bg-white max-w-[628px] border-[1px] border-gray rounded-lg shadow-md overflow-hidden flex flex-col  p-[50px]">
      <h2 className="text-xl font-medium text-dark mb-2">Appin7 Pro</h2>

      <p className="text-dark text-xl mt-4 mb-6">
        In this package we’re offering all in one business solution with a web
        view mobile application and Value Addons.{" "}
      </p>

      <h1 className="text-primary text-4xl">$ 999</h1>

      <div className="mt-12">
        {plans.pro.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <dev className="flex items-center mr-2">
              <Image
                className="mr-3 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/check.svg"
                alt="check"
                width={21}
                height={19}
                priority
              />

              <span className="text-gray-700 text-dark text-xl">{item}</span>
            </dev>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full text-center">
        <CustomButton width="w-[313px]">Get Started</CustomButton>
      </div>
    </div>
  );
};
