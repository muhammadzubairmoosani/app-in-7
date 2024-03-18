import Link from "next/link";
import { CustomButton, Logo } from "../index"; // Assuming Logo component

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-16 bg-white dark:bg-gray-800">
      <Link href="/">
        <Logo width={150} />
      </Link>
      <div className="flex items-center space-x-8">
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Solutions
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Value Ads
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Resources
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Get Started
        </Link>
        <CustomButton bgColor="bg-transparent" className="hover:bg-light-gray">
          Login
        </CustomButton>
        {/* <button className="rounded-full bg-blue-500 py-2 px-4 text-white font-medium hover:bg-blue-600 focus:outline-none">
          Login
        </button> */}
      </div>
    </header>
  );
};
