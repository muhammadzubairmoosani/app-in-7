import Image from "next/image";

export const CardOurTestimonials = () => {
  return (
    <div
      className={`w-full max-w-[443px] p-10 px-6 rounded-lg overflow-hidden bg-light-gray`}
    >
      <Image
        className="ml-8 mb-10"
        src="/testimonial_1.svg"
        alt="Our Testimonials"
        width={70}
        height={70}
      />

      <Image src="/quotes.svg" alt="Our Testimonials" width={25} height={25} />

      <h2 className="text-[20px] mt-4 mb-6 text-gray">
        Lorem ipsum dolor sit amet consectetur. Curabitur felis quam massa eget
        ut. Purus imperdiet pretium congue quam dolor gravida odio. Quis lacus
        diam fringilla facilisis ornare integer in consequat egestas. Malesuada
        sit praesent iaculis elementum ultrices viverra.{" "}
      </h2>

      <div className="w-full flex items-center ">
        <Image
          className="mr-4"
          src="/avatar.svg"
          alt="Avatar"
          width={70}
          height={70}
        />
        <div>
          <p className="text-2xl text-black font-semibold">Name</p>
          <p className="text-xl text-gray font-medium">Profession</p>
        </div>
      </div>
    </div>
  );
};
