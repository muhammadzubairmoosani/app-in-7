import Image from "next/image";
import Link from "next/link";

export const CardGetStarted = () => {
  return (
    <div
      className={`w-full max-w-[490px] p-8 rounded-lg overflow-hidden  border-2 border-light-gray`}
    >
      <div className="w-full flex items-center ">
        <Image
          className="mr-4"
          src="/server-management.svg"
          alt="Server Management"
          width={50}
          height={50}
        />
        <p className="text-xl max-w-40">Server Management</p>
      </div>

      <h2 className="w-full text-lg mt-6 mb-14 text-dark">
        Streamline customer and employee management processes with our powerful
        CRM solutions{" "}
      </h2>

      <Link
        href="#"
        className="bg-transparent w-full text-dark text-xl font-semibold"
      >
        Get Started →
      </Link>
    </div>
  );
};
