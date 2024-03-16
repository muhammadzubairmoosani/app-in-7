import Image from "next/image";
import Link from "next/link";

export const CardNormal = () => {
  return (
    <div className="w-full max-w-[430px] overflow-hidden shadow-sm p-6">
      <div className="flex justify-center">
        <Image
          className="text-center"
          src="/reason_to_join_1.svg"
          alt="Rocket launching from a computer screen"
          width={150}
          height={150}
        />
      </div>

      <h2 className="text-xl font-semibold text-dark my-4">
        work with extra-ordinary people
      </h2>

      <p className="text-gray text-xl">
        When you connect driven people, exceptional things happen. No matter the
        role, you’ll find a team of pros that will help you learn, grow and
        thrive.
      </p>
    </div>
  );
};
